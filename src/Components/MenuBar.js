
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

                    <NavLink to="/careers">Careers</NavLink>
                    <NavLink to="/catering">Catering</NavLink>
                    <NavLink to="/discover">Discover</NavLink>
                    <NavLink to="/location">Location</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/theworkshop">TheWorkshop</NavLink>
                    <NavLink to="/wholesale">Wholesale</NavLink>

                </div>

                <div className="right-area aaa" >

                    <button classNane="order">ORDER ONLINE</button>

                    <NavLink to="/my_account"><img src={head} /></NavLink>

                    <NavLink to="/search"><img src={magn} /></NavLink>

                    <NavLink to="/basket"><img src={basket} /></NavLink>

                </div>







                {/*
                <NavLink to="/"><h2>JoeCofee</h2></NavLink>

                <NavLink to="/careers">Careers</NavLink>
                <NavLink to="/catering">Catering</NavLink>
                <NavLink to="/discover">Discover</NavLink>
                <NavLink to="/location">Location</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/theworkshop">TheWorkshop</NavLink>
                <NavLink to="/wholesale">Wholesale</NavLink>*/}

            </div>


    );
}

export default MenuBar;
