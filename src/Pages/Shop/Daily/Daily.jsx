import React from "react";
import './Daily.css';
import Header from "../../../Components/Header/Header";
import MenuBar from "../../../Components/MenuBar/MenuBar";
import Footer from "../../../Components/Footer/Footer";

function Daily(props) {
    return (
        <div className="daily">
            <Header />
            <MenuBar  selected="cofee" />
            <h1>Daily</h1>
            <div class="flexblock bbb">
                <div>
                    <img src={props.dispatch.image} className="goodimg" alt="" />
                </div>
                <div className="" >
                    <h4>{props.dispatch.textheader}</h4>
                    <p>{props.dispatch.text}</p>
                    <h2>{props.dispatch.header}</h2>
                    <p className="price">{props.dispatch.price}</p>
                    <button>ADD TO BASKET</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Daily;