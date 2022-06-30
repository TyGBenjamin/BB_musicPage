import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { SiApplemusic } from "react-icons/si";
import { SiGooglenews } from "react-icons/si";
import { GiHoodie } from "react-icons/gi";
import { BsInfoCircleFill } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome className="heyIcon" />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("services")}
        className={activeNav === "services" ? "active" : ""}
      >
        <BsInfoCircleFill className="heyIcon" />
      </a>
      <a
        href="#music"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <SiApplemusic className="heyIcon" />
      </a>
      <a
        href="#events"
        onClick={() => setActiveNav("experience")}
        className={activeNav === "experience" ? "active" : ""}
      >
        <SiGooglenews className="heyIcon" />
      </a>
      <a
        href="#shop"
        onClick={() => setActiveNav("services")}
        className={activeNav === "services" ? "active" : ""}
      >
        <GiHoodie className="heyIcon" />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <TiContacts className="heyIcon" />
      </a>
    </nav>
  );
};

export default Nav;
