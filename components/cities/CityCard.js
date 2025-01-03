import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function CityCard() {

  return (
        <div className="relative w-[270px] h-[373px] flex-none order-0 flex-grow-0">
            <div className=" absolute w-full h-full bg-gradient-to-r from-[rgba(54,54,56,0.85)] to-[rgba(54,54,56,0.3)] shadow-[8px_8px_34px_rgba(0,0,0,0.06)] rounded-[35px]"></div>
            <div className="relative">
                <div className="w-[269px] h-[273px] bg-cover bg-center rounded-t-[35px]">
                    <img src="istanbulCity.jpg" className="rounded-t-[35px]" />
                </div>
                <div className="flex justify-between mt-3 mr-3 ml-3">
                    <div className="w-[226px] h-[22px] font-volkhov font-bold text-[16px] leading-[22px] text-white">
                        Istanbul, Turkey
                    </div>
                    <div className="w-[17.9px] h-[16px] rounded">
                        <FaHeart className=" text-white inset-0 hover:hidden" />
                        <FaRegHeart className=" text-red-600 inset-0 hidden hover:flex" />
                    </div>
                </div>
                <div className="ml-3 mt-3 font-mulish text-[14px] leading-[18px] text-white">
                    500 places to discover
                </div>
                <div className="absolute bottom-0 right-0 mr-3 mb-[-20px] font-mulish font-semibold text-[14px] text-[#FFDA32]">
                    From 15$
                </div>
            </div>
        </div>

  );
}