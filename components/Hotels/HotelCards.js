import React from 'react';
import { FaStar, FaWifi, FaSwimmer, FaCoffee, FaParking } from 'react-icons/fa';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function HotelCards({ hotel }) {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Function to render amenity icons
  const renderAmenities = (amenities) => {
    const amenityIcons = {
      wifi: <FaWifi className="text-gray-600" title="Free WiFi" />,
      pool: <FaSwimmer className="text-gray-600" title="Swimming Pool" />,
      breakfast: <FaCoffee className="text-gray-600" title="Breakfast Included" />,
      parking: <FaParking className="text-gray-600" title="Free Parking" />,
    };

    return amenities.map((amenity, index) => (
      <div key={index} className="tooltip" title={amenity}>
        {amenityIcons[amenity]}
      </div>
    ));
  };

  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg transition-shadow duration-300">
      {/* Hotel Image */}
      <div className="relative w-72 h-48">
        <Image
          src={hotel.images?.[0] || '/placeholder-hotel.jpg'}
          alt={hotel.name}
          fill
          style={{objectFit: 'cover'}}
          className="rounded-l-xl"
        />
      </div>

      {/* Hotel Information */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {hotel.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">{hotel.type}</p>
            
            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-3">
              {renderStars(hotel.rating)}
              <span className="text-sm text-gray-600 ml-2">
                ({hotel.rating} / 5)
              </span>
            </div>

            {/* Amenities */}
            <div className="flex gap-3 mt-3">
              {renderAmenities(hotel.amenities || [])}
            </div>
          </div>

          {/* Price Section */}
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              ${hotel.price}
              <span className="text-sm font-normal text-gray-600">/night</span>
            </p>
            <button className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-4 text-sm text-gray-600">
          <p>{hotel.location}</p>
        </div>
      </div>
    </div>
  );
}

// PropTypes for type checking
HotelCards.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.required,
    type: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number.required,
    images: PropTypes.arrayOf(PropTypes.string),
    amenities: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.string
  }).required
};
