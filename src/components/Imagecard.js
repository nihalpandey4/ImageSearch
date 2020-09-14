import React from "react";

class Imagecard extends React.Component{

  state={span:"span 0"};

  constructor(props){
    super(props);

    this.imageRef=React.createRef();
  }

  componentDidMount=()=>{
    this.imageRef.current.addEventListener("load",this.setSpans);
  }

  setSpans = () =>{
    const height=this.imageRef.current.clientHeight;
    const spans=Math.ceil(height/10)+2;
    this.setState({span:"span "+spans});
    console.log("height = "+height +" spans= "+spans+"    statevalue = "+this.state.span );
  }

  render(){
    return <div style={{gridRowEnd : this.state.span}}><img ref={this.imageRef} src={this.props.src}  /></div>;
  }
}

export default Imagecard
