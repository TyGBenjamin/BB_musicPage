import React from "react";
import "./Footer.css";
import { ImYoutube2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { RiSoundcloudFill } from "react-icons/ri";
import { SiApplemusic } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#footer" className="footer__logo">
        Basement Bangers
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Music">Music</a>
        </li>
        <li>
          <a href="#awards">Accolades</a>
        </li>
        <li>
          <a href="https://bbcellar.com/" target="blank">
            Shop
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.youtube.com/channel/UCQuck83LAKYWSozU6jVtoQw"
          target="blank"
        >
          <ImYoutube2 />
        </a>
        <a href="https://www.instagram.com/basement._.bangers/" target="blank">
          <FiInstagram />
        </a>
        <a
          href="https://soundcloud.com/basement-bangers-497185316"
          target="blank"
        >
          <RiSoundcloudFill />
        </a>
        <a
          href="https://music.apple.com/us/artist/basement-bangers/1622378502"
          target="blank"
        >
          <SiApplemusic />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
