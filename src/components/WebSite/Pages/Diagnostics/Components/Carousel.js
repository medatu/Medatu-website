import React, { Component } from "react";
import Slider from "react-slick";
import { carouseldata } from "./carouseldata";
import './Carousel.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{paddingTop: '2rem'}}>
        <Slider {...settings}>
          {carouseldata.map(item => {
            return(
              <div>
              <img src={item.img} alt="slider" className='d-carousel'/>
            </div>
            )
         
          })}
        </Slider>
        </div>
    );
  }
}