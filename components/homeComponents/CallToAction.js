function CallToAction({ label, primary, onClick }) {
    return (
      <button
        className={`px-16 py-3.5 rounded-[40px] shadow-[0px_8px_20px_rgba(255,218,50,0.5)] ${
          primary ? "bg-yellow-300 text-gray-800" : "bg-white border border-yellow-300 border-solid text-gray-800"
        } max-md:px-5`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  
  export default CallToAction;