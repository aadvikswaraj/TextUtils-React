import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { Routes, Route } from "react-router-dom";
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const [isDarkMode, setisDarkMode] = useState(false);
  function showAlert(type, msg) {
    // Setting Alert
    setAlert({
      type: type,
      msg: msg
    });
    // Dismissing Alert
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  function toggleDarkMode() {
    // Disabling Dark Mode
    if (isDarkMode) {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'initial';
    }
    // Enabling Dark Mode
    else{
      document.body.style.backgroundColor = '#011632';
      document.body.style.color = 'white';
    };
    // Changing isDarkMode Satate
    setisDarkMode(!isDarkMode);
  };
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} isDarkMode={isDarkMode}/>} />
        <Route exact path="/about" element={<About isDarkMode={isDarkMode}/>} />
      </Routes>
    </>
  );
}

export default App;