import React, {useState,useEffect} from "react";
import logo from '../../Images/joecoffee_logo-262x68.png';
import magn from '../../Images/magn-24x24.png';
import head from '../../Images/head-24x24.png';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';
import Basket from "../Basket/Basket";
import basketimage from "../../Images/basket-24x24.png";

function MenuBar(props) {
    const [shopsubmenu, setShopsubmenu] = useState(false);
    const [discoversubmenu, setDiscoversubmenu] = useState(false);
    const [basketopen, setBasketopen] = useState(false);

    useEffect(()=>{
        if(basketopen) {
            document.getElementById("darkwindow").style.display = "block";
            document.getElementById("basket").style.display = "block";
            document.getElementById("basket").style.right = "0";
        }
        else{
            document.getElementById("basket").style.right = "-300px";
            document.getElementById("darkwindow").style.display = "none";
        }
    },[basketopen]);

    useEffect(()=>{
        document.getElementsByTagName("body")[0].addEventListener('click',(event)=>{
            if(event.target.className!=='mshop active') setShopsubmenu(false);
            if(event.target.className!=='mdiscover active') setDiscoversubmenu(false);
        });
    },[]);

    return (
            <div className='menubar'>
                <div className="left-area aaa" >
                    <NavLink to="/" className={props.selected==='app' ? 'selected' : ''}><img src={logo} /></NavLink>
                </div>
                <div className="center-area aaa">
                    <NavLink  to="" className="mshop"  onClick={()=>{
                        setShopsubmenu(!shopsubmenu);
                        if(discoversubmenu)setDiscoversubmenu(!discoversubmenu);
                    }}>Shop
                        { shopsubmenu && <div className="shop-menubar">
                            <NavLink to="/shop/cofee" className={props.selected==='cofee' ? 'selected' : ''}>COFFEE</NavLink>
                            <NavLink to="/shop/tea">TEA & TURMERIC</NavLink>
                            <NavLink to="/">BREW GEAR</NavLink>
                            <NavLink to="/">MERCHANDISE</NavLink>
                            <NavLink to="/">SUBSCRIBE</NavLink>
                            <NavLink to="/">GIFTS</NavLink>
                            <NavLink to="/">JOE TO GO BOXED COFFEE</NavLink>
                            <NavLink to="/theworkshop">CLASSES</NavLink>
                        </div>}
                    </NavLink>
                    <NavLink to="/theworkshop" className={props.selected==='theworkshop' ? 'selected' : ''}>TheWorkshop</NavLink>
                    <NavLink to="" className="mdiscover" onClick={()=>{
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
                    <NavLink to=""  onClick={()=>{setBasketopen(true)}}><img src={basketimage} /></NavLink>
                    <div id="darkwindow" onClick={()=>{setBasketopen(false)}}></div>
                    <Basket basketopen={basketopen} setBasketopen={setBasketopen} />
                </div>
            </div>
    );
}
export default MenuBar;
