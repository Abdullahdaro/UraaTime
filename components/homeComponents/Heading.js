import * as React from "react";

function Heading({ title, subtitle }) {
  return (
    <div className="flex flex-col pl-1.5 text-black max-md:max-w-full">
      <h2 className="self-start font-extrabold text-center uppercase text-zinc-800">{title}</h2>
      <h3 className="mt-3 text-4xl font-bold max-md:max-w-full">{subtitle}</h3>
    </div>
  );
}

export default Heading;
