import React, {useState} from 'react';

import './Header.css';


function Header() {

    const [a, setA] = useState(true);

    return (


            <header className="header"  onClick={()=>{setA(!a)}}   >
                { a && <h3 >Please be advised that during the holiday season, shipping may take longer than normal due to carrier high volume delays.</h3>}
            </header>


    );
}

export default Header;
