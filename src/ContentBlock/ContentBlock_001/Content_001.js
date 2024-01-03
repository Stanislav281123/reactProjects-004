import React from "react";
import image001 from "./img/image001.png";

export default class Content_001 extends React.Component{
    render(){
        return(
            <div className="content_001">
                <div><img className="firstImageCont_001" src={image001}/></div>
                <div className="rightContent_001">
                    <h1>Реплики картин от <span className="greenText">Inc. House</span></h1>
                    <h6 className="grayText">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</h6>
                    <button className="butContent_001 greenBut">Продукция</button>
                </div>
            </div>
        )
    }
}