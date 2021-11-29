import logo from './logo.svg';

import './App.css';
import PageFrame from "./Components/PageFrame";
import {Route, Routes} from "react-router-dom";
import Careers from "./Pages/Careers/Careers";
import React from "react";


function App(props) {
  return (
    <div className="App">

        <PageFrame image={props.image}/>
    </div>
  );
}

export default App;
