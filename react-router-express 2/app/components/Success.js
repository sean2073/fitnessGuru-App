import React, { Component } from 'react';
import {Form, Field} from 'simple-react-forms';
import { postData } from './utility/helpers.js';
import { Link } from 'react-router-dom';

class Success extends Component {
  render() {
    return (
      <div className="success">
      	<p>Success</p> 
        <button onClick={this.onClickHandler.bind(this)} className="search btn btn-warning"><Link to="/success">Submish</Link></button>
        <p>Already have an account? Login <Link to="/login">Here</Link></p>
      </div>
      
    );
  }
}

export default Success; 