import React from "react";
import styled from "styled-components";
import "../index.css";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 8-vw;
  overflow: hidden;

  display: flex;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-family: "Splash";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;
const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
`;

function About() {
  return (
    <Section>
      <section id="about">
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          About Us
        </Title>
        <Left>Text</Left>
        <Right>Images</Right>
      </section>
    </Section>
  );
}

export default About;
