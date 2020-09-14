import React from 'react';

class Searchbar extends React.Component{
  //for controlled event handler
  state={term:""};

  onSubmitChange=(event)=>{
    event.preventDefault();
    this.props.onSubmittingData(this.state.term);
  }

  render(){
    return(
      <div className="SearchBox" >
        <form onSubmit={this.onSubmitChange}>
          <div className="ui massive icon input">
            <input
              type="text"
              placeholder="Search ..."
              value={this.state.term}
              onChange={(e)=>this.setState({term:e.target.value})} />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
