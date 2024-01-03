import React from "react";

export default class BlockType_001 extends React.Component{
    render(){
        return(
            <div className="blockType_001">
                <img className="imgTypeBlock_001" src={this.props.image}/>
                <h6 className="autorFullName grayText">{this.props.fullName}</h6>
                <h3 className="title">{this.props.title}</h3>
                <h6 className="inform">{this.props.inform}</h6>
                <h4 className="price greenText">{this.props.price}</h4>
                <button className="butBlockType_001 greenBut">В корзину</button>
            </div>
        )
    }
}