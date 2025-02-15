import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Hotel} from "@/models/Hotels";
import {Category} from "@/models/Category";
import { mongooseConnect } from "@/lib/mongoose";
import SearchBarHotel from "@/components/SearchBarHotel";
import HotelCards from "@/components/Hotels/HotelCards";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Center from "@/components/Center";
import { useRouter } from 'next/router';

export default function HotelSearchPage({ hotels, categories }) {
  const router = useRouter();
  const { city } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (city) {
      fetchSearchResults();
    }
  }, [city]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(`/api/hotels/search?city=${city}&people=${people}&dates=${dates}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching hotel search results:', error);
    }
  };
  
  const [filters, setFilters] = useState({
    breakfast: false,
    parking: false,
    wifi: false,
    pool: false,
    gym: false,
    airportShuttle: false,
    petsAllowed: false,
    spa: false,
    rating: '',
    priceRange: '',
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: typeof value === 'undefined' ? !prev[filterName] : value,
    }));
  };

  return (
    <div>
      <Header />
      <Center>
        <div className="flex flex-col items-center justify-center mt-20">
          <SearchBarHotel categories={categories} className="flex text-center" />
        </div>
        <div className="flex p-5">
          {/* Filters Section */}
          <div className="w-1/4 p-2.5">
            <div className="mb-4 bg-[#FFF1DA] p-5 p-x-10 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-primary">Amenities</h3>
              <div className="space-y-4">
                {/* Breakfast Toggle */}
                <div className="flex items-center gap-3">
                  <div 
                    onClick={() => handleFilterChange("breakfast")}
                    className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                      ${filters.breakfast ? 'bg-green-500' : 'bg-gray-300'}`}
                  >
                    <div className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.breakfast ? 'transform translate-x-7' : ''}`}
                    />
                  </div>
                  <span className="text-base font-bold">Breakfast Included</span>
                </div>

                {/* WiFi Toggle */}
                <div className="flex items-center gap-3">
                  <div 
                    onClick={() => handleFilterChange("wifi")}
                    className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                      ${filters.wifi ? 'bg-green-500' : 'bg-gray-300'}`}
                  >
                    <div className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.wifi ? 'transform translate-x-7' : ''}`}
                    />
                  </div>
                  <span className="text-base font-bold">Free WiFi</span>
                </div>

                {/* Pool Toggle */}
                <div className="flex items-center gap-3">
                  <div 
                    onClick={() => handleFilterChange("pool")}
                    className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                      ${filters.pool ? 'bg-green-500' : 'bg-gray-300'}`}
                  >
                    <div className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.pool ? 'transform translate-x-7' : ''}`}
                    />
                  </div>
                  <span className="text-base font-bold">Swimming Pool</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Cards Section */}
          <div className="w-2/3 p-2.5">
            {hotels.map((hotel) => (
              <Link 
                href={`/hotel/${hotel._id}`} 
                key={hotel._id}
                className="block transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                <HotelCards
                  hotel={{
                    name: hotel.title,
                    type: hotel.type,
                    rating: hotel.rating,
                    price: hotel.price,
                    image: hotel.images,
                    amenities: hotel.amenities,
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </Center> 
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { city } = context.query;
  await mongooseConnect();
  const categories = await Category.find({});
  const category = await Category.findOne({name: city});
  const hotels = await Hotel.find({category: category?._id}).sort({ _id: -1 });

  return {
    props: {
      hotels: JSON.parse(JSON.stringify(hotels)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
