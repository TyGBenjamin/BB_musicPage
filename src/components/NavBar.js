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
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7`};
  list-style-type: style none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <MenuBtn>Menu</MenuBtn>
    </NavContainer>
  );
};

export default NavBar;
