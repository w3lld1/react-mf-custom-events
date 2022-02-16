import React, {useEffect, useState} from "react";
import {subscribe, unsubscribe} from "./services/dataBus";

export function Counter({ getCount = () => {} }) {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);
  console.log('received data', data);

  const handleChangeCounter = () => {
    const currentCounter = counter + 1;
    setCounter(currentCounter);
    getCount(currentCounter);
  }

  const handleGetValue = (e) => {
    console.log(e)
    setData(e.detail);
  }

  useEffect(() => {
    subscribe('sendData', handleGetValue);

    return () => {
      unsubscribe('sendData', handleGetValue);
    }
  }, []);

  return (
    <div>
        <div>Counter: {counter}</div>
        <button onClick={handleChangeCounter}>Add to counter</button>
    </div>
  )
}