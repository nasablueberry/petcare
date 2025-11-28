import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { Mail, User, Calendar, Edit } from 'lucide-react';

export default function MyProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  const joinDate = user.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Unknown';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>

            {/* Profile Content */}
            <div className="relative px-8 pb-8">
              {/* Profile Picture */}
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/150'}
                  alt={user.displayName || 'User'}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-gray-900 mb-1">{user.displayName || 'Anonymous User'}</h1>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={() => navigate('/update-profile')}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit size={18} />
                  Update Profile
                </button>
              </div>

              {/* Profile Details */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Account Information */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-gray-900 mb-4">Account Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="text-gray-900">{user.displayName || 'Not set'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="text-gray-900">{user.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Member Since</p>
                        <p className="text-gray-900">{joinDate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                  <h3 className="mb-4">Your WarmPaws Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Services Booked</span>
                      <span className="text-3xl">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Upcoming Appointments</span>
                      <span className="text-3xl">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Favorite Services</span>
                      <span className="text-3xl">0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-gray-900 mb-4">Recent Activity</h3>
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">📋</div>
                  <p className="text-gray-600">No recent activity</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Book a service to see your activity here
                  </p>
                  <button
                    onClick={() => navigate('/')}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Browse Services
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate('/')}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-4xl mb-3">🐾</div>
              <h3 className="text-gray-900 mb-2">Browse Services</h3>
              <p className="text-gray-600 text-sm">
                Explore winter care services for your pets
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm">
                Get help from our friendly support team
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate('/update-profile')}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="text-gray-900 mb-2">Account Settings</h3>
              <p className="text-gray-600 text-sm">
                Manage your profile and preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
