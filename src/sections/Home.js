import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Nav from "../components/nav/Nav";

const Section = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`;

function Home() {
  return (
    <Section>
      <CoverVideo />
      <Logo />
      {/* <Nav /> */}
      <NavBar />
    </Section>
  );
}

export default Home;
