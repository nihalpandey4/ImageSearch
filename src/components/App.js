import React from "react";
import unsplash from "../apiRequest/unsplash";
import Searchbar from "./Searchbar";
import ImagesList from "./ImagesList";
import Loader from "./Loader";
import "./components.css";

class App extends React.Component{

  state={images:[]};

  onSearch= async (term) =>{
    const response=await unsplash(term);
    this.setState({images:response});
  }

  renderResults=()=>{
    if(this.state.images.length>0){
      return <ImagesList images={this.state.images} />;
    }
    else{
      return <Loader />
    }
  }

  render(){
    return (
      <div className="ui container">
        <Searchbar onSubmittingData={this.onSearch} />
        {this.renderResults()}
      </div>
    );
  }
}


export default App
