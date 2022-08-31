import React from "react";
import styled from "styled-components";
import "../index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Shop1 from "../assets/Images/whiteT2Copy.jpg";
import Logo2 from "../assets/Images/spotifyBlackMd.jpg";
import Logo3 from "../assets/Images/Soundcloud14.jpg";

import img1 from "../assets/Images/10.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
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

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 35%;
  min-height: auto;
  width: 100%;
  display: grid;
  justify-content: flex-start;
  align-items: center;

  background-color: white;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled.div`
display: inline-block;
width:20rem;
margin-bottom 5rem;
img{
  width:100%;
  height:auto;
  cursor:pointer;
}
h1{
  font-weight:500;
  text-align: center;
  cursor: pointer;
}
`;
const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title}></img>
      <h1> {title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top",
          end: "bottom",
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          markers: true,
        },
        // increase scrolling height of element needed fo esthetic
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      // horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          markers: true,
        },
        // increase scrolling height of element needed fo esthetic
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);
    return () => {};
  }, []);

  return (
    <Section>
      <Title data-scroll data-scroll-speed="-1">
        {" "}
        Shop
      </Title>
      <Left>
        <p>
          The Collection being developed is slowly growing and expanding to meet
          our overall goal and vision. All of our products are created using the
          best quality material available to us. Just like the music we produce,
          we put our best efforts into producing clothing of high quality that,
          not only is iconic and appealing, but will also last for years to
          come.
          <br />
          <br />
          As mentioned, we are currently expanding our collections and styles
          available to choose from. We do have a limited selection of tops that
          have been released and can be browsed and purchased. Any questions,
          feel free to reach out to us using our contact page below. Thanks!{" "}
        </p>
      </Left>
      <Right ref={horizontalRef}>
        {/* <div class="wrapper"></div> */}
        {/* <img src={Shop1} alt="hey" class="item">
          {" "}
        </img> */}
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
        <Product img={img1} title="xyz" />
      </Right>
    </Section>
  );
};

export default Shop;
