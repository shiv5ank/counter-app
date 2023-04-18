import React from "react";
import myStore from "../Redux/Store";
import { useSelector } from "react-redux";
import "./Counter.css";

function Counter() {
  const inc = () => {
    myStore.dispatch({
      type: "increment",
    });
  };
  const dec = () => {
    myStore.dispatch({
      type: "decrement",
    });
  };
  const res = () => {
    myStore.dispatch({
      type: "reset",
    });
  };

  const display = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div className="main">
      <h1>Counter App</h1>

      <div className="mainContainer" style={{ margin: "20px auto" }}>
        <h2>{display}</h2>
        <div className="btn_container">
          <button onClick={inc}>Increment</button>
          <button onClick={dec}>Decrement</button>
          <button onClick={res}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
