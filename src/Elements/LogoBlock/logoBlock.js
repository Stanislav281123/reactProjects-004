import React from "react";
import logo from "./img/Star001.png";

export default class LogoBlock extends React.Component{
    render(){
        return(
            <div className="logoBlock">
                <img className="logo" src={logo}/>
                <h5 className="greenText">Ink, House</h5>
            </div>
        )
    }
}