
import './Catering.css';


import PageFrame from "../../Components/PageFrame";
import React from "react";



function Catering(props) {
    return (
        <div className="catering">
            <PageFrame image={props.image}/>
        </div>
    );
}

export default Catering;