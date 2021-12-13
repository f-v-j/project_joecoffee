import React, {useState,useEffect} from 'react';
import { useFormik } from 'formik';
import "./MyAccount.css"
import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";
import Showpassimg from"../../Images/showpass.png";



const SignupForm = () => {

    const [showpass,setShowpass] = useState(false);

    useEffect(()=>{







        showpass ? document.getElementById("password").type='text' : document.getElementById("password").type='password';







    },[showpass])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {

            alert(formik.values.password);

            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="formitem">
                <label htmlFor="email">USERNAME OR EMAIL ADDRESS</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div className="formitem pass">
                <label htmlFor="password">PASSWORD</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <div className="showpass" onClick={()=>{setShowpass(!showpass)}}><img src={Showpassimg} /></div>
            </div>
            <div className="formitem btn">
                <button type="submit">LOGIN</button>
            </div>
        </form>
    );
};

function MyAccount(props) {



    return (
        <>
            <Header />
            <MenuBar />
            <div className="myaccount">
                <h1>My Account</h1>
                {SignupForm()}
            </div>
            <Footer />
        </>
    )
}
export default MyAccount;
