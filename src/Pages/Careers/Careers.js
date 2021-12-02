
import './Careers.css';


import PageFrame from "../../Components/PageFrame";
import React from "react";



function Careers(props) {
    return (
        <div className="careers">
            <PageFrame image={props.image}/>
        </div>
    );
}

export default Careers;