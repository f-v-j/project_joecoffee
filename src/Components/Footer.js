
import './Footer.css';
import FooterLogo from '../Images/Footer_logo.png'


function Footer() {
    return (


            <footer className="footer">

                <div className="top-footer">

                    <div><img className="logo-footer" src={FooterLogo} /></div>
                    <div>
                        <h2>CONNECT WITH US</h2></div>
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
                        <a href="/">Contact</a>
                        <a href="/">Blog</a>
                        <a href="/">Frequently Asked Questions</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Download Our App</a></div>


                </div>


                <div className="bottom-footer">

                    <div>

                        <p>Copyright © 2019 Joe Coffee</p>
                        <p>All rights reserved</p>
                        <a href="">Made by Needmore</a>

                    </div>
                    <div>

                        <form>

                            <input type="text" placeholder="sign up for our newsletter" />
                            <input type="submit" value="Subscribe"/>

                        </form>

                    </div>



                </div>




            </footer>


    );
}

export default Footer;
