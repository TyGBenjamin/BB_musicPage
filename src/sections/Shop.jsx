import React from "react";
import styled from "styled-components";
import "../index.css";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: 7rem;
  font-family: "Splash";
  font-weight: 300;
  color: white;

  position: absolute;
  top: 1rem;
  left: 9%;
  z-index: 11;
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: white;

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: 300;
    font-family: "Julius Sans One";
    padding-top: 20%;
    width: 80%;
    margin: 0 auto;
  }
`;

const Shop = () => {
  return (
    <Section>
      <Title
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        {" "}
        Shop
      </Title>
      <Left>
        <p>
          The Collection being developed is slowly growing and expanding to meet
          our overall goal and vision. All of our products are created using the
          best quality material available to us. Just like the music we produce,
          we put our best efforts into producing clothing of high quality that,
          not only is iconic and appealing, but will last for years to come.
          <br />
          <br />
          As mentioned, we are currently expanding our collections and styles
          available to choose from. We do have a limited selection of tops that
          have been released and can be browsed and purchased. Any questions,
          feel free to reach out to us using our contact page below. Thanks!{" "}
        </p>
      </Left>
    </Section>
  );
};

export default Shop;
