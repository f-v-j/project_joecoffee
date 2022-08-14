import React from 'react';
import './Footer.css';
import FooterLogo from '../../Images/Footer_logo.png';
import {NewButton} from './NewButton';


class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.refRedirection = React.createRef();

        this.RefHandler = this.RefHandler.bind(this);
    }

    RefHandler(event) {
        event.preventDefault();

        this.myRef.current.focus();
        this.myRef1.current.click();

        this.refRedirection.current.style.backgroundColor = 'blue';//Перенаправлення рефів у DOM-компоненти
    }

    componentDidMount(){

        // setTimeout(()=>{
        //     this.myRef2.current.style.backgroundColor = 'blue';
        // }, 5000);

    }

    render() {
        return(
            <footer className="footer">
            <div className="top-footer">
                <div><img className="logo-footer" src={FooterLogo}/></div>
                <div>
                    <h2 ref={this.myRef2} >CONNECT WITH US</h2>
                    <div className="socilnetwork">
                        <a ref={this.myRef1} href="https://www.instagram.com/joecoffeecompany/">
                            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <title>instagram</title>
                                <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
                                    <rect fill="#ffffff" width="19.167" height="19.167" rx="3"></rect>
                                    <path
                                        d="M19.583 16.25a3.333 3.333 0 0 1-3.333 3.333H3.75A3.333 3.333 0 0 1 .417 16.25V3.75A3.333 3.333 0 0 1 3.75.417h12.5a3.333 3.333 0 0 1 3.333 3.333v12.5zM.417 7.083H6.42m7.137 0h6.045"
                                        stroke="#118acb" stroke-linejoin="round"></path>
                                    <circle stroke="#118acb" stroke-linejoin="round" cx="10" cy="10" r="4.583"></circle>
                                    <path stroke="#118acb" stroke-linejoin="round"
                                          d="M15.417 2.917H17.917V5.417H15.417z"></path>
                                    <path d="M2.083.833v6.25M3.75.417v6.666M5.417.417v6.666" stroke="#118acb"
                                          stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/JoeCoffeeCompany/">
                            <svg width="11" height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
                                <title>facebook</title>
                                <path
                                    d="M10.482 5.804H6.926V4.217c0-.747.495-.921.843-.921h2.49V.01L6.65 0C3.38 0 2.76 2.448 2.76 4.017v1.786h-2.5v3.334h2.5v10h4.167v-10h3.209l.347-3.333z"
                                    fill="#ffffff"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/JoecoffeeNYC">
                            <svg width="21" height="17" viewBox="0 0 21 17" xmlns="http://www.w3.org/2000/svg">
                                <title>twitter</title>
                                <path
                                    d="M20.741 2.08c-.725.323-1.337.334-1.984.014.835-.5.874-.853 1.176-1.799a8.111 8.111 0 0 1-2.572.984 4.05 4.05 0 0 0-6.9 3.694A11.492 11.492 0 0 1 2.115.74a4.049 4.049 0 0 0 1.253 5.406 4.034 4.034 0 0 1-1.833-.505v.05a4.052 4.052 0 0 0 3.248 3.971 4.077 4.077 0 0 1-1.83.07 4.056 4.056 0 0 0 3.783 2.812 8.143 8.143 0 0 1-5.995 1.676A11.465 11.465 0 0 0 6.95 16.04c7.447 0 11.52-6.17 11.52-11.521 0-.177-.003-.35-.01-.524.79-.57 1.74-1.102 2.282-1.915z"
                                    fill="#ffffff"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/joe-coffee/">
                            <svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                                <title>linkedin</title>
                                <path
                                    d="M4.781 18.921H.026V6.556H4.78v12.365zM2.395 4.654h-.029C.93 4.654 0 3.53 0 2.294 0 1.03.959 0 2.423 0c1.465 0 2.366 1.063 2.396 2.327-.001 1.236-.93 2.327-2.424 2.327zm10.947 5.707a1.902 1.902 0 0 0-1.902 1.902v6.658H6.684s.056-11.414 0-12.365h4.756V7.97s1.472-1.373 3.745-1.373c2.818 0 4.815 2.04 4.815 5.996v6.33h-4.756v-6.659c0-1.05-.851-1.902-1.902-1.902z"
                                    fill="#ffffff"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h2>SHOP</h2>
                    <a href="/">Single Origin</a>
                    <a href="/">Signature Coffees</a>
                    <a href="/">Specialty Instant</a>
                    <a href="/">Subscribe</a>
                    <a href="/">Brew Gear</a>
                    <a href="/"> Merchandise</a>
                    <a href="/">The Workshop</a>
                    <a href="/">My Account</a>
                </div>
                <div>
                    <h2>LEARN</h2>
                    <a href="/wholesale">Wholesale</a>
                    <a href="/location">Locations</a>
                    <a href="/shop/article/2">Contact</a>
                    <a href="/">Blog</a>
                    <a href="/">Frequently Asked Questions</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Download Our App</a></div>
            </div>
            <div className="bottom-footer">
                <div>
                    <p>Copyright © 2019 Joe Coffee</p>
                    <p>All rights reserved</p>
                    <a href="/">Made by Needmore</a>
                </div>
                <div>
                    <form>
                        <input type="text"  ref={this.myRef}   placeholder="sign up for our newsletter"/>
                        <input type="submit" onClick={this.RefHandler} value="Subscribe"/>
                    </form>

                    {/*Перенаправлення рефів у DOM-компоненти*/}
                    <NewButton ref={this.refRedirection} >Click Me !!!</NewButton>
                </div>
            </div>
        </footer>
        )
    };
}
export default Footer;
