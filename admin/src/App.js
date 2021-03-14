import React from "react";
import {Route} from 'react-router-dom';

import Signin from "./components/Signin/Signin";
import './App.css';
import LoginBtn from './components/OaLogic/LoginBtn'
import LogoutBtn from './components/OaLogic/LogoutBtn'
import Profile from './components/Profile';
import EndpointPage from './components/EndpointPage/EndpointPage';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Central Nervous System</h1>
      <LoginBtn />
      <LogoutBtn />
      <Profile />
      <Route path='/signin' component={Signin}/>
      <EndpointPage/>
    </div>
  );
}

export default App;
