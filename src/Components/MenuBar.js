
import logo from '../Images/joecoffee_logo-262x68.png';

 import { NavLink } from 'react-router-dom'


 import './MenuBar.css';

function MenuBar() {
    return (


            <div className='menubar'>



                <NavLink to="/"><img src={logo} className="" alt="logo" /></NavLink>

                <NavLink to="/careers">Careers</NavLink>
                <NavLink to="/catering">Catering</NavLink>
                <NavLink to="/discover">Discover</NavLink>
                <NavLink to="/location">Location</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/theworkshop">TheWorkshop</NavLink>
                <NavLink to="/wholesale">Wholesale</NavLink>

            </div>


    );
}

export default MenuBar;
