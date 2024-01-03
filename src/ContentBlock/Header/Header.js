import React from "react";
import LogoBlock from "../../Elements/LogoBlock/logoBlock";
import image002 from "./img/Cart001.png"

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="headerLeft">
                    <LogoBlock />
                </div>
                <div className="headerRight">
                    <h5>Репродукции</h5>
                    <h5>Новинки</h5>
                    <h5>О нас</h5>
                    <img className="headerImage002" src={image002}/>
                </div>
            </header>
        )
    }
}