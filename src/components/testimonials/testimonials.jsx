import React from 'react'
import './testimonials.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Person from '../../images/amanface.jpeg'
import {Tilt} from 'react-tilt';

const Testimonials = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: null, 
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='testimonials'>
      <h1>&lt;testimonials&gt;</h1>
      <div className="slider">
      <Slider {...settings}>

        <Tilt>
        <div className='slides'>
          <div className="slides-content">
          <div className="photo"><img src={Person}/></div>
          <p>Cynthia Alice</p>
          <div className="text"><span>You are viewing dummy text in English</span><br /><br />
          Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain son rose more park way that. An stairs as be lovers uneasy. <br /><br />
          As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
          </div>
          </div>
        </div>
        </Tilt>

        <Tilt>
        <div className='slides'>
          <div className="slides-content">
          <div className="photo"><img src={Person}/></div>
          <p>Cynthia Alice</p>
          <div className="text"><span>You are viewing dummy text in English</span><br /><br />
          Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain son rose more park way that. An stairs as be lovers uneasy. <br /><br />
          As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
          </div>
          </div>
        </div>
        </Tilt>

        <Tilt>
        <div className='slides'>
          <div className="slides-content">
          <div className="photo"><img src={Person}/></div>
          <p>Cynthia Alice</p>
          <div className="text"><span>You are viewing dummy text in English</span><br /><br />
          Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain son rose more park way that. An stairs as be lovers uneasy. <br /><br />
          As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.
          </div>
          </div>
        </div>
        </Tilt>

      </Slider>
      </div>
      <h1>&lt;/testimonials&gt;</h1>
    </div>
  )
}

export default Testimonials
