import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import toast from 'react-hot-toast';
import { Star, MapPin, Mail, Clock, DollarSign, Tag, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
  });

  const service = services.find((s) => s.serviceId === Number(id));

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-4">Service Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Service "${service.serviceName}" booked successfully!`);
    setFormData({ name: '', email: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Image and Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-right">
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={20} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xl">{service.rating}</span>
                  </div>
                </div>

                <h1 className="text-gray-900 mb-4">{service.serviceName}</h1>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={20} className="text-blue-600" />
                    <span>{service.providerName}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={20} className="text-blue-600" />
                    <span>{service.providerEmail}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={20} className="text-blue-600" />
                    <span>{service.slotsAvailable} slots available</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <DollarSign size={20} className="text-blue-600" />
                    <span className="text-3xl text-blue-600">${service.price}</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-gray-900 mb-3">Service Description</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-blue-900 mb-2">What's Included:</h4>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>✓ Professional service by certified experts</li>
                    <li>✓ Premium quality products and materials</li>
                    <li>✓ Follow-up care instructions</li>
                    <li>✓ 100% satisfaction guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24" data-aos="fade-left">
              <h2 className="text-gray-900 mb-2">Book This Service</h2>
              <p className="text-gray-600 mb-6">
                Fill in your details to book {service.serviceName}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Service Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-gray-900 mb-3">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="text-gray-900">{service.serviceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Provider:</span>
                      <span className="text-gray-900">{service.providerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="text-blue-600 text-xl">${service.price}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
                >
                  Book Now
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By booking, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-center mb-8" data-aos="fade-up">
            Similar Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.category === service.category && s.serviceId !== service.serviceId)
              .slice(0, 3)
              .map((relatedService) => (
                <div
                  key={relatedService.serviceId}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/service/${relatedService.serviceId}`)}
                  data-aos="fade-up"
                >
                  <img
                    src={relatedService.image}
                    alt={relatedService.serviceName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-gray-900 mb-2">{relatedService.serviceName}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm">{relatedService.rating}</span>
                      </div>
                      <span className="text-blue-600 text-xl">${relatedService.price}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}