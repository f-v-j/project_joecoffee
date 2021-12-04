import './Block.css';
import { NavLink } from 'react-router-dom'


import Lasdelicias from '../../Images/shop-image-1.png';


function Block(props) {


        let header = "Classes";
        let text  =  "From manual brewing and latte art to full barista courses, we offer a variety of classes for every skill level!";
        let link  =  "/theworkshop";

    return (
        <div className="block">
            <NavLink to={link}>
                <img src={Lasdelicias} className="" alt="" />
                <h2>{header}</h2>
                <p>{text}</p>
            </NavLink>

        </div>


    );
}

export default Block;
