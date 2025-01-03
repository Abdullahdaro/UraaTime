import React from "react";
import TourCard from "./TourCard";
import Center from "../Center";

const tourData = [
  { title: "Full Roma", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/98f3c88312b508cf1ce574c20217a7b4aba0d3733827dc495c7e36f4870c2319?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" },
  { title: "Full London", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e1e16a80f3fb4e4ea08302a93a1f432ffbc754cd3fd0ca11f46a23039b6eabd?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" },
  { title: "Full Roma", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e1e16a80f3fb4e4ea08302a93a1f432ffbc754cd3fd0ca11f46a23039b6eabd?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" },
  { title: "Full Zagreb", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/268f7003ad255c3ff655ec5942cb6810fe5188c425e98e66743908072a5d05c7?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" },
  { title: "Full Zagreb", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/268f7003ad255c3ff655ec5942cb6810fe5188c425e98e66743908072a5d05c7?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" }
];

function TopTours() {
  return (
    <Center>
    <div className="flex flex-col justify-center ">
      <h1 className="text-7xl font-bold text-center text-black max-md:text-4xl">
        Top Tours
      </h1>
      <div className="flex z-10 flex-wrap gap-5 justify-between items-start self-end mt-0 max-w-full w-[813px]">
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center mt-10 text-3xl font-medium leading-none text-yellow-300 tracking-[3px]">
        <TourCard title={tourData[0].title} image={tourData[0].image} aspectRatio="0.748" paddingTop="pt-[500px]" />
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[799px] max-md:max-w-full">
          <div className="flex gap-5 items-center w-full max-md:max-w-full">
            <TourCard title={tourData[1].title} image={tourData[1].image} aspectRatio="1.529" paddingTop="pt-52" />
            <TourCard title={tourData[2].title} image={tourData[2].image} aspectRatio="1.529" paddingTop="pt-52" />
          </div>
          <div className="flex gap-5 items-center mt-2.5 w-full max-md:max-w-full">
            <TourCard title={tourData[3].title} image={tourData[3].image} aspectRatio="1.529" paddingTop="pt-52" />
            <TourCard title={tourData[4].title} image={tourData[4].image} aspectRatio="1.529" paddingTop="pt-52" />
          </div>
        </div>
      </div>
    </div>
    </Center>
  );
}

export default TopTours;