import React, { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: ${(props) => (props.click ? "0" : "-5rem")};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuBtn = styled.li`
  background-color: ivory;
  list-style-type: style none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 1.5rem;

  clip-path: polygon(0 0, 100% 1%, 72% 100%, 28% 100%);
  position: absolute;
  top:100%;
  left:50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontmd}
  font-weight:600;
  text-transform: uppercase;
  font-family:"Righteous";
  cursor: pointer;

  visible: {
    transition: {
      delay: 2.5,
    },
  },
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

const MenuItem = styled.li`
  text-transform: uppercase;
  color: ivory;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer click={click}>
      <MenuItems>
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem>Home</MenuItem>
        <MenuItem>Music</MenuItem>
        <MenuItem>Events</MenuItem>
        <MenuItem>News</MenuItem>
        <MenuItem>Shop</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
