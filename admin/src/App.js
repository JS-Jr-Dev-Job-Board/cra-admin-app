import LoginBtn from './components/OaLogic/LoginBtn'
import LogoutBtn from './components/OaLogic/LogoutBtn'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to the Central Nervous System
      </h1>
      <LoginBtn />
      <LogoutBtn />
    </div>
  );
}

export default App;
