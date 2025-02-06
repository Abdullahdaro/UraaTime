import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import SearchBar from "./SearchBar";
import CityCard from "./cities/CityCard";
import NewCities from "./cities/NewCities";

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

export default function Featured({categories}) {
  // Rest of your component's code

  return (
    <Bg>
      <BgImage src="background.jpg" alt="background" className=""/>
      <Center>
          <div>
            <div className="justify-center align-center items-center flex flex-col mt-10">
            <SearchBar categories={categories}/>
              <h2 className="text-[48px] text-secondary font-volkhov">We Find The Best Tours For You </h2>
              <p className="items-center justify-center text-center m-2 mb-4">We connect you to the best tours and experiences<br/>ensuring memories that last a lifetime</p>
            </div>
            <div className="flex justify-between gap-x-[10px]">
              <div className="flex justify-between items-center w-[25%] rounded-[25px] bg-[#FFFBA3] text-black shadow-md p-2 px-[30px] gap-[20px] h-[80px]"> 
                <div className="">
                  <h3 className="font-poppins font-medium text-[23.9422px] leading-[124.5%] tracking-[-0.015em] text-[#080809]">Hotels</h3>
                  <p className="font-poppins font-light text-[14px] leading-[124.5%] tracking-[-0.015em] text-[#080809] order-1 self-stretch flex-none flex-grow-0">120 tours</p>
                </div>
                <img src="hotels.jpg" alt="tour" className="rounded-[35px] h-[60px] w-[60px]" />
              </div>
              <div className="flex justify-between items-center w-[25%] rounded-[25px] bg-[#98D786] text-black shadow-md p-2 px-[30px] gap-[20px] h-[80px]"> 
                <div className="">
                  <h3 className="font-poppins font-medium text-[23.9422px] leading-[124.5%] tracking-[-0.015em] text-[#080809]">Tours</h3>
                  <p className="font-poppins font-light text-[14px] leading-[124.5%] tracking-[-0.015em] text-[#080809] order-1 self-stretch flex-none flex-grow-0">120 tours</p>
                </div>
                <img src="tours.jpg" alt="tour" className="rounded-[35px] h-[60px] w-[60px]" />
              </div>
              <div className="flex justify-between items-center w-[25%] rounded-[25px] bg-[#BBBAF6] text-black shadow-md p-2 px-[30px] gap-[20px] h-[80px]"> 
                <div className="">
                  <h3 className="font-poppins font-medium text-[23.9422px] leading-[124.5%] tracking-[-0.015em] text-[#080809]">Transfers</h3>
                  <p className="font-poppins font-light text-[14px] leading-[124.5%] tracking-[-0.015em] text-[#080809] order-1 self-stretch flex-none flex-grow-0">120 tours</p>
                </div>
                <img src="transfers.jpg" alt="tour" className="rounded-[35px] h-[60px] w-[60px]" />
              </div>
              <div className="flex justify-between items-center w-[25%] rounded-[25px] bg-[#FF9B9E] text-black shadow-md p-2 px-[30px] gap-[20px] h-[80px]"> 
                <div className="">
                  <h3 className="font-poppins font-medium text-[23.9422px] leading-[124.5%] tracking-[-0.015em] text-[#080809]">Recomendations</h3>
                  <p className="font-poppins font-light text-[14px] leading-[124.5%] tracking-[-0.015em] text-[#080809] order-1 self-stretch flex-none flex-grow-0">120 tours</p>
                </div>
                <img src="recommendations.jpg" alt="tour" className="rounded-[35px] h-[60px] w-[60px]" />
              </div>
            </div>
          </div>
          <NewCities categories={categories} />
      </Center>
    </Bg>
  );
}