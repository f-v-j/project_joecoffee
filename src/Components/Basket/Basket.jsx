
import './Basket.css';

function Basket(props) {
    return (
            <div class="basket">
                    <div id="darkwindow" onClick={()=>{
                        // props.setBasketopen(false)
                        document.getElementById("basket").style.right="-300px";
                        document.getElementById("darkwindow").style.display="none";
                    }}></div>
                    <div id="basket">
                        <div id="closebasket" onClick={()=>{
                            // props.setBasketopen(false)
                            document.getElementById("basket").style.right="-300px";
                            document.getElementById("darkwindow").style.display="none";
                        }}>X</div>
                        <div className="basketcontent">
                            <h2>Your Cart</h2>
                            <div className="cartsarea">
                            </div>
                            <div className="buttonarea">
                                <button>Continue Shoping</button>
                                <button>Viev Cart</button>
                            </div>
                        </div>
                </div>
            </div>
    );
}
export default Basket;