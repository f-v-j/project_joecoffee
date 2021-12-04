import './ShopBlock.css';
import { NavLink } from 'react-router-dom'


import Lasdelicias from '../../Images/shop-image-1.png';


function ShopBlock(props) {

        // From Props
        let header = "Nicaragua Las Delicias";
        let textheader  =  "Tastes Like";
        let text  =  "almond brittle, apple, date";
        let price  =  "$16.50";
        let link  =  "/theworkshop";

    return (
        <div className="shopblock">
            <NavLink to={link}>
                <div>
                    <img src={Lasdelicias} className="" alt="" />
                    <div className="hiddentext" >
                        <h4>{textheader}</h4>
                        <p>{text}</p>
                    </div>

                </div>
                <h2>{header}</h2>
                <p className="price">{price}</p>


            </NavLink>

        </div>


    );
}

export default ShopBlock;
