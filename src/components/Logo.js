import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoBB from "../assets/Images/logo1mini.jpg";

const Container = styled.div`
position:absolute;
top:1rem;
left:1rem;

width:100%
color: ${(props) => props.theme.text}
z-index:5;`;

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        {/* <img
          src={LogoBB}
          alt="logo"
          enable-background="new 0 0 24 24"
          height="60px"
          viewBox="0 0 24 24"
          width="48px"
        ></img> */}
      </Link>
    </Container>
  );
};

export default Logo;
