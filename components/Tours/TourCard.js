import React from "react";

function TourCard({ title, image, aspectRatio, paddingTop }) {
  return (
    <div className="flex flex-col self-stretch my-auto rounded-none h-full min-w-[240px] w-[419px] hover:cursor-pointer">
      <div className={`flex relative justify-center flex-col ${paddingTop} w-full aspect-[${aspectRatio}] rounded-[30px] shadow-[-4px_4px_6px_rgba(199,170,39,0.3)] max-md:pt-24`}>
        <img loading="lazy" src={image} alt={title} className="object-cover absolute inset-0 size-full rounded-[30px]" />
        <div 
            className="w-full h-[70px] absolute left-0 button-0 rounded-b-[30px]"
            style={{
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(102, 102, 102, 0) 136.13%)'
            }}
        ></div>
        <div className="relative justify-center items-center text-center px-16 py-5 rounded-none max-md:px-5 font-poppins font-bold">
          {title}
        </div>
      </div>
    </div>
  );
}

export default TourCard;