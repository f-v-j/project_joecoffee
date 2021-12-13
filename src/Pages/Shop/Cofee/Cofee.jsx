import React from "react";
import './Cofee.css';
import Header from "../../../Components/Header/Header";
import MenuBar from "../../../Components/MenuBar/MenuBar";
import Footer from "../../../Components/Footer/Footer";
import ShopBlock from "../../../Components/Block/ShopBlock";

function Cofee(props) {
    // let shopblocks=[];
    // for(let i=0; i<props.dispatch.length; i++){
    //     shopblocks.push(<ShopBlock dispatch={props.dispatch[i]}/>);
    // }

    return (
        <div className="cofee">
            <Header />
            <MenuBar  selected="cofee" />

            <h1>Cofee</h1>
            <div>
                {/*{shopblocks}*/}

                { props.dispatch.map((element)=>{
                    return <ShopBlock dispatch={element}/>
                }) }

            </div>
            <Footer />
        </div>
    );
}
export default Cofee;
