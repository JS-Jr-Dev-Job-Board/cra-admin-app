import React from 'react'

import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import LoginBtn from './components/OaLogic/LoginBtn'
import LogoutBtn from './components/OaLogic/LogoutBtn'
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';



function App() {
  const { isLoading } = useAuth0()

  if (isLoading) return <div>Loading ...</div>
  return (
    <div className="App">
      <h1>
        Welcome to the Central Nervous System
      </h1>
      <LoginBtn />
      <LogoutBtn />
      <Dashboard />
      <Profile />

    </div>
  );
}

export default App;
