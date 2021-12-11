
import React from "react";

import './Basket.css';

import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";



function Basket(props) {





    return (
        <div className="basketpage">
            <Header />
            <MenuBar />

            <h1>Basket</h1>

            <div>
                <div>
                    <img src={props.dispatch.image} className="goodimg" alt="" />
                </div>
                <div className="" >
                    <h4>{props.dispatch.textheader}</h4>
                    <p>{props.dispatch.text}</p>
                    <h2>{props.dispatch.header}</h2>
                    <p className="price">{props.dispatch.price}</p>

                </div>



            </div>

            <Footer />
        </div>
    );
}

export default Basket;