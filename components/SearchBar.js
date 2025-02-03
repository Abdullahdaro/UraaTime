import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';

export default function SearchBar() {
  const router = useRouter();
  const { city: urlCity, people: urlPeople, dates: urlDates } = router.query;
  
  const [city, setCity] = useState('');
  const [people, setPeople] = useState('');
  const [dates, setDates] = useState('');

  // Update state when URL parameters change
  useEffect(() => {
    if (urlCity) setCity(urlCity);
    if (urlPeople) setPeople(urlPeople);
    if (urlDates) setDates(urlDates);
  }, [urlCity, urlPeople, urlDates]);

  const handleSearch = () => {
    if (!city) return;

    router.push({
      pathname: '/SearchPages/SearchPage',
      query: {
        city,
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
        <label className="flex items-center">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black"
          />
        </label>
      </div>
      {/* Number of People Input */}
      <div className="flex-1 px-2">
        <div className='flex text-secondary justify-start items-center gap-1'>
          <FaUsers className="text-lg" />
          <p>Guests</p>
        </div>
        <label className="flex items-center">
          <input
            type="number"
            placeholder="Number of people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            min="1"
          />
        </label>
      </div>
      {/* Dates Input */}
      <div className="flex-1 px-2">
        <div className='flex text-secondary justify-start items-center gap-1'>
          <p>Date</p>
        </div>
        <label className="flex items-center">
          <input
            type="date"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
      </div>
      {/* Search Button */}
      <div className="flex-1 px-2">
        <div className="h-6"></div> {/* This empty div matches the height of the labels above inputs */}
        <button
          onClick={handleSearch}
          className={`w-full h-[42px] bg-secondary hover:bg-white hover:border hover:border-secondary hover:text-black text-black shadow-custom-button rounded-custom-button`}
        >
          Search
        </button>
      </div>
    </div>
  );
}
