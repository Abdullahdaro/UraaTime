import React from 'react';

function RecommendationCard({ title, imageSrc }) {
  return (
    <div className="flex flex-col justify-center self-stretch px-6 py-5 my-auto whitespace-nowrap bg-yellow-200 min-h-[99px] min-w-[240px] rounded-[30px] shadow-[0px_133px_106px_rgba(0,0,0,0.02)] w-[296px] max-md:px-5">
      <div className="flex gap-6 items-center">
        <div className="self-stretch my-auto w-[157px]">{title}</div>
        <img loading="lazy" src={imageSrc} alt={`${title} icon`} className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[1.08] w-[65px]" />
      </div>
    </div>
  );
}

export default RecommendationCard;