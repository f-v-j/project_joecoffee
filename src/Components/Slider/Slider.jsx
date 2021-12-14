import React, { useEffect } from 'react';
import './Slider.css';
import Banner1 from "../../Images/Banner-1.png";
import Banner2 from "../../Images/Banner-2.png";
import Banner3 from "../../Images/Banner-3.png";
import Banner4 from "../../Images/Banner-4.png";
import Banner5 from "../../Images/Banner-5.png";
import Banner6 from "../../Images/Banner-6.png";
import {Sliderstart} from "../../Hooks/Sliderstart";

function Slider(props) {
    useEffect(() => {
        Sliderstart();
    });
    return (
        <div id="slider">
            <img src={props.mainimage} className="main_image baseimage" alt="" />

            <img src={Banner1} className="main_image slider sliderstart" alt="" />
            <img src={Banner2} className="main_image slider" alt="" />
            <img src={Banner3} className="main_image slider" alt="" />
            <img src={Banner4} className="main_image slider" alt="" />
            <img src={Banner5} className="main_image slider" alt="" />
            <img src={Banner6} className="main_image slider" alt="" />
        </div>
    );
}
export default Slider;
