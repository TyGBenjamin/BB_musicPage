import React from "react";
import styled from "styled-components";
import Nav from "../components/nav/Nav";
import "../components/nav/Nav.css";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

function Music() {
  return (
    <Section id="music">
      Music
      <Nav />
    </Section>
  );
}

export default Music;
