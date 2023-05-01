import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/screens/Registration";
import Landing from "./components/screens/Landing";
import Login from "./components/screens/Login";
import { useState } from 'react';
import ItemForm from './components/layout/ItemForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


//TODO: add either hooks or booleans to show or hide certain components based on button clicked JY 
function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLanding, setShowLanding] = useState(true)

  function handleLogin() {
    setShowLogin(true);
    setShowRegistration(false);
    setShowLanding(false);
  }

  function handleCreateAccount() {
    setShowRegistration(true);
    setShowLogin(false);
    setShowLanding(false);

  }
  return (
      <div>
        { showLanding && <Landing handleCreateAccount= { handleCreateAccount} handleLogin={ handleLogin} /> }
        { showRegistration && <Registration /> }
        { showLogin && <Login/> }
      </div>
    );
}


export default App;

