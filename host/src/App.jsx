import React, {useState} from "react";
import ReactDOM from "react-dom";

import {Counter} from 'remote/Counter';
import "./index.css";
import {publish} from "./services/dataBus";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  const handlePublish = () => {
    publish('sendData', { text, counter });
  }

  const getCounter = (count) => {
    setCounter(count);
  }

  return (
    <div className="container">
      <div>Name: host</div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={handlePublish}>send data to data bus</button>
      <Counter getCount={getCounter}/>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
