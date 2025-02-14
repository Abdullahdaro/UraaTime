import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import { mongooseConnect } from "@/lib/mongoose";
import SearchBar from "@/components/SearchBar";
import TransferCards from "@/components/Transfer/TransferCards";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Center from "@/components/Center";
import { useRouter } from 'next/router';

export default function SearchPage({ featuredProduct, newProducts, categories }) {

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
      // Replace with your actual API endpoint
      const response = await fetch(`/api/search?city=${city}&people=${people}&dates=${dates}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  
  const [filters, setFilters] = useState({
    meetAndGreet: false,
    babySeat: false,
    disableChair: false,
    arabicSpeaker: false,
    englishSpeaker: false,
    date: '',
    passengers: 1,
    luggage: 1,
    languageEnglish: false,
    languageArabic: false,
    languageFrench: false,
    languageTurkish: false,
    languageRussian: false,
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
        <SearchBar categories={categories} className="flex text-center"  />
      </div>
      <div className="flex p-5">
        <div className="w-1/4 p-2.5">
          <div className="mb-4 bg-[#FFF1DA] p-5 p-x-10 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-primary">Services</h3>
            <div className="space-y-4">
              {/* Baby Seat Toggle */}
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => handleFilterChange("babySeat")}
                  className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                    ${filters.babySeat ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.babySeat ? 'transform translate-x-7' : ''}`}
                  />
                </div>
                <span className="text-base font-bold">Baby Seat</span>
              </div>

              {/* Disable Seat Toggle */}
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => handleFilterChange("disableSeat")}
                  className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                    ${filters.disableSeat ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.disableSeat ? 'transform translate-x-7' : ''}`}
                  />
                </div>
                <span className="text-base font-bold">Disable Seat</span>
              </div>

              {/* Meet & Greet Toggle */}
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => handleFilterChange("meetAndGreet")}
                  className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                    ${filters.meetAndGreet ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.meetAndGreet ? 'transform translate-x-7' : ''}`}
                  />
                </div>
                <span className="text-base font-bold">Meet & Greet</span>
              </div>
            </div>
          </div>
          <div className="mb-4 bg-[#FFF1DA] p-5 p-x-10 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-primary">Driver Language</h3>
            <div className="space-y-4">
              {/* English Toggle */}
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => handleFilterChange("languageEnglish")}
                  className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                    ${filters.languageEnglish ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.languageEnglish ? 'transform translate-x-7' : ''}`}
                  />
                </div>
                <span className="text-base font-bold">English</span>
              </div>

              {/* Arabic Toggle */}
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => handleFilterChange("languageArabic")}
                  className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                    ${filters.languageArabic ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.languageArabic ? 'transform translate-x-7' : ''}`}
                  />
                </div>
                <span className="text-base font-bold">Arabic</span>
              </div>

              {/* French Toggle */}
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => handleFilterChange("languageFrench")}
                  className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                    ${filters.languageFrench ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.languageFrench ? 'transform translate-x-7' : ''}`}
                  />
                </div>
                <span className="text-base font-bold">French</span>
              </div>

              {/* Turkish Toggle */}
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => handleFilterChange("languageTurkish")}
                  className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                    ${filters.languageTurkish ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.languageTurkish ? 'transform translate-x-7' : ''}`}
                  />
                </div>
                <span className="text-base font-bold">Turkish</span>
              </div>

              {/* Russian Toggle */}
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => handleFilterChange("languageRussian")}
                  className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
                    ${filters.languageRussian ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div 
                    className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-300 shadow-md
                      ${filters.languageRussian ? 'transform translate-x-7' : ''}`}
                  />
                </div>
                <span className="text-base font-bold">Russian</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transfer Cards Section */}
        <div className="w-2/3 p-2.5">
          {newProducts.map((product) => (
            <Link 
              href={`/Transfer/${product._id}`} 
              key={product._id}
              className="block transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg"
            >
              <TransferCards
                product={{
                  name: product.title,
                  quantity: 1,
                  type: product.type,
                  passengers: product.passengers,
                  price: product.price,
                  image: product.images,
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
  const newProducts = await Product.find({category: category._id}).sort({ _id: -1 });

  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
