import React from "react";

import './App.css';
import PageFrame from "./Components/PageFrame";





function App(props) {
  return (
    <div className="App">
        <PageFrame image={props.image} page="App"/>
    </div>
  );
}

export default App;
