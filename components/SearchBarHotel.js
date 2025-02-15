import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import Select from 'react-select';

export default function SearchBarHotel({ categories }) {
  const router = useRouter();
  const { city: urlCity, people: urlPeople, dates: urlDates } = router.query;
  
  const [city, setCity] = useState('');
  const [people, setPeople] = useState('');
  const [dates, setDates] = useState('');

  // Update state when URL parameters change
  useEffect(() => {
    if (urlCity) {
      setCity({ value: urlCity, label: urlCity });
    }
    if (urlPeople) setPeople(urlPeople);
    if (urlDates) setDates(urlDates);
  }, [urlCity, urlPeople, urlDates]);

  // Filter categories for hotels
  const hotelCategories = categories
    .filter(category => category.parent !== null && category.parent !== undefined)
    .map(category => ({
      value: category.name,
      label: category.name
    }));

  const handleSearch = () => {
    if (!city) return;

    router.push({
      pathname: '/searchpage/hotelssearchpage',
      query: {
        city: city.value,
        people,
        dates
      }
    });
  };

  return (
    <div className="flex items-center justify-center p-5 w-[1000px] h-[95px] bg-gradient-to-r from-[rgba(255,255,255,0.255)] to-[rgba(255,255,255,0.135)] shadow-[0px_10px_30px_rgba(123,188,176,0.5)] rounded-[35px]">
      {/* City Name Input */}
      <div className="flex-1 px-2">
        <div className='flex text-secondary justify-start items-center gap-1'>
          <FaMapMarkerAlt className="text-lg" />
          <p>Location</p>
        </div>
        <Select
          value={city}
          onChange={(selectedOption) => setCity(selectedOption)}
          options={hotelCategories}
          className="w-full"
          classNamePrefix="select"
          placeholder="Search for hotels..."
          isClearable
          isSearchable
        />
      </div>

      {/* Number of Guests Input */}
      <div className="flex-1 px-2">
        <div className='flex text-secondary justify-start items-center gap-1'>
          <FaUsers className="text-lg" />
          <p>Guests</p>
        </div>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          placeholder="Number of guests"
          className="w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary"
          min="1"
        />
      </div>

      {/* Date picker */}
      <div className="flex-1 px-2">
        <div className='flex text-secondary justify-start items-center gap-1'>
          <FaCalendarAlt className="text-lg" />
          <p>Check-in / Check-out</p>
        </div>
        <input
          type="date"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Search Button */}
      <div className="flex-1 px-2">
        <div className="h-6"></div>
        <button
          onClick={handleSearch}
          className="w-full h-[42px] bg-secondary hover:bg-white hover:border hover:border-secondary hover:text-black text-black shadow-custom-button rounded-custom-button transition duration-300"
        >
          Search Hotels
        </button>
      </div>
    </div>
  );
}


