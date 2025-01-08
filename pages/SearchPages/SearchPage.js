import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import SearchBar from "@/components/SearchBar";
import TransferCards from "@/components/Transfer/TransferCards";
import { useState } from "react";
import Link from 'next/link';

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
      <div className="flex flex-col items-center justify-center">
        <SearchBar className="flex text-center" />
      </div>
      <div className="flex p-5">
        {/* Filter Section */}
        <div className="w-1/3 p-2.5 bg-gray-50">
          {/* New Date, Passengers, and Luggage Filters */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Trip Details</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  value={filters.date}
                  onChange={(e) => handleFilterChange("date", e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Number of Passengers</label>
                <input
                  type="number"
                  min="1"
                  value={filters.passengers}
                  onChange={(e) => handleFilterChange("passengers", parseInt(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Number of Luggage</label>
                <input
                  type="number"
                  min="0"
                  value={filters.luggage}
                  onChange={(e) => handleFilterChange("luggage", parseInt(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          <h3>Services</h3>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.meetAndGreet}
                onChange={() => handleFilterChange("meetAndGreet")}
              />
              Meet & Greet
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.babySeat}
                onChange={() => handleFilterChange("babySeat")}
              />
              Baby Seat
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.disableChair}
                onChange={() => handleFilterChange("disableChair")}
              />
              Disable Chair
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.arabicSpeaker}
                onChange={() => handleFilterChange("arabicSpeaker")}
              />
              Arabic Speaker
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.englishSpeaker}
                onChange={() => handleFilterChange("englishSpeaker")}
              />
              English Speaker
            </label>
          </div>
        </div>

        {/* Transfer Cards Section */}
        <div className="w-2/3 p-2.5">
          {newProducts.map((product) => (
            <Link href={`/Transfer/${product._id}`} key={product._id}>
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
