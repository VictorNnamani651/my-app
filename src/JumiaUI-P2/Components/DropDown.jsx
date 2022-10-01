import React,{useState} from "react";

export default function Dropdown(props){
    const [display,updateDisplay] = useState(false);
    function update(){
        updateDisplay(!display);
    }
    return(
        <div className={props.classname}>
            <div id={props.buttonID} onClick={update}>
                <i className= {props.iconClass1}></i>
                <p className="tSection">{props.buttonName}</p>
                <i className={props.iconClass2}></i>
            </div>
                <div className={display? "drop-down": "drop-down hide"}>
                    <div className="content">
                       {props.children}
                    </div>
                </div>
            </div>
    )
}