
import React from "react";

import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";



function TheWorkshop(props) {
    return (
        <div className="theworkshop">
            <Header />
            <MenuBar  selected="theworkshop" />

            <img src={props.image} className="main_image" alt="" />





            <Footer />
        </div>
    );
}

export default TheWorkshop;