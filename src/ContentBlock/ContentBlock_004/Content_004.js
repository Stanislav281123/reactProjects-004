import React from "react";
import image001 from "./img/Картина.png";
import image002 from "./img/Кисти.png";
import image003 from "./img/Ава_001.png";
import image004 from "./img/Ава_002.jpg";
import image005 from "./img/Ава_003.jpg";

export default class Content_004 extends React.Component{
    render(){
        return(
            <div className="content_004">
                <div className="imgArticleContBlock_004">
                    <img className="frameContBlock_004" src={image001}/>
                    <img className="brushesContBloxk_004" src={image002}/>
                </div>
                <div className="rightContBlock_004">
                    <h2>Наша команда</h2>
                    <div className="rePosit_001"><h6>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</h6></div>
                    <div className="botRightContBlock_004">
                        <img className="employeePhoto" src={image003}/>
                        <img className="employeePhoto" src={image004}/>
                        <img className="employeePhoto" src={image005}/>
                    </div>
                </div>
            </div>
        )
    }
}