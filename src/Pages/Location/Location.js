
import './Location.css';


import PageFrame from "../../Components/PageFrame";
import React from "react";



function Location(props) {
    return (
        <div className="App">
            <PageFrame image={props.image}/>
        </div>
    );
}

export default Location;