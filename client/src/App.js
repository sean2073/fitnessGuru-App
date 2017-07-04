import React, { Component } from 'react';
import {Router, Route} from 'react-router';



class App extends Component {
  render() {
    return (
    <div className="App">
    	<div className="container">
    		<div className="row">
         {this.props.children}      
      	</div>
      	</div>
     </div>
    );
  }
}

export default App;
