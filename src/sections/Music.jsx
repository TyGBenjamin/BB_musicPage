import React from "react";
import styled from "styled-components";
import Nav from "../components/nav/Nav";
import "../components/nav/Nav.css";
import "./Music.css";
import { SiApplemusic, SiSpotify } from "react-icons/si";
import { RiSoundcloudFill } from "react-icons/ri";
import Logo1 from "../assets/Images/blackAppleMd.png";
import Logo2 from "../assets/Images/spotifyBlackMd.jpg";
import Logo3 from "../assets/Images/Soundcloud14.jpg";

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
    logo: Logo1,
    name: "Apple Music",
    review: "Click for Apple",
  },
  {
    logo: Logo2,
    name: "Spotify",
    review: "Click for Spotify",
  },
  {
    logo: Logo3,
    name: "SoundCloud",
    review: "Click for SoundCloud",
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
          {/* {data.map(({ logo, name, review, index }) => { */}
          <SwiperSlide key="index" className="testimonyArticle">
            <div className="music__logo">
              <img
                src={Logo1}
                alt="Apple Music"
                onClick={() =>
                  window.open(
                    "https://music.apple.com/us/artist/basement-bangers/1622378502"
                  )
                }
                target="blank"
              ></img>
            </div>

            <h5 className="client__name">Apple Music</h5>
            <small className="client__review">click for Apple</small>
            {/* <button>click here</button> */}
          </SwiperSlide>
          <SwiperSlide key="index" className="testimonyArticle">
            <div className="music__logo">
              <img
                src={Logo2}
                alt="Spotify"
                onClick={() =>
                  window.open(
                    "https://open.spotify.com/artist/0SN1va4GmDZQr0fELEdfZ2?si=sAPZLqPiRDOg-ygnKkp9Dg&nd=1"
                  )
                }
                target="blank"
              ></img>
            </div>

            <h5 className="client__name">Spotify</h5>
            <small className="client__review">click for Spotify</small>
            {/* <button>click here</button> */}
          </SwiperSlide>
          <SwiperSlide key="index" className="testimonyArticle">
            <div className="music__logo">
              <img
                src={Logo3}
                alt="SoundCloud"
                onClick={() =>
                  window.open(
                    "https://soundcloud.com/basement-bangers-497185316"
                  )
                }
                target="blank"
              ></img>
            </div>

            <h5 className="client__name">Sound Cloud</h5>
            <small className="client__review">click for SoundCloud</small>
            {/* <button>click here</button> */}
          </SwiperSlide>
          );
        </Swiper>
      </div>
      <div>
        <iframe
          title="BBMusic"
          style={{ "border-radius": 12 }}
          src="https://open.spotify.com/embed/artist/0SN1va4GmDZQr0fELEdfZ2?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </Section>
  );
};

export default Music;
