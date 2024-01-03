import React from "react";
import bgImage from "./img/bgContBlock_003.png";
import bgMask from "./img/maskContBlock_003.png"
import icon from "./img/Star.png"

export default class ContentBlock_003 extends React.Component{
    render(){
        return(
            <div className="content_003">
                <img className="bgContBlock_003" src={bgImage}/>
                <img className="bgMaskContBlock_003"src={bgMask}/>
                <div className="gradientContBlock_003"/>
                <div className="firstContBlock_003">
                    <div className="topContBlock_003">
                        <img className="iconContBlock_003" src={icon}/>
                        <h2>Новая коллекция французких авторов</h2>
                    </div>
                    <h6 className="mB20">Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</h6>
                    <h6 className="mB30">Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</h6>
                    <button className="butContBlock_003">Ознакомиться</button>
                </div>
            </div>
        )
    }
}