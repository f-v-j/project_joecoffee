
import './Shop.css';


import PageFrame from "../../Components/PageFrame";
import React from "react";



function Shop(props) {
    return (
        <div className="App">
            <PageFrame image={props.image}/>
        </div>
    );
}

export default Shop;