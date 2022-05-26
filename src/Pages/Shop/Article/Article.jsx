import React, { useContext } from "react";
import {connect} from "react-redux";

import './Article.css';
import Header from "../../../Components/Header/Header";
import MenuBar from "../../../Components/MenuBar/MenuBar";
import Footer from "../../../Components/Footer/Footer";
import head from "../../../Images/head-24x24.png";
import {NavLink} from "react-router-dom";

import {language} from "../../../index"
import App from "../../../App";

function Article(props) {


    const good = props.GetGoodFromID(props.id,props.goods);

    const value = useContext(language);


    return (

            <div className="article">
                <Header/>
                <MenuBar selected={good.type.toLowerCase()}/>
                <h1>

                    {value}


                    <language.Consumer>
                        {language => <button>language</button>}
                    </language.Consumer>


                </h1>







                <div className="flexblock bbb">
                    <div>
                        <img src={good.image} className="goodimg" alt=""/>
                    </div>
                    <div className="">
                        <h1>{props.order}</h1>
                        <h2>{good.header}</h2>
                        <h4>{good.textheader}</h4>
                        <p>{good.text}</p>
                        <p className="price">{good.price}</p>
                        <button onClick={() => {
                            document.getElementById("addbasket").style.display = "block";
                            props.addGood(props.id);
                        }
                        }>ADD TO BASKET
                        </button>

                        <div id="addbasket">
                            <div className="darkwindow"></div>
                            <div className="addedtobasket">
                                <h3>The product has been added to the basket.</h3>
                                <button onClick={() => {
                                    document.getElementById("addbasket").style.display = "none";
                                }}>Continue Shoping
                                </button>
                                <button><NavLink to="/basket">Viev Basket</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

    );
}

function mapStateToProps (state) {
    return {
        order: state.order,
        goods: state.goods,
        GetGoodFromID: state.GetGoodFromID
    }
}
function mapDispatchToProps (dispatch) {
        return {
            addGood: (id) => { dispatch({type: 'ADD_GOOD', payload: id})}
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Article);