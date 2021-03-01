import React from "react";
import {Route} from 'react-router-dom';

import "./App.css";
import LoginBtn from "./components/OaLogic/LoginBtn";
import LogoutBtn from "./components/OaLogic/LogoutBtn";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Signin from "./components/Signin/Signin";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>;
  return (
    <div className="App">
      <h1>Welcome to the Central Nervous System</h1>
      <LoginBtn />
      <LogoutBtn />
      <Profile />
      <Route path='/signin' component={Signin}/>
    </div>
  );
}

export default App;
