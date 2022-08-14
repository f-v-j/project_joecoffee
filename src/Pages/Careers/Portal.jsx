
import React from "react";
import ReactDOM from "react-dom";






function Portal(props){


    let domNode = document.getElementById('portal');

    return ReactDOM.createPortal(
        <div>
            <h1>Portal</h1>
        </div>,
        domNode
    );

}

export default Portal;