import React, { useState } from "react";
import BlockType_001 from "../../Elements/BlockType_001/BlockType_001";

import image001 from "./img/Охота_Амура.jpg";
import image002 from "./img/Дама_с_собачкой.jpg";
import image003 from "./img/Процедура.jpg";
import image004 from "./img/Роза.jpg";
import image005 from "./img/Птичья_трапеза.jpg";
import image006 from "./img/Пейзаж_с_рыбой.jpg";

import image007 from "./img/Над_городом.jpg";
import image008 from "./img/Птенцы.jpg";
import image009 from "./img/Среди_листьев.jpg";
import image010 from "./img/Яркая_птица.jpg";
import image011 from "./img/Дятлы.jpg";
import image012 from "./img/Большие_воды.jpg";

import image013 from "./img/Дикий_зверь.jpg";
import image014 from "./img/Скалистый_берег.jpg";
import image015 from "./img/Река_и_горы.jpg";
import image016 from "./img/Белый_попугай.jpg";
import image017 from "./img/Ночная_рыба.jpg";
import image018 from "./img/Рыжий_кот.jpg";

export default function Content_002() {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id){
        setToggle(id)
    }
    return(
        <div className="content_002">
            <div className="topCont_002">
                <h2>Репродукции</h2>
                <div className="rightTopCont_002">
                    <button className="butTopCont_002" onClick={()=>updateToggle(1)}><h5>Франция</h5></button>
                    <button className="butTopCont_002" onClick={()=>updateToggle(2)}><h5>Германия</h5></button>
                    <button className="butTopCont_002" onClick={()=>updateToggle(3)}><h5>Англия</h5></button>
                </div>
            </div>
            <div className="wrapBotBlockCont_002">
                <div className={toggle === 1 ? "visible" : "NationBlock"}>        
                    <div className="positBlockCont_002">
                        <BlockType_001 image={image001} fullName={"Марсель Руссо"} title={"Охота Амура"} inform={"Холст масло (50х80)"} price={"14 500 руб"}/>
                        <BlockType_001 image={image002} fullName={"Анри Селин"} title={"Дама с собачкой"} inform={"Акрил бумага (50х80)"} price={"16 500 руб"} />
                        <BlockType_001 image={image003} fullName={"Франсуа Дюпон"} title={"Процедура"} inform={"Цветная литография (40х60)"} price={"20 000 руб"} />
                    </div>
                    <div className="positBlockCont_002">
                        <BlockType_001 image={image004} fullName={"Луи детуш"} title={"Роза"} inform={"Бумага акрил (50х80)"} price={"12 000 руб"} />
                        <BlockType_001 image={image005} fullName={"Франсуа Дюпон"} title={"Птичья трапеза"} inform={"Цветная литография (40х60)"} price={"22 500 руб"} />
                        <BlockType_001 image={image006} fullName={"Пьер Моранж"} title={"Пейзаж с рыбой"} inform={"Цветная литография (40х60)"} price={"20 000 руб"} />
                    </div>
                </div>

                <div className={toggle === 2 ? "visible" : "NationBlock"}>
                    <div className="positBlockCont_002">
                        <BlockType_001 image={image007} fullName={"Курт Веннер"} title={"Над городом"} inform={"Цветная литография (50х80)"} price={"16 000 руб"} />
                        <BlockType_001 image={image008} fullName={"Макс Рихтер"} title={"Птенцы"} inform={"Холст, масло (50х80)"} price={"14 500 руб"} />
                        <BlockType_001 image={image009} fullName={"Мартин Майер"} title={"Среди листьев"} inform={"Цветная литография (40х60)"} price={""} />
                    </div>
                    <div className="positBlockCont_002">
                        <BlockType_001 image={image010} fullName={"Герман Беккер"} title={"Яркая птица"} inform={"Цветная литография (40х60)"} price={"14 000 руб"} />
                        <BlockType_001 image={image011} fullName={"Вульф Бауэр"} title={"Дятлы"} inform={"Бумага акрил (50х80)"} price={"20 000 руб"} />
                        <BlockType_001 image={image012} fullName={"Вальтер Хартман"} title={"Большие Воды"} inform={"Бумага акрил (50х80)"} price={"23 000 руб"} />
                    </div>
                </div>

                <div className={toggle === 3 ? "visible" : "NationBlock"}>
                    <div className="positBlockCont_002">
                        <BlockType_001 image={image013} fullName={"Пол Смит"} title={"Дикий Зверь"} inform={"Акварель Бумага (50х80)"} price={"19 500 руб"} />
                        <BlockType_001 image={image014} fullName={"Джон Уайт"} title={"Скалистый берег"} inform={"Цветная литография (40х60)"} price={"17 500 руб"} />
                        <BlockType_001 image={image015} fullName={"Джим Уотсон"} title={"Река и горы"} inform={"Акварель бумага (50х80)"} price={"20 500 руб"} />
                    </div>
                    <div className="positBlockCont_002">
                        <BlockType_001 image={image016} fullName={"Юджин Зилион"} title={"Белый попугайы"} inform={"Цветная литография (40х60)"} price={"15 500 руб"} />
                        <BlockType_001 image={image017} fullName={"Эрик Гилман"} title={"Ночная рыба"} inform={"Бумага акрил (50х80)"} price={"12 500 руб"} />
                        <BlockType_001 image={image018} fullName={"Альфред Барр"} title={"Рыжий кот"} inform={"Цветная литография (40х60)"} price={"21 000 руб"} />
                    </div>
                </div>
            </div>
        </div>
    )
    
}