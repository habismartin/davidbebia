import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import "./dark.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import About from "./components/about/about";
import Expert from "./components/expert/expert";
import Works from "./components/works/works";
import Contact from './components/contact/contact'
import Testimonials from './components/testimonials/testimonials'
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  //darkmode
  const { darkMode } = useContext(DarkModeContext);
  const {dispatch} = useContext(DarkModeContext)


  //cursor
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleDocumentClick = () => {
      setIsExpanded(true);
      setTimeout(() => {
        setIsExpanded(false);
      }, 200);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isExpanded]);


  const [isVisible, setIsVisible] = useState(true);
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > 0.1) {
  //       setIsVisible(false);
  //     } 
  //     if (scrollPosition > 0.2) {
  //       setIsVisible1(true);
  //     } 
  //     if (scrollPosition > 0.3) {
  //       setIsVisible2(false);
  //     } 
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className={darkMode ? "app light" : "app"}>
      <div className={`cursor-follower ${isExpanded ? "expanded" : ""}`}>
        <div className="cursor border"
             style={{ left: cursorPosition.x-16, top: cursorPosition.y-17, backgroundColor: isExpanded? '#3b373b': 'transparent' }}
         ></div>
        <div
          className="cursor-dot"
          style={{
            left: cursorPosition.x-3.8,
            top: cursorPosition.y-5,
          }}
        ></div>
      </div>

      <Navbar />
      <div className="body-main"> 
      <div class="orb" onClick={()=> dispatch({type:"TOGGLE"})}></div>
   
        <div className={`g-style ${isVisible? 'visible' : 'hidden'}`} id="home">
        <Home />
        </div>
        <div className={`g-style ${isVisible? 'visible' : 'hidden'}`} id="skills">
          <Expert />
        </div>
        <div className={`g-style ${isVisible1? 'visible' : 'hidden'}`} id="about">
          <About />
        </div>
        <div className={`g-style ${isVisible1? 'visible' : 'hidden'}`} id="works">
          <Works />
        </div>
        {/* <div className={`g-style ${isVisible2? 'visible' : 'hidden'}`} id="testimonials">
          <Testimonials/>
        </div> */}
        <div className={`g-style ${isVisible2? 'visible' : 'hidden'}`} id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
