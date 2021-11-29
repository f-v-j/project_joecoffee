
import './Discover.css';


import PageFrame from "../../Components/PageFrame";
import React from "react";



function Discover(props) {
    return (
        <div className="App">
            <PageFrame image={props.image}/>
        </div>
    );
}

export default Discover;