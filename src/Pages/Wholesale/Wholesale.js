
import './Wholesale.css';


import PageFrame from "../../Components/PageFrame";
import React from "react";



function Wholesale(props) {
    return (
        <div className="App">
            <PageFrame image={props.image}/>
        </div>
    );
}

export default Wholesale;