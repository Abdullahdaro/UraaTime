import React from 'react';
import RecommendationCard from './RecommendationCard';
import Center from '../Center';

const categories = [
  { title: "Restaurants", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7029cf82f67d97cfefcade475df2fcb9b6438bc286b2b4c53bd1d4eefb5f511e?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" },
  { title: "Walking Roads", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e18d2c8566ccd164117c7aaba8edcde2728cffbe9b215e95e6ca6b7dde82537f?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" },
  { title: "Events", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4aca6f1599b00e50480149829119ea0c21227b587d5a728f99961b55b1eb798b?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" },
  { title: "Monuments", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7660da55f95e585912f6cc06180953f37d55b6cc51780b9e64fb63e2c672099?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" },
  { title: "Cafe & Bars", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/027bd673b22be28e06b3f8ac92c94c16c686d842f2f89ed19b9fed59229b37fb?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" }
];

function RecommendationsGrid() {
  return (
    <Center>
        <div className="flex flex-col pt-9 pb-16 text-2xl font-medium tracking-tight leading-none rounded-[35px] text-zinc-950">
            <h1 className="text-7xl font-bold text-center text-black max-md:text-4xl my-[40px]">
              Recommendations
            </h1>
            <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full">
                {categories.slice(0, 3).map((category, index) => (
                <RecommendationCard key={index} title={category.title} imageSrc={category.imageSrc} />
                ))}
            </div>
            <div className="flex flex-wrap gap-10 justify-center items-center mt-11 w-full max-md:mt-10 max-md:max-w-full">
                {categories.slice(3).map((category, index) => (
                <RecommendationCard key={index + 3} title={category.title} imageSrc={category.imageSrc} />
                ))}
            </div>
        </div>
    </Center>
  );
}

export default RecommendationsGrid;