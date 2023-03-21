import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type: type  
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);

  }
  const toggleMode=()=>{
    //  setMode(mode==='light'? 'dark' : 'light');
    //  document.body.style.backgroundColor= (mode==='light'? ' #003366' : 'white');
     if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#003366';
      showAlert("Dark Mode enabled", "success");
      document.title='TextUtils- Dark';
     }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode enabled", "success");
      document.title='TextUtils- Light';
     }
  }
  return (
  <Router>

    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    <Routes>

      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to be analyzed" mode={mode} />} />
    
      <Route exact path="about" element={<About />} />

    </Routes>

    </div>

  </Router>
  );
}

export default App;
