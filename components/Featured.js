import Center from "@/components/Center";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SearchBarHotel from "./SearchBarHotel";
import SearchBarTour from "./SearchBarTour";
import NewCities from "./cities/NewCities";
import { useState } from 'react';

const Bg = styled.div`
  color: #fff;
  width: 100%;
  height: 850 px; /* Make sure the Bg takes up the full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* Ensure that the background image can be positioned */
`;

const BgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(1);
  margin-top: -20px;
  scale: 1.1;
  object-fit: cover; /* Ensure the image covers the entire container */
  z-index: -1; /* Send the image behind the content */
  background: linear-gradient(180deg, rgba(255, 218, 50, 0.03) 89%, rgba(255, 218, 50, 0.6) 106.55%), url(solal.29_photography_edward_hopper_style_text__palace_on_the_ho_240cf5fc-c81a-445e-821f-f9ba3c4df0f7.png);
  filter: blur(50px);
`;

const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;

const SearchButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 16px 16px 0px 0px;
  margin-left: 120px; 
  width: 100%;
  justify-content: flex-start; // Align buttons to the left
`;

const SearchButton = styled.button`
  padding: 12px 24px;
  border-radius: 12px 12px 0px 0px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  backdrop-filter: ${props => props.active ? 'blur(20px)' : 'none'};
  color: ${props => props.active ? '#fff' : '#gray-400'};
  box-shadow: ${props => props.active ? '0 0px 0px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
  }
`;

export default function Featured({categories}) {
  const [activeSearch, setActiveSearch] = useState('transfer');

  return (
    <Bg>
      <BgImage src="background.jpg" alt="background" className=""/>
      <Center>
        <div>
          <div className="flex flex-col mt-10">
            <SearchButtons>
              <SearchButton 
                active={activeSearch === 'transfer'}
                onClick={() => setActiveSearch('transfer')}
              >
                Transfer
              </SearchButton>
              <SearchButton 
                active={activeSearch === 'hotel'}
                onClick={() => setActiveSearch('hotel')}
              >
                Hotels
              </SearchButton>
              <SearchButton 
                active={activeSearch === 'tour'}
                onClick={() => setActiveSearch('tour')}
              >
                Tours
              </SearchButton>
            </SearchButtons>

            {/* Conditional rendering of search components */}
            <div className="flex justify-center w-full">
              {activeSearch === 'transfer' && <SearchBar categories={categories} />}
              {activeSearch === 'hotel' && <SearchBarHotel categories={categories} />}
              {activeSearch === 'tour' && <SearchBarTour categories={categories} />}
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-[48px] justify-center items-center text-secondary font-volkhov">We Find The Best Tours For You </h2>
              <p className="items-center justify-center text-center m-2 mb-4">We connect you to the best tours and experiences<br/>ensuring memories that last a lifetime</p>
            </div>
          </div>
          <div className="flex justify-between gap-x-[10px]">
            <div className="flex justify-between items-center w-[25%] rounded-[25px] bg-[#FFFBA3] text-black shadow-md p-2 px-[20px] gap-[20px] h-[80px] 
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer"> 
              <div className="">
                <h3 className="font-poppins font-medium text-[23.9422px] leading-[124.5%] tracking-[-0.015em] text-[#080809]">Hotels</h3>
                <p className="font-poppins font-light text-[14px] leading-[124.5%] tracking-[-0.015em] text-[#080809] order-1 self-stretch flex-none flex-grow-0">120 tours</p>
              </div>
              <img src="hotels.jpg" alt="tour" className="rounded-[35px] h-[60px] w-[60px]" />
            </div>
            <div className="flex justify-between items-center w-[25%] rounded-[25px] bg-[#98D786] text-black shadow-md p-2 px-[20px] gap-[20px] h-[80px]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer"> 
              <div className="">
                <h3 className="font-poppins font-medium text-[23.9422px] leading-[124.5%] tracking-[-0.015em] text-[#080809]">Tours</h3>
                <p className="font-poppins font-light text-[14px] leading-[124.5%] tracking-[-0.015em] text-[#080809] order-1 self-stretch flex-none flex-grow-0">120 tours</p>
              </div>
              <img src="tours.jpg" alt="tour" className="rounded-[35px] h-[60px] w-[60px]" />
            </div>
            <div className="flex justify-between items-center w-[25%] rounded-[25px] bg-[#BBBAF6] text-black shadow-md p-2 px-[20px] gap-[20px] h-[80px]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer"> 
              <div className="">
                <h3 className="font-poppins font-medium text-[23.9422px] leading-[124.5%] tracking-[-0.015em] text-[#080809]">Transfers</h3>
                <p className="font-poppins font-light text-[14px] leading-[124.5%] tracking-[-0.015em] text-[#080809] order-1 self-stretch flex-none flex-grow-0">120 tours</p>
              </div>
              <img src="transfers.jpg" alt="transfers" className="rounded-[35px] h-[60px] w-[60px]" />
            </div>
            <div className="flex justify-between items-center w-[25%] rounded-[25px] bg-[#FF9B9E] text-black shadow-md p-2 px-[20px] gap-[20px] h-[80px]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer"> 
              <div className="">
                <h3 className="font-poppins font-medium text-[23.9422px] leading-[124.5%] tracking-[-0.015em] text-[#080809]">Recomendations</h3>
                <p className="font-poppins font-light text-[14px] leading-[124.5%] tracking-[-0.015em] text-[#080809] order-1 self-stretch flex-none flex-grow-0">120 tours</p>
              </div>
              <img src="recommendations.jpg" alt="tour" className="rounded-[35px] h-[60px] w-[60px]" />
            </div>
          </div>
          <NewCities categories={categories} />
        </div>
      </Center>
    </Bg>
  );
}


/* export default function Featured({categories}) {
  const [activeSearch, setActiveSearch] = useState('transfer'); // 'transfer' or 'hotel'

  return (
    <Bg>
      <BgImage src="background.jpg" alt="background" className=""/>
      <Center>
          <div>
            <div className="justify-center align-center items-center flex flex-col mt-10">
              <div className="flex align-center justify-center gap-x-[10px] mb-4">
                <button 
                  onClick={() => setActiveSearch('transfer')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSearch === 'transfer' 
                      ? 'bg-secondary text-white font-bold' 
                      : 'text-gray-400 hover:text-secondary'
                  }`}
                >
                  Transfer
                </button>
                <button 
                  onClick={() => setActiveSearch('hotel')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSearch === 'hotel' 
                      ? 'bg-secondary text-white font-bold' 
                      : 'text-gray-400 hover:text-secondary'
                  }`}
                >
                  Hotels
                </button>
              </div>
              <SearchBar 
                categories={categories} 
                searchType={activeSearch}
              />
            </div>
          </div>
      </Center>
    </Bg>
  );
} */