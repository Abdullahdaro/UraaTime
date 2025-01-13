import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
/* import ArrowIcon from "@/components/icons/ArrowIcon"; */

const StyledHeader = styled.header`
  background-color: #C7C7C7;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Logo = styled(Link)`
  position: relative;
  width: 220px;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  justify-content: end;
  align-items: center;
  width: 100%;
  padding: 10px;
  @media screen and (max-width: 1000~px) {
    padding: 0;
    display: none;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #fff;
  margin-right: 10px;
  text-decoration: none;
  padding: 10px;                                                                
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 70px;
`;

const ProfilePhotoButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: none;
  background: url('/womenLogIn.svg') no-repeat center center/cover;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  list-style: none;
  padding: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>
           <img src="/logo.svg" alt="logo" />
          </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/hotels">Hotels</NavLink>
            <NavLink href="/transfer">Transfer</NavLink>
            <NavLink href="/tours">Our Packages</NavLink>
            <NavLink href="/new">New</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/help">Help</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(!mobileNavActive)}>
            <BarsIcon />
          </NavButton>
            <UserProfile>
              <ProfilePhotoButton onClick={toggleDropdown} src="/logo.svg" />
              <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '10px' }} />
              <DropdownList isOpen={dropdownOpen}>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownList>
            </UserProfile>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}