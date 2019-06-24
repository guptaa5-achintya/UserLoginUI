import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"
import Login from "./Login"
import Home from "./Home"
import ForgotPassword from "./ForgotPassword"

function App() {
  return (
    <div>
      <Router>
        <Route exact path = "/" component = {Login}/>
        <ProtectedRoute path = "/home" component = {Home}/>
        <Route path = "/forgot-password" component = {ForgotPassword}/>
      </Router>
    </div>
  );
}

export default App;
