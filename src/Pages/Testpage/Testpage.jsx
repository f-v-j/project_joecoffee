
import React, {useState,useEffect,useLayoutEffect} from "react";
import {connect,useSelector,useDispatch} from "react-redux";

import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";
import "./Textpage.css";



export const Testpage = ({
    author,
    age
}) => {

   let [isInformationShown, setInformationShown ] = useState(false);
   let [isModalWindowShown, setModalWindowShown ] = useState(false);
   let [counter, setCounter ] = useState(0);
   let [isFetchShown, setFetchShown ] = useState(false);
   let [users, setUsers ] = useState([]);

   let language = useSelector((state) => state.language);
   let theme = useSelector((state) => state.theme);
   let dispatchAction = useDispatch();

   let nextLanguage = language === 'en' ? 'uk' : 'en';
   let nextTheme = theme === 'light' ? 'dark' : 'light';


    setInterval(()=>{
        console.log("SETTIMEOUT")

    },5000)


    useEffect(() => {
        document.title = counter;
   })
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            })
    },[])

    return (
            <>
                <Header />
                <MenuBar />
                <div className={"testpage "+theme} >
                    <button
                        className={isInformationShown ? 'activebutton' : '' }
                        onClick={() => setInformationShown(!isInformationShown) }
                    >
                        {isInformationShown ? 'Hide Information' : 'Show Information'}
                    </button>
                    <button
                        className={isModalWindowShown ? 'activebutton' : '' }
                        onClick={() => setModalWindowShown(!isModalWindowShown) }
                    >
                        {isModalWindowShown ? 'Hide Modal Window' : 'Show Modal Window'}
                    </button>
                    <button
                        className={isFetchShown ? 'activebutton' : '' }
                        onClick={() => setFetchShown(!isFetchShown) }
                    >
                        {isFetchShown ? 'Hide Fetch' : 'Show Fetch'}
                    </button>
                    <br/>
                    <button
                        onClick={() => setCounter(counter+1) }
                    >
                        {counter}
                    </button>
                    <button
                        onClick={() => setCounter(0) }
                    >
                        Reset Counter
                    </button>
                    <br/>
                    <button
                        onClick={() => dispatchAction({type: 'CHANGE_LANGUAGE', payload: nextLanguage})}
                    >
                        {nextLanguage}
                    </button>
                    <button
                        onClick={() => dispatchAction({type: 'CHANGE_THEME', payload: nextTheme})}
                    >
                        {nextTheme}
                    </button>

                    <div className={"content "+theme}>
                        {
                            isInformationShown &&  (
                                <div>
                                    <h1>{author}</h1>
                                    <h1>{age}</h1>
                                </div>
                            )
                        }
                        {
                            isModalWindowShown &&  (
                                <div>
                                    <h1>Modal Window</h1>
                                    <h1>Text of modal window</h1>
                                </div>
                            )
                        }
                        {
                            isFetchShown &&  (
                                <div>
                                    { users.map((el) => <h3>{el.name}</h3>) }
                                </div>
                            )
                        }
                    </div>

                </div>

                <div class='wrapper'>
                    <div className='inner a1'>111</div>
                    <div className='inner a2'>222</div>
                    <div className='inner a3'>333</div>
                </div>

                <Footer />
            </>
    );
}