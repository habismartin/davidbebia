import React from "react";
import { TbPointFilled } from "react-icons/tb";
import Video from "../../images/vid.MP4";
import { FaInstagramSquare } from "react-icons/fa";
import "./works.scss";

// Import images from src folder
import ig1 from "../../images/ig1.JPG";
import ig2 from "../../images/ig2.JPG";
import ig3 from "../../images/ig3.JPG";
import ig4 from "../../images/ig4.JPG";
import ig5 from "../../images/ig5.JPG";
import ig6 from "../../images/ig6.JPG";
import ig7 from "../../images/ig7.JPG";
import ig8 from "../../images/ig8.JPG";

const Works = () => {
  // Array of imported images
  const images = [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8];

  return (
    <div className="works">
      <h1>&lt;works&gt;</h1>
      <div className="works-wrapper">
        <div className="works-cover">
          <div className="seperate">
            <TbPointFilled size={22} color="#fc3b10" />
            <TbPointFilled size={22} color="#ffd500" />
            <TbPointFilled size={22} color="#0dcc0d" />
          </div>
          <video width="600" controls>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {images.map((image, index) => (
          <div key={index} className="works-cover for-images">
            <div className="seperate">
              <TbPointFilled size={22} color="#fc3b10" />
              <TbPointFilled size={22} color="#ffd500" />
              <TbPointFilled size={22} color="#0dcc0d" />
            </div>
            <div className="image-item">
              <img src={image} alt={`image-${index}`} />
            </div>
          </div>
        ))}

        <div className="work-links">
          <p>Work links</p>
          <div className="links-wrapper">
          <a href="https://www.instagram.com/reel/C1Pc_QfooqG/?igsh=dTFmNzFjZm1lM2J6"><div className="links"><FaInstagramSquare color="#e34a8d" size={30}/></div></a>
          <a href="https://www.instagram.com/reel/CzO5Z5iIdSZ/?igsh=N2xxbjBhODd3NXN6"><div className="links"><FaInstagramSquare color="#e34a8d" size={30}/></div></a>
          <a href="https://www.instagram.com/reel/C604ShitVXl/?igsh=MWN5MDZldm1nMWljNQ=="><div className="links"><FaInstagramSquare color="#e34a8d" size={30}/></div></a>
          <a href="https://www.instagram.com/reel/C55jo8OLOTn/?igsh=YmJlZnRydHhrZDRr"><div className="links"><FaInstagramSquare color="#e34a8d" size={30}/></div></a>
          <a href="https://www.instagram.com/reel/C3xngbgtBRo/?igsh=MTJpMTVqdWtyYXV2eA=="><div className="links"><FaInstagramSquare color="#e34a8d" size={30}/></div></a>
          </div>
        </div>
      </div>
      <h1>&lt;/works&gt;</h1>
    </div>
  );
};

export default Works;
