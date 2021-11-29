
import './TheWorkshop.css';


import PageFrame from "../../Components/PageFrame";
import React from "react";



function TheWorkshop(props) {
    return (
        <div className="App">
            <PageFrame image={props.image}/>
        </div>
    );
}

export default TheWorkshop;