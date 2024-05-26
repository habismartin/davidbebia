import React from "react";
import { TbPointFilled } from "react-icons/tb";
import School from "../../images/certificate.jpg";
import School2 from "../../images/c.jpg";
import David from "../../images/david.jpg";
import David2 from "../../images/david2.jpg";
import { Tilt } from "react-tilt";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <h1>&lt;about me&gt;</h1>
      <div className="about-content">
        <div className="about-img">
          <Tilt>
            <div className="img img1">
              <img src={David2} />
            </div>
          </Tilt>
          <Tilt>
            <div className="img img3">
              <img src={David} />
            </div>
          </Tilt>
        </div>

        <div className="about-text-cover">
          &lt;h1&gt;
          <div className="about-text-wrapper">
            <div className="line"></div>
            <div className="about-text">
              Hello! I’m David Bebia, a multifaceted creative professional with
              a passion for storytelling, visual arts, and digital engagement.
              My expertise spans across social media management, video editing,
              graphic design, and product design, allowing me to help brands
              connect with their audiences in meaningful and impactful ways.{" "}
              <br /> <br />
              <div className="about-imgs">
                <img src={School2} />
              </div>
              Social Media Management As a social media manager, I specialize in
              crafting compelling narratives and strategic campaigns that
              resonate with target audiences. With a keen eye for trends and an
              understanding of platform algorithms, I’ve successfully increased
              engagement, built communities, and boosted brand awareness for
              various clients. My approach is data-driven yet creative, ensuring
              that every post, tweet, and story contributes to the overall brand
              strategy and objectives. <br /> <br />
              Video Editing My video editing skills bring stories to life
              through dynamic and engaging visuals. Whether it's creating
              captivating promotional videos, informative tutorials, or visually
              stunning advertisements, I am adept at using industry-standard
              software to produce high-quality content. My attention to detail
              ensures that each frame contributes to the narrative, keeping
              viewers engaged and conveying the desired message effectively.{" "}
              <br />
              <br />
              Graphic Design Graphic design is where my creativity truly shines.
              I create visually appealing designs that not only catch the eye
              but also communicate the brand's message clearly and effectively.
              From logo design to marketing materials, I ensure that every piece
              of design work aligns with the brand’s identity and resonates with
              its audience. My proficiency with tools like Adobe Photoshop,
              Illustrator, and InDesign allows me to bring any vision to life.{" "}
              <br />
              <br />
              Product Design I hold a product design certificate and am in the
              process of obtaining additional certifications that further hone
              my design skills and knowledge. My background in product design
              enables me to understand the user experience deeply and create
              products that are not only aesthetically pleasing but also
              functional and user-friendly.
              <br />
              <br />
              <div className="about-imgs">
                <img src={School} />
              </div>
              Let’s Collaborate! If you’re looking to elevate your brand’s
              visual identity and engage with your audience through compelling
              content and strategic campaigns, I’m here to help. Let’s
              collaborate and bring your vision to life!{" "}
              <a href="#contact">Contact me.</a>
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
