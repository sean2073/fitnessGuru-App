import React, { Component } from 'react';
import {Form, Field} from 'simple-react-forms';

class Login extends Component {
  render() {
    return (
    <div className="Create col-sm-12 col-md-6 col-lg-6">
       <h1>LOgiN</h1>
         <Form ref='simpleForm'>

          <Field 
            name='username'
            label='User Name'
            type='text'
          />
          <Field
            name='password'
            label='Create Password'
            type='text'
          />
  
      </Form>   
      <button onClick={this.onClickHandler.bind(this)} className="search btn btn-warning"><Link to="/success">Submish</Link></button>
      </div>
    );
  }
}

export default Login;