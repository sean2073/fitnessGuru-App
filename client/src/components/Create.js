import React, { Component } from 'react';
import {Form, Field} from 'simple-react-forms';
import { postData } from './utility/helpers.js';
import { Link } from 'react-router-dom';


class Create extends Component {

  onClickHandler () {
   
      const username = this.refs['simpleForm'].getFormValues().username;
      const password = this.refs['simpleForm'].getFormValues().password;
       
      postData(username,password);



      }

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
      <button onClick={this.onClickHandler.bind(this)} className="search btn btn-warning"><Link to="/success">Submish</Link></button>
      <p>Already have an account? Login <Link to="/login">Here</Link></p>
      </div>
    );
  }
}

export default Create;
