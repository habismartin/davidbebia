import React,{useState} from 'react'
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import {Tilt} from 'react-tilt';
import './contact.scss'

const Contact = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:officialwick1@gmail.com';
  };

  return (
    <div className='contact'>
    <h1>&lt;contact&gt;</h1>

    <div className="contact-wrapper">
    <div className="contact-form">
    <h2 onClick={handleEmailClick}>Send me an email!</h2>

    </div>

    <Tilt>
    <div className="alt-contact">
      <p>Reach me on any of these platforms</p>
      <div className="icons">
       <a href="https://www.instagram.com/tehilabebia?igsh=d2tkazE0N2N6YzNs&utm_source=qr"><div className="icon instagram"><FaInstagram/></div></a>
       <a href="https://x.com/tehilabebia"><div className="icon twitter"><BsTwitterX/></div></a>
       <a href="Wa.me/+2347059742978"><div className="icon twitter"><FaWhatsapp/></div></a>
      </div>
    </div>
    </Tilt>

    </div>
    <h1>&lt;/contact&gt;</h1>
    </div>
  )
}

export default Contact
