import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/LosingControlLandingPage.mp4";

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

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={MainVideo} type="video/mp4" autoPlay muted />
    </VideoContainer>
  );
};

export default CoverVideo;
