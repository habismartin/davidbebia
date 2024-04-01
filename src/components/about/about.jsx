import React from "react";
import { TbPointFilled } from "react-icons/tb";
import Me from '../../images/cosmetics1.jpeg'
import {Tilt} from 'react-tilt';
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <h1>&lt;about me&gt;</h1>
      <div className="about-content">

        <div className="about-img">
        <Tilt><div className="img img1"><img src={Me}/></div></Tilt>
        <Tilt><div className="img img3"><img src={Me}/></div></Tilt>
        <Tilt> <div className="img img2"><img src={Me}/></div></Tilt>
        </div>

        <div className="about-text-cover">
          &lt;h1&gt;
          <div className="about-text-wrapper">
            <div className="line"></div>
            <div className="about-text">
              Hello there! 👋 <br /> I'm Habis Martin Chinedu, a passionate MERN
              Full Stack Developer with a love for crafting engaging and dynamic
              web applications. <br /> <br />
              <span>//Background</span> 
              {/* about */}
              <br />
              I embarked on my coding journey in late 2019 and since then, I've been
              immersed in the ever-evolving world of web development.
              <br /> With a background in MERN stack technologies, I've honed my
              skills in: <br /><br />
              <ul> 
                <li><TbPointFilled size={22} color='#dddbde'/> Frontend: HTML, CSS, SCSS, Tailwind CSS, Bootstrap, JavaScript, React JS</li>
                <li><TbPointFilled size={22} color='#dddbde'/> Backend: Node.js, Express.js </li>
                <li><TbPointFilled size={22} color='#dddbde'/> Database: MongoDB</li>
                <li><TbPointFilled size={22} color='#dddbde'/> State Management: Redux </li>
                <li><TbPointFilled size={22} color='#dddbde'/> Version Control: Git, GitHub </li>
                <li><TbPointFilled size={22} color='#dddbde'/> Design: Figma</li>
              </ul>
              <br /> <br />
              <span>//What Drives Me: </span> 
              <br /> Beyond the realm of code, I'm an avid
              gamer, finding inspiration and creativity in virtual worlds. My
              curiosity knows no bounds, and I'm constantly exploring and
              learning new technologies to stay at the forefront of the
              industry.
              <br />
              <br />
              <span>//Why Work With Me:</span>  
              <br /> I approach each project with enthusiasm
              and a commitment to excellence. I thrive in collaborative
              environments and am always eager to contribute my expertise to
              create innovative solutions.
              <br />
              <br />
              <span>//Let's Connect:</span> 
              <br /> If you're looking for a dedicated
              developer who's not only proficient in technology but also
              passionate about delivering exceptional user experiences, I'd love
              to connect with you! Let's collaborate and bring your ideas to
              life. <a href="#contact">Contact me</a>
            </div>
          </div>
          &lt;/h1&gt;
        </div>
      </div>
      <h1>&lt;/about me&gt;</h1>
    </div>
  );
};

export default About;
