import './Block.css';
import { NavLink } from 'react-router-dom'


import Lasdelicias from '../../Images/shop-image-1.png';


function Block(props) {




    return (
        <div className="block">
            <NavLink to={props.dispatch.link}>
                <img src={props.dispatch.image} className="" alt="" />
                <h2>{props.dispatch.header}</h2>
                <p>{props.dispatch.text}</p>
            </NavLink>

        </div>


    );
}

export default Block;
