function Image({ src, alt }) {
    return <img loading="lazy" src={src} alt={alt} className="object-contain grow w-full aspect-[0.97] max-md:mt-6 max-md:max-w-full" />;
  }
  
  export default Image;