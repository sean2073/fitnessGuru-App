import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// Reference the high-level components
var Profile = require("../components/Profile");
var Dashboard = require("../components/App");
var Goals = require("../components/Goals");
var Info = require("../components/Info");
var Login = require("../components/Login");
var Create = require("../components/Create");
var Success = require("../components/Success");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Create}>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="dashboard" component={Dashboard} />
      <Route path="goals" component={Goals} />
      <Route path="Login" component={Login} />
      <Route path="goals" component={Goals} />
      <Route path="profile" component={Profile} />
      <Route path="Success" component={Success} />
      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Info} />

    </Route>
  </Router>
);
