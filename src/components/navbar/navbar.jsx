import React, { useState } from "react";
import { useContext } from 'react';
import { Spin as Hamburger } from "hamburger-react";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { LiaPhoneSolid } from "react-icons/lia";
import { GrHomeRounded } from "react-icons/gr";
import { RiUser6Line } from "react-icons/ri";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)

  const [isOpen, setOpen] = useState(false);

  const handleSideNav = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className={`side-bar ${isOpen ? "open" : ""}`}>
          <a href="#home" className={`side-options ${isOpen ? "home-opt" : ""}`}><GrHomeRounded/><p>//Home</p></a>
          <a href="#works" className={`side-options ${isOpen ? "works-opt" : ""}`}><TbDeviceDesktopCode /><p>//My works</p></a>
          <a href="#about" className={`side-options ${isOpen ? "about-opt" : ""}`}><RiUser6Line /><p>//About me</p></a>
          <a href="#contact" className={`side-options ${isOpen ? "contact-opt" : ""}`}><LiaPhoneSolid /><p>//Contact me</p></a>
        </div>

        <div className="menu" onClick={handleSideNav}>
          <Hamburger size={19} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
