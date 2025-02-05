import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import CityCard from "./CityCard";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function CityGrid({categories, currentPage, setCurrentPage}) {
  const citiesPerPage = 4;
  
  // Filter main categories first
  const mainCategories = categories?.filter(category => category.parent) || [];
  
  // Calculate total pages based on filtered categories
  const totalPages = Math.ceil(mainCategories.length / citiesPerPage);
  
  // Get current cities from filtered list
  const indexOfLastCity = currentPage * citiesPerPage;
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  const currentCities = mainCategories.slice(indexOfFirstCity, indexOfLastCity);

  return (
    <StyledProductsGrid>
      {currentCities.map(category => (
        <CityCard key={category._id} {...category} />
      ))}
    </StyledProductsGrid>
  );
}