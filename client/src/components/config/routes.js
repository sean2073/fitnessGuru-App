import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


import Main from '../Main.js';
import Create from '../Create.js';
import Login from '../Login.js';
import Personal from '../Personal.js';
import success from '../success.js';


const dorahRoutes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Create}/>
        <Route path="/success" component={success}/>
        <Route path="/login" component={Login}/>
        <Route path="/main" component={Main}/>
      </Switch>
  </Router>
 );

export default dorahRoutes;