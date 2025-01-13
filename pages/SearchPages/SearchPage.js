import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import SearchBar from "@/components/SearchBar";
import TransferCards from "@/components/Transfer/TransferCards";
import { useState } from "react";
import Link from 'next/link';
import Center from "@/components/Center";
export default function SearchPage({ featuredProduct, newProducts }) {
  const [filters, setFilters] = useState({
    meetAndGreet: false,
    babySeat: false,
    disableChair: false,
    arabicSpeaker: false,
    englishSpeaker: false,
    date: '',
    passengers: 1,
    luggage: 1,
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
        <SearchBar className="flex text-center" />
      </div>
      <div className="flex p-5">
        {/* Filter Section */}
        <div className="w-1/4 p-2.5">
          {/* New Date, Passengers, and Luggage Filters */}
          <div className="mb-4 bg-primary p-5 p-x-10 rounded-lg">
                <label className="block text-base font-bold mb-1">Date</label>
                <input
                  type="date"
                  value={filters.date}
                  onChange={(e) => handleFilterChange("date", e.target.value)}
                  className="w-full p-3 border rounded"
                />
              <div className="mt-4">
                <label className="block text-base font-bold mb-1">Number of Passengers</label>
                <input
                  type="number"
                  min="1"
                  value={filters.passengers}
                  onChange={(e) => handleFilterChange("passengers", parseInt(e.target.value))}
                  className="w-full p-3 border rounded"
                />
              </div>
              <div className="mt-4">
                <label className="block text-base font-bold mb-1">Number of Luggage</label>
                <input
                  type="number"
                  min="0"
                  value={filters.luggage}
                  onChange={(e) => handleFilterChange("luggage", parseInt(e.target.value))}
                  className="w-full p-3 border rounded"
                />
              </div>
          </div>


          <div className="mb-4 bg-primary p-5 p-x-10 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Services</h3>
            <div className="mb-1">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={filters.meetAndGreet}
                  onChange={() => handleFilterChange("meetAndGreet")}
                  className="rounded"
                />
                <span className="text-base font-bold">Meet & Greet</span>
              </label>
            </div>
            <div className="mb-1">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={filters.babySeat}
                  onChange={() => handleFilterChange("babySeat")}
                  className="rounded"
                />
                <span className="text-base font-bold">Baby Seat</span>
              </label>
            </div>
            <div className="mb-1">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={filters.disableChair}
                  onChange={() => handleFilterChange("disableChair")}
                  className="rounded"
                />
                <span className="text-base font-bold">Disable Chair</span>
              </label>
            </div>
            <div className="mb-1">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={filters.arabicSpeaker}
                  onChange={() => handleFilterChange("arabicSpeaker")}
                  className="rounded"
                />
                <span className="text-base font-bold">Arabic Speaker</span>
              </label>
            </div>
            <div className="mb-1">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={filters.englishSpeaker}
                  onChange={() => handleFilterChange("englishSpeaker")}
                  className="rounded"
                />
                <span className="text-base font-bold">English Speaker</span>
              </label>
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

export async function getServerSideProps() {
  const featuredProductId = '66af42883a8ee35ab52c58c3';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
