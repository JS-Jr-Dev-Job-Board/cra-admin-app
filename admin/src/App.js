import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import Signin from "./components/Signin/Signin";
import "./App.css";
import Profile from "./components/Profile";
import EndpointPage from "./components/EndpointPage/EndpointPage";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Central Nervous System</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/endpointPage">Endpoint Page</NavLink>
      </nav>
      <Profile />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/signin" component={Signin} />
        <Route path="/endpointPage" component={EndpointPage} />
      </Switch>
    </div>
  );
}

export default App;
