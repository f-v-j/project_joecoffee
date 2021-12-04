
import React from "react";

import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";



function Wholesale(props) {
    return (
        <div className="wholesale">
            <Header />
            <MenuBar  selected="wholesale" />

            <img src={props.image} className="main_image" alt="" />





            <Footer />
        </div>
    );
}

export default Wholesale;