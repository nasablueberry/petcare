import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import AllServices from './pages/AllServices.jsx';
import ServiceDetails from './pages/ServiceDetails.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import MyProfile from './pages/MyProfile.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import UpdateProfile from './pages/UpdateProfile.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-services" element={<AllServices />} />
              <Route path="/service/:id" element={
                <ProtectedRoute>
                  <ServiceDetails />
                </ProtectedRoute>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/my-profile" element={
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              } />
              <Route path="/update-profile" element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </AuthProvider>
    </Router>
  );
}
