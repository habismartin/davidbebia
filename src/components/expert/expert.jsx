import React from 'react'
import HTML from '../../images/html.png'
import Css from '../../images/css.png'
import Scss from '../../images/scss.png'
import Tailwind from '../../images/tailwind.png'
import Bootstrap from '../../images/bootstrap.png'
import JS from '../../images/js.png'
import Reactimg from '../../images/react.png'
import Redux from '../../images/redux.png'
import Express from '../../images/express.png'
import Node from '../../images/node.png'
import Git from '../../images/git.png'
import Github from '../../images/github.png'
import Mongo from '../../images/mongodb.png'
import Vs from '../../images/vs.png'
import Figma from '../../images/figma.png'
import { TbPointFilled } from "react-icons/tb";
import {Tilt} from 'react-tilt';
import './expert.scss'

const Expert = () => {
  return (
    <div className='skills'>
      <h1>&lt;skills&gt;</h1>
      <div className="languages">

        <Tilt>
        <div className="frontend skills-cover">
          <div className="seperate front"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Frontend</p> </div>
          <div className="language"><div><img src={HTML}/><p>HTML</p></div></div>
          <div className="language"><div><img src={Css}/><p>CSS</p></div></div>
          <div className="language"><div><img src={Scss}/><p>SCSS</p></div></div>
          <div className="language"><div><img src={Tailwind}/><p>Tailwind CSS</p></div></div>
          <div className="language"><div><img src={Bootstrap}/><p>Bootstrap</p></div></div>
          <div className="language"><div><img src={JS}/><p>JavaScript</p></div></div>
          <div className="language"><div><img src={JS}/><p>Typescript</p></div></div>
          <div className="language"><div><img src={Reactimg}/><p>React JS</p></div></div>
          <div className="language"><div><img src={Reactimg}/><p>Next JS</p></div></div>
          <div className="language"><div><img src={Redux}/><p>React Native</p></div></div>
          <div className="language"><div><img src={Redux}/><p>React Redux</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="backend skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Backend</p> </div>
          <div className="language"><div><img src={Express}/><p>Express Js</p></div></div>
          <div className="language"><div><img src={Node}/><p>Node Js</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="version-control skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Version-control</p> </div>
          <div className="language"><div><img src={Git}/><p>Git</p></div></div>
          <div className="language"><div><img src={Github}/><p>Git Hub</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="database skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Database</p> </div>
          <div className="language"><div><img src={Mongo}/><p>MongoDB</p></div></div>
        </div>
        </Tilt>

        <Tilt>
        <div className="tools skills-cover">
          <div className="seperate"><TbPointFilled size={22} color='#fc3b10'/><TbPointFilled size={22} color='#ffd500'/><TbPointFilled size={22} color='#0dcc0d'/><p>//Tools</p> </div>
          <div className="language"><div><img src={Vs}/><p>VSCode</p></div></div>
          <div className="language"><div><img src={Figma}/><p>Figma</p></div></div>
          <div className="language"><div><img src={Figma}/><p>Blender</p></div></div>
        </div>
        </Tilt>

      </div>
      <h1>&lt;/skills&gt;</h1>
    </div>
  )
}

export default Expert
