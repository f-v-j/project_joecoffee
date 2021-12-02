
import logo from '../Images/joecoffee_logo-262x68.png';
import magn from '../Images/magn-24x24.png';
import head from '../Images/head-24x24.png';
import basket from '../Images/basket-24x24.png';

 import { NavLink } from 'react-router-dom'


 import './MenuBar.css';

function MenuBar() {
    return (


            <div className='menubar'>


                <div className="left-area aaa">
                    <NavLink to="/"><img src={logo} /></NavLink>
                </div>

                <div className="center-area aaa">

                    <NavLink to="/shop" className="mshop">Shop
                    <div className="shop-menubar">
                        <NavLink to="/">COFFEE</NavLink>
                        <NavLink to="/">TEA & TURMERIC</NavLink>
                        <NavLink to="/">BREW GEAR</NavLink>
                        <NavLink to="/">MERCHANDISE</NavLink>
                        <NavLink to="/">SUBSCRIBE</NavLink>
                        <NavLink to="/">GIFTS</NavLink>
                        <NavLink to="/">JOE TO GO BOXED COFFEE</NavLink>
                        <NavLink to="/">CLASSES</NavLink>
                    </div>
                    </NavLink>

                    <NavLink to="/theworkshop">TheWorkshop</NavLink>
                    <NavLink to="/discover" className="mdiscover">Discover
                    <div className="discover-menubar">
                        <NavLink to="/">OUR STORY</NavLink>
                        <NavLink to="/">BREW GUIDES</NavLink>
                        <NavLink to="/">BLOG</NavLink>

                    </div>
                    </NavLink>

                    <NavLink to="/catering">Catering</NavLink>
                    <NavLink to="/careers">Careers</NavLink>
                    <NavLink to="/location">Location</NavLink>
                    <NavLink to="/wholesale">Wholesale</NavLink>

                </div>

                <div className="right-area aaa" >

                    <button classNane="order">ORDER ONLINE</button>

                    <NavLink to="/my_account"><img src={head} /></NavLink>

                    <NavLink to="/search"><img src={magn} /></NavLink>

                    <NavLink to="/basket"><img src={basket} /></NavLink>

                </div>






            </div>


    );
}

export default MenuBar;
