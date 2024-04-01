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
    window.location.href = 'mailto:habismartin5@gmail.com';
  };

  return (
    <div className='contact'>
    <h1>&lt;contact&gt;</h1>

    <div className="contact-wrapper">
    <div className="contact-form">
    <h2>Send me an email!</h2>

      <form action="">
        <div className="name">
          <input type="text" name='name' id='name'/>
          <label htmlFor="name">Name</label>
        </div>

        <div className="email">
          <input type="email" name='email' id='email'/>
          <label htmlFor="email">Email</label>
        </div>

        <div className="message">
          <textarea name="" id="message" cols="30" rows="10"></textarea>
          <label htmlFor="message" className='m-label'>Message</label>
        </div>

        <button><IoIosSend/></button>

      </form>
    </div>

    <Tilt>
    <div className="alt-contact">
      <p>Reach me on any of these platforms</p>
      <div className="icons">
       <a href="https://www.instagram.com/habismartin/?hl=en"><div className="icon instagram"><FaInstagram/></div></a>
       <a href="https://x.com/habismartin_?s=21"><div className="icon twitter"><BsTwitterX/></div></a>
       {/* <div className="icon linkedin"><FaLinkedinIn/></div> */}
       <div className="icon email" onClick={handleEmailClick}><MdOutlineEmail/></div>
       <div className="icon whatsapp"><FaWhatsapp/></div>
      </div>
    </div>
    </Tilt>

    </div>
    <h1>&lt;/contact&gt;</h1>
    </div>
  )
}

export default Contact
