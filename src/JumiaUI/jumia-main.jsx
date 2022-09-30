import React from "react";
import imgPath from "./images/Tcl-top-strip.gif"

export function JumiaLanding(){
    return(
        <div className="main-body">

            <div className="firstSection">
                <img src={imgPath} alt=""/>
            </div>

            <div className="secondSection">
                <div className="firstHalf">
                    <p><i class="fa fa-star"></i></p>
                    <p>Sell On Jumia</p>
                </div>
                <div className="secondHalf">
                    <ul className="secondHalf-ul">
                        <li>Jumia</li>
                        <li>Pay</li>
                        <li>Food</li>
                        <li>Party</li>
                        <li>Prime</li>
                        <li>Logistics</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}