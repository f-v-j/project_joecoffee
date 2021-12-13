import React, { useEffect } from 'react';
import Banner from "../../Components/Banner/Banner";
import Block from "../../Components/Block/Block";
import ShopBlock from "../../Components/Block/ShopBlock";
import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";
import {Slider} from "../../Hooks/Slider";
import Banner1 from "../../Images/Banner-1.png";
import Banner2 from "../../Images/Banner-2.png";
import Banner3 from "../../Images/Banner-3.png";
import Banner4 from "../../Images/Banner-4.png";
import Banner5 from "../../Images/Banner-5.png";
import Banner6 from "../../Images/Banner-6.png";


function MainPage(props) {
    useEffect(() => {
        Slider();
    });
    let shopblocks=[];
    let advertblocks=[];
    for(let i=0; i<props.dispatch.shopblocks.length; i++){
        shopblocks.push(<ShopBlock dispatch={props.dispatch.shopblocks[i]}/>);
    }
    for(let i=0; i<props.dispatch.advertblocks.length; i++){
        advertblocks.push(<Block dispatch={props.dispatch.advertblocks[i]}/>);
    }

    return (
        <div className="App">
            <Header />
            <MenuBar />
            <div id="slider">
                <img src={props.dispatch.mainimage} className="main_image baseimage" alt="" />

                <img src={Banner1} className="main_image slider sliderstart" alt="" />
                <img src={Banner2} className="main_image slider" alt="" />
                <img src={Banner3} className="main_image slider" alt="" />
                <img src={Banner4} className="main_image slider" alt="" />
                <img src={Banner5} className="main_image slider" alt="" />
                <img src={Banner6} className="main_image slider" alt="" />
            </div>
            <div className="content">
                <div className="flexblock">
                    {shopblocks}
                </div>
                <Banner dispatch={props.dispatch.banner} />
                <div className="flexblock">
                    {advertblocks}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default MainPage;
