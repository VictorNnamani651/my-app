import React,{ useState } from "react";
import Inputs from "./R-input";

export default function Calculator2(){
    const [firstNum,setFirstNum] = useState(0);
    const [secondNum,setSecondNum] = useState(0);

    return (
  <div className="dialogholder">
    <div className="dialog-box">
      <div className="inputValues">
        <Inputs c2Initial={firstNum} c2Set={setFirstNum}/>
        <i className="fa fa-plus" aria-hidden="true"></i>
        <Inputs c2Initial={secondNum} c2Set={setSecondNum}/>
      </div>
      <div className="total">
        <p className="tvalue">
        {Number(firstNum) + Number(secondNum)}
        </p>
      </div>
    </div>
  </div>
    )

}