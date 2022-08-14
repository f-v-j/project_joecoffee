import React, {useRef} from 'react';
import './Header.css';

function Header() {

    let ccc;

    const callbackfunction = element => {
        ccc = element;
    };

    const aaa = useRef(null);


    const ButtonClickHundler = ()=>{
        aaa.current.style.backgroundColor = 'green';
    }
    const ButtonClickHundler2 = ()=>{
        ccc.style.backgroundColor = 'yellow';
    }

    return (
            <header className="header"  >

                {/*<div id="portal"></div>*/}
                {/*<h3  ref={aaa} >Please be advised that during the holiday season, shipping may take longer than normal due to carrier high volume delays.</h3>*/}
                {/*<h3 ref={callbackfunction} >Please be advised that during the holiday season, shipping may take longer than normal due to carrier high volume delays.</h3>*/}
                {/*<button onClick={()=>{ButtonClickHundler();ButtonClickHundler2();}} >Click</button>*/}
                {/*/!*<button onClick={ButtonClickHundler2} >Click</button>*!/*/}

                <h3>Free UPS Shipping on All U.S. Orders Over $40! Subscriptions Always Ship Free.</h3>

            </header>
    );
}
export default Header;
