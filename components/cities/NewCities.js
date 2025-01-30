import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import CityGrid from "./CityGrid";
import CityCard from "./CityCard";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: normal;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  color: #666;
  transition: color 0.2s;
  &:hover {
    color: #FFDA32;
  }
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const ArrowsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default function NewCities({categories}) {
  const [currentPage, setCurrentPage] = useState(1);
  const citiesPerPage = 4;
  const totalPages = Math.ceil((categories?.length || 0) / citiesPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <Center>
      <TitleContainer>
        <Title>New Cities</Title>
        <ArrowsContainer>
          <ArrowButton 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </ArrowButton>
          <ArrowButton 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </ArrowButton>
        </ArrowsContainer>
      </TitleContainer>
      <CityGrid 
        categories={categories} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Center>
  );
}