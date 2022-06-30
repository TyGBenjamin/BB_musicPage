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

const NavBar = () => {
  return (
    <NavContainer>
      <MenuBtn>Menu</MenuBtn>
    </NavContainer>
  );
};

export default NavBar;
