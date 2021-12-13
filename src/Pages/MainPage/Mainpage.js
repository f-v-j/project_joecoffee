import React, { useEffect } from 'react';
import Banner from "../../Components/Banner/Banner";
import Block from "../../Components/Block/Block";
import ShopBlock from "../../Components/Block/ShopBlock";
import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";

import Slider from "../../Components/Slider/Slider";



function MainPage(props) {

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
            <Slider mainimage={props.dispatch.mainimage}/>
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
