import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import SearchBar from "@/components/SearchBar";
import TransferCards from "@/components/Transfer/TransferCards";


export default function SearchPage({featuredProduct, newProducts}) {
  return (
    <div>
      <Header />
      <SearchBar />
      <TransferCards
        product={{
          name: featuredProduct.name,
          quantity: 1,
          type: featuredProduct.type,
          passengers: featuredProduct.passengers,
          price: featuredProduct.price,
          image: featuredProduct.image,
        }}
      />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '66af42883a8ee35ab52c58c3';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}