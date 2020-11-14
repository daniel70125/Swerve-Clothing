import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.scss';
import pic1 from '../../Pictures/IMG_2910.JPG'
import pic2 from '../../Pictures/resized.jpg'
import pic3 from '../../Pictures/resized2.jpg'

const slideImages = [
  pic1,
  pic2,
  pic3
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;