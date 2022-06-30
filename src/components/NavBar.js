import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuBtn = styled.li`
  background-color: ivory;
  list-style-type: style none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  clip-path: polygon(0 0, 100% 1%, 72% 100%, 28% 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontmd}
  font-weight:600;
  text-transform: uppercase;
  font-family:"Righteous";
  cursor: pointer;
`;

const MenuItems = styled.ul`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: black;
  color: ivory;
  list-style: none;
  font-family: "Bangers";

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <MenuItems>
        <MenuBtn>Menu</MenuBtn>
        <li>Home</li>
        <li>Music</li>
        <li>Events</li>
        <li>News</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
