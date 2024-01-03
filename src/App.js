import React from "react";
import Header from "./ContentBlock/Header/Header";
import Content_001 from "./ContentBlock/ContentBlock_001/Content_001";
import Content_002 from "./ContentBlock/ContentBlock_002/Content_002";
import Content_003 from "./ContentBlock/ContentBlock_003/Content_003";
import Content_004 from "./ContentBlock/ContentBlock_004/Content_004";
import Content_005 from "./ContentBlock/ContentBlock_005/Content_005";

export default class App extends React.Component{
  render(){
    return(
      <body>
        <Header />
        <Content_001 />
        <Content_002 />
        <Content_003 />
        <Content_004 />
        <Content_005 />
        
        <div className="sss"></div>
      </body>
    )
  }
}