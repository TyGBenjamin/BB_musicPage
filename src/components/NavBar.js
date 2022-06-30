import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavContainer = styled(motion.div)`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: ${(props) => (props.click ? "0" : "-5rem")};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
`;
const MenuBtn = styled.li`
  background-color: ivory;
  list-style-type: style none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 1.8rem;

  clip-path: polygon(0 0, 100% 1%, 72% 100%, 28% 100%);
  position: absolute;
  top:100%;
  left:50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontmd}
  font-weight:600;
  text-transform: uppercase;
  font-family:"Righteous";
  cursor: pointer;

  visible: {
    transition: {
      delay: 2.5,
    },
  },
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: black;
  color: ivory;
  list-style: none;
  font-family: "Bangers";

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ivory;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer
      click={click}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 2 }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Music
        </MenuItem>

        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Events
        </MenuItem>
        {/* <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          News
        </MenuItem> */}
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Shop
        </MenuItem>

        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Contact
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
