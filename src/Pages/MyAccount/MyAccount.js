import React from 'react';
import "./MyAccount.css"
import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";



function MyAccount(props) {
    return (
        <div className="myaccount">
            <Header />
            <MenuBar />
            <div className="content">
                <h1>My Account</h1>

            </div>
            <Footer />
        </div>
    );
}
export default MyAccount;
