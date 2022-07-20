import React from "react";
import styled from "styled-components";
import Nav from "../components/nav/Nav";
import "../components/nav/Nav.css";
import "./Music.css";
// import Avatar1 from "../../assets/2.png";
// import Avatar2 from "../../assets/6.png";
// import Avatar3 from "../../assets/4.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(../src/assets/background_BB.jpg);
`;

const data = [
  {
    name: "Apple Music",
    review: "Apple Music.",
  },
  {
    name: "Spotify",
    review: "Spotify",
  },
  {
    name: "SoundCloud",
    review: "SoundCloud",
  },
];

const Music = () => {
  return (
    <Section id="music">
      <div className="musicBox">
        <h5>Stream Our Music</h5>

        <Swiper
          className="container testimony__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={5}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map(({ avatar, name, review, index }) => {
            return (
              <SwiperSlide key={index} className="testimonyArticle">
                <div className="client__avatar">
                  <img src="" alt={name}></img>
                </div>

                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
};

export default Music;
