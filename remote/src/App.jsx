import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import "./index.css";
import {Counter} from "./Counter";

const App = () => {
  return (<div className="container">
    <div>Name: remote</div>
    <Counter />
  </div>);
};
ReactDOM.render(<App />, document.getElementById("app"));
