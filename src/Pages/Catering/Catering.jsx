
import React from "react";

import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";

function Catering(props) {
    return (
        <div className="catering">
            <Header />
            <MenuBar  selected="catering" />

            <img src={props.image} className="main_image" alt="" />







            <Footer />
        </div>
    );
}

export default Catering;