
import React from "react";
import {connect} from "react-redux";

import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";





function Location(props) {




    return (
        <div className="location">
            <Header />
            <MenuBar  selected="location" />



            <Footer />
        </div>
    );
}

export default connect(

    state =>({store:state}),

    dispatch =>({
            addGood : (id)=>{
                dispatch({type:'ADD_GOOD', payload:id});
            }

        })
)(Location);