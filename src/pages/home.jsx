import React, { useState, useEffect, useContext, useRef } from "react";
import img from "../images/codeimage.webp";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import Monitor from "../images/applemonitor.png";
import { DarkModeContext } from "../context/darkModeContext";
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from "react-icons/wi";
import "../styles/home.scss";

const Home = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:habismartin5@gmail.com';
  };

  const { dispatch } = useContext(DarkModeContext);

  const [displayText, setDisplayText] = useState("");
  const finalText = "Habis Martin Chinedu";

  useEffect(() => {
    let isMounted = true;
    const typingInterval = setInterval(() => {
      if (isMounted) {
        setDisplayText(
          (prevText) => prevText + finalText.charAt(prevText.length)
        );
      }

      if (displayText.length === finalText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      isMounted = false;
      clearInterval(typingInterval);
    };
  }, [displayText, finalText]);

  const [isOpen, setIsOpen] = useState();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  //weather and time
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=cb81ec1b3744b9ea8b6b17eeea16ac06&units=metric"
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        return <WiDaySunny />;
      case "Clouds":
        return <WiCloudy />;
      case "Rain":
        return <WiRain />;
      case "Snow":
        return <WiSnow />;
      default:
        return null;
    }
  };

  return (
    <div className="home">
      <div className="weather-time">
        {weather && (
          <div>
            <p>{weather.name}</p>
            <p className="weather">
              {weather.main.temp} °C{" "}
              <span>{getWeatherIcon(weather.weather[0].main)}</span>
            </p>
          </div>
        )}
        <p>{time.toLocaleTimeString()}</p>
      </div>
      <div className="introduction">
        <div className="introduction-texts">
          <h1>
            Hi there! I'm
            <br />{" "}
            <span>
              <h3 className="blinking-slash">{displayText}</h3>
            </span>
          </h1>
          <p className="introduction-text">
            A Full-Stack Web Developer with a focus on the MERN stack, but still
            exploring other technologies and frameworks that catch my interest!
            if you're looking for a developer to add to your team, I'd love to
            hear from you!
          </p>
          <div className="buttons">
            <button>Download Resume</button>
            <div className="socials">
              <a href="https://www.instagram.com/habismartin/?hl=en">
                <div className="insta">
                  <FaInstagramSquare />
                </div>
              </a>
              <a href="https://x.com/habismartin_?s=21">
                <div className="insta">
                  <BsTwitterX />
                </div>
              </a>
              <div onClick={handleEmailClick} className="linkedin">
                <MdOutlineEmail />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="links-cover">
          <div className="monitor-stand"></div>

          <img className="monitor-img" src={Monitor} />
          <div className="links-images">
            <div className="click-main-screen" onClick={handleOpen}></div>
            <a
              href="#skills"
              className={`imgs ${isOpen ? "workspop" : "closed"}`}
            >
              <div className={`img`}>
                <img src={img} />
                <p>//Skills</p>
              </div>
            </a>
            <a href="#works" className={`imgs ${isOpen ? "links" : "closed"}`}>
              {" "}
              <div className={`img`}>
                <img src={img} />
                <p>//Works</p>
              </div>
            </a>
            <a
              href="#education"
              className={`imgs ${isOpen ? "school" : "closed"}`}
            >
              <div className={`img`}>
                <img src={img} />
                <p>//Education</p>
              </div>
            </a>
            <a
              href="#about"
              className={`imgs ${isOpen ? "contactpop" : "closed"}`}
            >
              <div className={`img`}>
                <img src={img} />
                <p>//Contact</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
