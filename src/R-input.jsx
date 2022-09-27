import React from "react";

export default function Inputs({ c2Initial,c2Set }){
    return (
        <input value={c2Initial} onChange={(evt)=>{c2Set(evt.target.value)}}/>
    )
}