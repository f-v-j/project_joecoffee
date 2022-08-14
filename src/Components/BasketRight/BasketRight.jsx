import './BasketRight.css';
import {NavLink} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import BasketRightBlock from "../Block/BasketRightBlock";

function BasketRight(props) {

    const CloseBasketRight = ()=>{
        document.getElementById("basketright").style.right="-300px";
        document.getElementById("darkwindow").style.display="none";
    }

    return (
            <div class="basketright">
                    <div id="darkwindow" onClick={()=>{
                        // props.setBasketopen(false)
                        CloseBasketRight();
                    }}></div>
                    <div id="basketright">
                        <div id="closebasketright" onClick={()=>{
                            // props.setBasketopen(false)
                            CloseBasketRight();
                        }}>X</div>
                        <div className="basketrightcontent">
                            <h2>Your Cart</h2>
                            <div className="cartsarea">

                                { props.order.map((element)=>{
                                    return <BasketRightBlock article={props.GetGoodFromID(element,props.goods)}/>
                                    {/* return <BasketRightBlock article={props.goods.Cofee[element-1]}/>*/}
                                }) }

                            </div>
                            <div className="buttonarea">
                                <button onClick={()=>{
                                    CloseBasketRight();
                                }}>Continue Shoping</button>
                                <button><NavLink to="/basket">Viev Basket</NavLink></button>
                            </div>
                        </div>
                </div>
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BasketRight);
