import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/LosingControlLandingPage.mp4";
import { motion } from "framer-motion";
import Nav from "../components/nav/Nav";

const VideoContainer = styled.section`
  width: 100%;
  padding-right: -100px;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const DarkOverLay = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  h1{
    font-family: 'Kaushan Script';
    font-size:${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body}
  }

  h2{
    padding-bottom: -100px;
    font-family: 'Siren Stencil';
    font-size:${(props) => props.theme.fontmd};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body}

    text-transform: capitalize;

  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      {/* <Nav /> */}
      <DarkOverLay />
      <Title variants={container} initial="hidden" animate="show">
        {/* <h2> Inspire. Create. Innovate</h2> */}
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted />
    </VideoContainer>
  );
};

export default CoverVideo;
