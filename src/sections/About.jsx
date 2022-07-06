import React from "react";
import styled from "styled-components";
import Nav from "../components/nav/Nav";
import "../components/nav/Nav.css";

import "../index.css";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;

  background-color: black;

  display: flex;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 5.5rem;
  font-family: "Splash";
  font-weight: 300;
  color: white;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
  margin-left: 11%;
`;
const Left = styled.div`
  width: 50%;
  font-size: 1.5rem;
  font-family: "righteous";
  color: white;
  font-weight: 280;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  margin-left: 10%;
`;
const Right = styled.div`
  width: 50%;
`;

function About() {
  return (
    <Section id="about#fixed-target">
      {/* <section id="about"> */}
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We are the innovation for a broken system, cooperatively and
        persistently working to reinvent the music industry as we know it.
        <br />
        <br /> We are more than dedicated to helping build a better future for
        us all to thrive and prosper. #freeeverything
      </Left>
      <Right>Images</Right>
      <Nav />
      {/* </section> */}
    </Section>
  );
}

export default About;
