import React from 'react'
import { TbPointFilled } from "react-icons/tb";
import {Tilt} from 'react-tilt';
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './expert.scss'

const Expert = () => {
  return (
    <div className='skills'>
      <h1>&lt;skills&gt;</h1>
      <div className="languages">

        <Tilt>
        <div className="backend skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Video editing</p> </div>
          <div className="language"><div><p>Premier pro</p></div></div>
          <div className="language"><div><p>Da vinci resolve</p></div></div>
          <div className="language"><div><p>Capcut</p></div></div>
          <div className="language"><div><p>Inshot</p></div></div>
          <div className="language"><div><p>Final cut pro</p></div></div>
          <div className="language"><div><p>After Effects</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="version-control skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Social media management</p> </div>
          <div className="language"><div><PiInstagramLogoFill color='#e34a8d'/><p>Instagram</p></div></div>
          <div className="language"><div><FaSquareFacebook color='blue'/><p>Facebook</p></div></div>
          <div className="language"><div><FaTiktok color='black'/><p>Tiktok</p></div></div>
          <div className="language"><div><FaSquareXTwitter color='black'/><p>Twitter</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="database skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Graphics design</p> </div>
          <div className="language"><div><p>Adobe illustrator</p></div></div>
          <div className="language"><div><p>Corel draw</p></div></div>
          <div className="language"><div><p>Afinity designer</p></div></div>
          <div className="language"><div><p>Adobe photoshop</p></div></div>
          <div className="language"><div><p>Adobe Xd</p></div></div>
          <div className="language"><div><p>Figma</p></div></div>
        </div>
        </Tilt>

      </div>
      <h1>&lt;/skills&gt;</h1>
    </div>
  )
}

export default Expert
