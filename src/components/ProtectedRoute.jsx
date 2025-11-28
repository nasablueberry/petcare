import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function ProtectedRoute({ children }) {
  const { user, loading, isDemoMode } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  // In demo mode, allow access but show warning
  if (isDemoMode) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-gray-900 mb-4">Firebase Configuration Required</h2>
          <p className="text-gray-700 mb-6">
            This page requires authentication, but Firebase is not configured yet. 
            Please set up your Firebase credentials to access protected features.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p>1. Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Firebase Console</a></p>
            <p>2. Create or select a project</p>
            <p>3. Get your configuration and update <code className="bg-yellow-100 px-1 rounded">firebase.config.json</code></p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
