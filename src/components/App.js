import React from "react";
import unsplash from "../apiRequest/unsplash";
import Searchbar from "./Searchbar";
import ImagesList from "./ImagesList";
import "./components.css";

class App extends React.Component{

  state={images:[]};

  onSearch= async (term) =>{
    const response=await unsplash(term);
    this.setState({images:response});
  }

  render(){
    return (
      <div className="ui container">
        <Searchbar onSubmittingData={this.onSearch} />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}


export default App
