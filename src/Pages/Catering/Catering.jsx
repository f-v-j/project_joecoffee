
import React from "react";

import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";

import {language} from "../../index";

function Catering(props) {
    return (
            <language.Consumer>
                {language =>

                 <div className="catering">
                         <Header />
                         <MenuBar  selected="catering" />
                         <img src={props.image} className="main_image" alt="" />

                         <h1>{language}</h1>

                         <Footer />
                 </div>
                 }
            </language.Consumer>
    );
}

export default Catering;