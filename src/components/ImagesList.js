import React from "react";
import Imagecard from './Imagecard';

class ImageList extends React.Component{

  generateList=(image)=>{
    return <Imagecard src={image.urls.small} />
  }

  render(){
    return <div className="imageList" >{this.props.images.map(this.generateList)}</div>;
  }
}

export default ImageList;
