import React, { Component } from 'react';
import {Form, Field} from 'simple-react-forms';

class Login extends Component {
  render() {
    return (
        <div className="Create col-sm-12 col-md-6 col-lg-6">
       <h1>Create Your Profile</h1>
       <h3>And begin your journey to heathier life today</h3>
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
      </div>
    );
  }
}

export default Login;
