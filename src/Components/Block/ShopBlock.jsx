import './ShopBlock.css';
import { NavLink } from 'react-router-dom'


import Lasdelicias from '../../Images/shop-image-1.png';


function ShopBlock(props) {
    const link="/shop/article/" + props.dispatch.id;
    return (
        <div className="shopblock">
            <NavLink to={link}>
                <div>
                    <img src={props.dispatch.image} className="" alt="" />
                    <div className="hiddentext" >
                        <h4>{props.dispatch.textheader}</h4>
                        <p>{props.dispatch.text}</p>
                    </div>
                </div>
                <h2>{props.dispatch.header}</h2>
                <p className="price">{props.dispatch.price}</p>
            </NavLink>
        </div>
    );
}
export default ShopBlock;
