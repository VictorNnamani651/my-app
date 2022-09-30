import React,{useState} from "react";

export default function Dropdown(props){
    const [display,updateDisplay] = useState(false);
    function update(){
        updateDisplay(!display);
    }
    return(
        <div className="account clickable">
            <div className="nav-btn" onClick={update}>
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