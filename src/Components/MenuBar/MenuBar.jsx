import React, {useState} from "react";
import logo from '../../Images/joecoffee_logo-262x68.png';
import magn from '../../Images/magn-24x24.png';
import head from '../../Images/head-24x24.png';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';
import BasketRight from "../BasketRight/BasketRight";
import basketimage from "../../Images/basket-24x24.png";
import {connect} from "react-redux";

function MenuBar(props) {
    const [shopsubmenu, setShopsubmenu] = useState(false);
    const [discoversubmenu, setDiscoversubmenu] = useState(false);
    const [basketopen, setBasketopen] = useState(false);

    return (
            <div className='menubar'>
                <div className="left-area aaa" >
                    <NavLink to="/" className={props.selected==='app' ? 'selected' : ''}><img src={logo} /></NavLink>
                </div>
                <div className="center-area aaa">
                    <NavLink  to="" className="mshop"
                        // onBlur={()=>{ setShopsubmenu(false)}}
                        onClick={()=>{
                        setShopsubmenu(!shopsubmenu);
                        if(discoversubmenu)setDiscoversubmenu(!discoversubmenu);
                        }}><span className={props.selected==='cofee'||props.selected==='tea'||props.selected==='brewgear' ? 'selected' : ''} >Shop</span>
                        { shopsubmenu && <div className="shop-menubar">
                            <NavLink to="/shop/cofee" ><span className={props.selected==='cofee' ? 'selected' : ''}>COFFEE</span></NavLink>
                            <NavLink to="/shop/tea" ><span className={props.selected==='tea' ? 'selected' : ''}>TEA & TURMERIC</span></NavLink>
                            <NavLink to="/shop/brewgear"><span className={props.selected==='brewgear' ? 'selected' : ''}>BREW GEAR</span></NavLink>
                            <NavLink to="/"><span>MERCHANDISE</span></NavLink>
                            <NavLink to="/"><span>SUBSCRIBE</span></NavLink>
                            <NavLink to="/"><span>GIFTS</span></NavLink>
                            <NavLink to="/"><span>JOE TO GO BOXED COFFEE</span></NavLink>
                            <NavLink to="/theworkshop"><span>CLASSES</span></NavLink>
                        </div>}
                    </NavLink>
                    <NavLink to="/theworkshop" className={props.selected==='theworkshop' ? 'selected' : ''}>TheWorkshop</NavLink>
                    <NavLink to="" className="mdiscover" onBlur={()=>{
                        setDiscoversubmenu(false);
                    }} onClick={()=>{
                        setDiscoversubmenu(!discoversubmenu);
                        if(shopsubmenu)setShopsubmenu(!shopsubmenu);
                    }}>Discover
                        { discoversubmenu && <div className="discover-menubar">
                            <NavLink to="/mdiscover/ourstory">OUR STORY</NavLink>
                            <NavLink to="/mdiscover/brewguides">BREW GUIDES</NavLink>
                            <NavLink to="/blog">BLOG</NavLink>

                            </div>
                        }
                    </NavLink>
                    <NavLink to="/catering" className={props.selected==='catering' ? 'selected' : ''}>Catering</NavLink>
                    <NavLink to="/careers" className={props.selected==='careers' ? 'selected' : ''}>Careers</NavLink>
                    <NavLink to="/location" className={props.selected==='location' ? 'selected' : ''}>Location</NavLink>
                    <NavLink to="/wholesale" className={props.selected==='wholesale' ? 'selected' : ''}>Wholesale</NavLink>
                </div>
                <div className="right-area aaa" >
                    <button className="order" class="orderbutton">ORDER ONLINE</button>
                    <NavLink to="/my-account"><img src={head} /></NavLink>
                    <NavLink to="/search"><img src={magn} /></NavLink>
                    <NavLink id="basketrightlink" to=""  onClick={()=>{
                        // setBasketopen(true);
                        document.getElementById("basketright").style.right="0px";
                        document.getElementById("darkwindow").style.display="block";
                    }}><i id="amoun_items_in_basket">{props.order.length}</i><img src={basketimage} /></NavLink>

                    <BasketRight basketopen={basketopen} setBasketopen={setBasketopen} />
                </div>
            </div>
    );
}

function mapStateToProps (state) {
    return {
        order: state.order
    }
}
function mapDispatchToProps (dispatch) {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuBar);
