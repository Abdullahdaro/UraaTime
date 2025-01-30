import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { ChooseTransfer } from "@/components/homeComponents/ChooseTransfer";
import TopTours from "@/components/Tours/TopTours";
import RecommendationsGrid from "@/components/Recommendations/RecommendationsGrid";
import SendMessages from "@/components/SendMessages";
import axios from 'axios';
import CityCard from '../components/cities/CityCard';
import { useState, useEffect } from 'react';
import { Category } from "@/models/Category";
import CityGrid from "@/components/cities/CityGrid";

export default function HomePage({categories}) {
  const mainCategories = categories.filter(category => !category.parent);
  

  return (
    <div>
      <Header />
      <Featured categories={categories} />
      <ChooseTransfer />
      <TopTours />
      <RecommendationsGrid />
      <SendMessages />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '66af42883a8ee35ab52c58c3';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const categories = await Category.find({});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
