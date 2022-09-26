import React from "react";
import { useState } from "react";


export function Calculator() {

  let [first,updateFirst] = useState(0);
  let [second,updateSecond] = useState(0);
  
  return (
  <div className="dialogholder">
    <div className="dialog-box">
      <div className="inputValues">
        <input type="text" id="first" value={first} onChange={(evt) => {updateFirst(evt.target.value)}}/>
        <i className="fa fa-plus" aria-hidden="true"></i>
        <input type="text" id="first" value={second} onChange={(evt) => {updateSecond(evt.target.value)}}/>
      </div>
      <div className="total">
        <p className="tvalue">
        {Number(first) + Number(second)}
        </p>
      </div>
    </div>
  </div>
  );
}
