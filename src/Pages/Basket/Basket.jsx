import React, {useEffect} from "react";
import './Basket.css';
import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";
import {connect} from "react-redux";
import BasketBlock from "../../Components/Block/BasketBlock";

function Basket(props) {
    return (
        <div className="basketpage">
            <Header />
            <MenuBar />

            <h1>Basket</h1>
            <div className="goodsarea">
                { props.order.map((element)=>{
                    // return <BasketBlock article={props.goods.Cofee[element-1]}/>
                    return <BasketBlock article={props.GetGoodFromID(element,props.goods)}/>
                }) }
            </div>
            <Footer />
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
export default connect(mapStateToProps,mapDispatchToProps)(Basket);
