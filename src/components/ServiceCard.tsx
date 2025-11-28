import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {service.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-gray-900 mb-2">{service.serviceName}</h3>

        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
          <MapPin size={16} />
          <span>{service.providerName}</span>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm">{service.rating}</span>
          <span className="text-gray-400 text-sm ml-2">
            ({service.slotsAvailable} slots available)
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-blue-600 text-2xl">${service.price}</div>
          <Link
            to={`/service/${service.serviceId}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}