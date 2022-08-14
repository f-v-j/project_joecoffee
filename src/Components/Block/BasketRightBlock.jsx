import './BasketRightBlock.css';

function BasketRightBlock(props) {
    return (
        <div className="basketrightblock">
            <table>
                <tr>
                    <td><img src={props.article.image} className="" alt="" /></td>
                    <td className='goodsname'><h4>{props.article.header}</h4></td>
                </tr>
            </table>
        </div>
    );
}
export default BasketRightBlock;
