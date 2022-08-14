
import React, {useState,useEffect,useLayoutEffect, FC} from "react";
import {connect,useSelector,useDispatch} from "react-redux";

import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";
import "./Textpage.css";

type T={author:string, age:number};
type stateType={language:string, theme:string};

type arr = Array<string>;
type obj = {
    a:number,
    b:string,
}

export const TestpageTS: React.FC<T> = ({
                             author,
                             age
                         })  => {

    let aaa:arr=[];

    aaa.push("erte");

    let [isInformationShown, setInformationShown ] = useState <boolean | number>(false);
    let [isModalWindowShown, setModalWindowShown ] = useState(false);
    let [counter, setCounter ] = useState(0);
    let [isFetchShown, setFetchShown ] = useState(false);
    let [users, setUsers ] = useState([]);

    let language = useSelector((state: stateType) => state.language);
    let theme = useSelector((state: stateType) => state.theme);
    let dispatchAction = useDispatch();

    let nextLanguage = language === 'en' ? 'uk' : 'en';
    let nextTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        document.title = counter.toString();
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
                                { users.map((el:{name:string}) => <h3>{el.name}</h3>) }
                            </div>
                        )
                    }
                </div>

            </div>

            <div className='wrapper'>
                <div className='inner a1'>111</div>
                <div className='inner a2'>222</div>
                <div className='inner a3'>333</div>
            </div>

            <Footer />
        </>
    );
}