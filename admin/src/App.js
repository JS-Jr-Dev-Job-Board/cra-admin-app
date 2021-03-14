import React from "react";
import { Route, NavLink } from "react-router-dom";

import Signin from "./components/Signin/Signin";
import "./App.css";
// import LoginBtn from "./components/OaLogic/LoginBtn";
// import LogoutBtn from "./components/OaLogic/LogoutBtn";
import Profile from "./components/Profile";
import EndpointPage from "./components/EndpointPage/EndpointPage";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/endpointPage">Endpoint Page</NavLink>
      </nav>
      <h1>Welcome to the Central Nervous System</h1>
      {/* <LoginBtn /> */}
      {/* <LogoutBtn /> */}
      <Profile />
      <Route path="/signin" component={Signin} />
      <Route path="/endpointPage" component={EndpointPage} />
    </div>
  );
}

export default App;
