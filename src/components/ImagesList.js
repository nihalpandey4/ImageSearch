import React from "react";
import Imagecard from "./Imagecard";

class ImageList extends React.Component {
  generateList = (image) => {
    return <Imagecard src={image.urls.full} alt={image.alt_description} key={image.alt_description} />;
  };

  loading = () => {
    return (
      <div className="ui active centered inline loader"></div>
    );
  };

  check = () => {
    console.log(this.props.images.length);
    if (this.props.images.length===0) {
      return this.loading();
    } else {
      return this.props.images.map(this.generateList);
    }
  };

  render() {
    return <div className="imageList">{this.check()}</div>;
  }
}

export default ImageList;
