import './BasketBlock.css';
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux";


function BasketBlock(props) {
    const link="/shop/article/" + props.article.id;
    return (
        <div className="basketblock">
            <table>
                <tr>
                    <td>
                        <NavLink to={link}>
                            <img src={props.article.image} className="" alt="" />
                        </NavLink>
                    </td>
                    <td className='goodsname'><h4>{props.article.header}</h4></td>
                    <td><h4 className="price">{props.article.price}</h4></td>
                    <td><button className="deleteitem" onClick={()=>{
                        props.DeleteGood(props.article.id);
                    }}>x</button></td>
                </tr>
            </table>
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
        DeleteGood: (id) => { dispatch({type: 'DELETE_GOOD', payload: id})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BasketBlock);
