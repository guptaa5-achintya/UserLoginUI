import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"
import Login from "./Login"
import Subscriptions from "./Subscriptions"
import ForgotPassword from "./ForgotPassword"

class App extends React.Component {

  render(){
    return (
      <div>
        <Router>
            <Switch>
              <Route path = "/login" component = {Login}/>
              <ProtectedRoute exact path = "/" component = {Subscriptions}/>
              <Route path = "/forgot-password" component = {ForgotPassword}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
