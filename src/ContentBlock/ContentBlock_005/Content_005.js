import React from "react";
import LogoBlock from "../../Elements/LogoBlock/logoBlock";
import logo001 from "../ContentBlock_005/img/1a.png";
import logo002 from "../ContentBlock_005/img/2a.svg";
import logo003 from "../ContentBlock_005/img/3a.svg";

export default class Content_005 extends React.Component{
    render(){
        return(
            <div className="content_005">
                <div className="colContBlock_005">
                    <LogoBlock />
                    <div className="rePosit_003">
                        <h5 className="fw600">+7 (999) 543-54-54</h5>
                        <h6>Мастерская</h6>
                    </div>
                </div>

                <div className="threeСolumnsBlock_005">
                    <div className="colContBlock_005">
                        <h5 className="lh30 fw600">Репродукции</h5>
                        <h5 className="lh30">Франция</h5>
                        <h5 className="lh30">Германия</h5>
                        <h5 className="lh30">Англия</h5>
                    </div>
                    <div className="colContBlock_005">
                        <h5 className="lh30 fw600">Новинки</h5>
                        <h5 className="lh30">2023</h5>
                        <h5 className="lh30">2024</h5>
                    </div>
                    <div className="colContBlock_005">
                        <h5 className="lh30 fw600">О нас</h5>
                        <h5 className="lh30">Художники</h5>
                        <h5>Менеджеры</h5>
                    </div>
                </div>

                <div className="colContBlock_005">
                    <div className="iconGroupContBlock_005">
                        <img className="firstIconContBlock_005" src={logo001}/>
                        <img className="firstIconContBlock_005" src={logo002}/>
                        <img className="firstIconContBlock_005" src={logo003}/>
                    </div>
                    <h5 className="lh30">Ink. House ®</h5>
                    <h5 className="lh30">All rights reserved</h5>
                </div>
            </div>
        
        )
    }
}