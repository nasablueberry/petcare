import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import toast from 'react-hot-toast';
import { Mail, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || '');
  const [loading, setLoading] = useState(false);
  const { resetPassword, isDemoMode } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isDemoMode) {
      toast.error('Please configure Firebase credentials to use authentication');
      return;
    }
    
    setLoading(true);

    try {
      await resetPassword(email);
      toast.success('Password reset email sent! Check your inbox.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      toast.error(error.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🔐</div>
            <h2 className="text-gray-900 mb-2">Reset Password</h2>
            <p className="text-gray-600">
              Enter your email and we'll send you a link to reset your password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || isDemoMode}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </button>
          </form>

          {/* Back to Login */}
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 mt-6"
          >
            <ArrowLeft size={18} />
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
