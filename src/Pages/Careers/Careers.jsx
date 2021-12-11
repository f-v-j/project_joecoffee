
import React from "react";

import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";




function Careers(props) {
    return (
        <div className="careers">
            <Header />
            <MenuBar  selected="careers" />

            <img src={props.image} className="main_image" alt="" />







            <Footer />
        </div>
    );
}

export default Careers;