import React from 'react'
import { TbPointFilled } from "react-icons/tb";
import {Tilt} from 'react-tilt';
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { SiAdobepremierepro } from "react-icons/si";
import { GiDivingDagger } from "react-icons/gi";
import { LuScissorsSquare } from "react-icons/lu";
import { FiCamera } from "react-icons/fi";
import { PiFilmSlateBold } from "react-icons/pi";
import { SiAdobeaftereffects } from "react-icons/si";
import { GiAirBalloon } from "react-icons/gi";
import { SiAdobeillustrator } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiCanva } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaLeaf } from "react-icons/fa6";
import { SiAgora } from "react-icons/si";
import { FaHubspot } from "react-icons/fa";
import { PiKeyholeFill } from "react-icons/pi";
import { PiChatsCircleFill } from "react-icons/pi";
import { TbHexagons } from "react-icons/tb";
import './expert.scss'

const Expert = () => {
  return (
    <div className='skills'>
      <h1>&lt;skills&gt;</h1>
      <div className="languages">

        <Tilt>
        <div className="backend skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Video editing</p> </div>
          <div className="language"><div><SiAdobepremierepro color='#000058'/><p>Premier pro</p></div></div>
          <div className="language"><div><GiDivingDagger color='#22071d'/><p>Da vinci resolve</p></div></div>
          <div className="language"><div><LuScissorsSquare color='black'/><p>Capcut</p></div></div>
          <div className="language"><div><FiCamera color='red'/><p>Inshot</p></div></div>
          <div className="language"><div><PiFilmSlateBold color='black'/><p>Final cut pro</p></div></div>
          <div className="language"><div><SiAdobeaftereffects color='#000058'/><p>After Effects</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="version-control skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Social media platforms</p> </div>
          <div className="language"><div><PiInstagramLogoFill color='#e34a8d'/><p>Instagram</p></div></div>
          <div className="language"><div><FaSquareFacebook color='blue'/><p>Facebook</p></div></div>
          <div className="language"><div><FaTiktok color='black'/><p>Tiktok</p></div></div>
          <div className="language"><div><FaSquareXTwitter color='black'/><p>Twitter</p></div></div>
          <div className="language"><div><FaLinkedin color='black'/><p>LinkedIn</p></div></div>
          <div className="language"><div><FaSnapchatGhost color='yellow'/><p>Snapchat</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="database skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Graphics design</p> </div>
          <div className="language"><div><SiAdobeillustrator color='#000058'/><p>Adobe illustrator</p></div></div>
          <div className="language"><div><GiAirBalloon /><p>Corel draw</p></div></div>
          <div className="language"><div><SiAdobephotoshop color='#000058'/><p>Adobe photoshop</p></div></div>
          <div className="language"><div><PiFigmaLogoFill color='black'/><p>Figma</p></div></div>
          <div className="language"><div><SiCanva color='#1db1d2'/><p>Canva</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="database skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Social media management tools</p> </div>
          <div className="language"><div><FaLeaf/><p>Sprout social</p></div></div>
          <div className="language"><div><SiAgora color='orange'/><p>Agora pulse</p></div></div>
          <div className="language"><div><FaHubspot color='orange'/><p>Hubspot</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="database skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Analytical tools</p> </div>
          <div className="language"><div><PiKeyholeFill color='#1db1d2'/><p>KEYHOLE</p></div></div>
          <div className="language"><div><PiChatsCircleFill color='orange'/><p>Sysomos</p></div></div>
          <div className="language"><div><TbHexagons color='red'/><p>crimson hexagon</p></div></div>
        </div>
        </Tilt>

      </div>
      <h1>&lt;/skills&gt;</h1>
    </div>
  )
}

export default Expert
