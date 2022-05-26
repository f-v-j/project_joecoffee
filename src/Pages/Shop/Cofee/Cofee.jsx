import React from "react";
import './Cofee.css';
import Header from "../../../Components/Header/Header";
import MenuBar from "../../../Components/MenuBar/MenuBar";
import Footer from "../../../Components/Footer/Footer";
import ShopBlock from "../../../Components/Block/ShopBlock";

function Cofee(props) {
    return (
        <div className="cofee">
            <Header />
            <MenuBar  selected={props.dispatch[0].type.toLowerCase()} />

            <h1>{props.dispatch[0].type}</h1>
            <div>
                { props.dispatch.map((element)=>{
                    return <ShopBlock dispatch={element}/>
                }) }
            </div>
            <Footer />
        </div>
    );
}
export default Cofee;
