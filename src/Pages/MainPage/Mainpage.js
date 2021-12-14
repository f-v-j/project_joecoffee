import React from 'react';
import Banner from "../../Components/Banner/Banner";
import Block from "../../Components/Block/Block";
import ShopBlock from "../../Components/Block/ShopBlock";
import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";

import Slider from "../../Components/Slider/Slider";



function MainPage(props) {
    return (
        <div className="App">
            <Header />
            <MenuBar />
            <Slider mainimage={props.dispatch.mainimage}/>
            <div className="content">
                <div className="flexblock">
                    { props.dispatch.shopblocks.map((element)=>{
                        return <ShopBlock dispatch={element}/>
                    }) }
                </div>
                <Banner dispatch={props.dispatch.banner} />
                <div className="flexblock">
                    { props.dispatch.advertblocks.map((element)=>{
                        return <Block dispatch={element}/>
                    }) }
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default MainPage;
