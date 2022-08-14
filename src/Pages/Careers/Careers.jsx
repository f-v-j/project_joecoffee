
import React, {useRef,useState} from "react";
import './Careers.css';




import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";
import Component from "./Component";
import Portal from "./Portal";
import {TestComponent} from "./TestComponent"
import Hof1 from '../../HOF/Hof1';


function Careers(props) {

    let ref1 = useRef(null);

    let [portal, setPortal] = useState(false);

    function click_hundler (){

        ref1.current.style.color = 'green';

        setPortal(!portal);

    }





    return (
        <div>
            <Header />
            <MenuBar  selected="careers" />
            {/*<img src={props.image} className="main_image" alt="" />*/}
                <div className="careers">

                    <button onClick={click_hundler}>button</button>

                    <Component ref={ref1}/>

                    {portal && <Portal />}



                    <TestComponent number={2}/>
                    {Hof1(TestComponent)}




                </div>

            <Footer />
        </div>
    );
}

export default Careers;