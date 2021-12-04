import React from "react";

import './App.css';

import Banner from "./Components/Banner/Banner";
import Block from "./Components/Block/Block";
import ShopBlock from "./Components/Block/ShopBlock";
import Header from "./Components/Header/Header";
import MenuBar from "./Components/MenuBar/MenuBar";
import Footer from "./Components/Footer/Footer";



import {Slider} from "./Slider";
import Banner1 from "./Images/Banner-1.png";
import Banner2 from "./Images/Banner-2.png";
import Banner3 from "./Images/Banner-3.png";
import Banner4 from "./Images/Banner-4.png";
import Banner5 from "./Images/Banner-5.png";
import Banner6 from "./Images/Banner-6.png"









function App(props) {






   let b=[];
   b.length=3;
   b.fill(<ShopBlock image={props.image}/>, 0, 3);


  return (
          <div className="App">

                <Header />
                <MenuBar />
                <div id="slider">
                    <img src={props.image} className="main_image baseimage" alt="" />

                    <img src={Banner1} className="main_image slider sliderstart" alt="" />
                    <img src={Banner2} className="main_image slider" alt="" />
                    <img src={Banner3} className="main_image slider" alt="" />
                    <img src={Banner4} className="main_image slider" alt="" />
                    <img src={Banner5} className="main_image slider" alt="" />
                    <img src={Banner6} className="main_image slider" alt="" />
                </div>

              <button onClick={()=>{ Slider(); }}>Start Slider</button>

                <div className="content">

                      {b}

                      <Banner image={props.image} />

                      <Block image={props.image} />
                      <Block image={props.image} />
                      <Block image={props.image} />
                      <Block image={props.image} />
                      <Block image={props.image} />





                </div>

                <Footer />
          </div>
  );
}

export default App;
