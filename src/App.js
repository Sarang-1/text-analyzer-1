import './App.css';
import React, { useState } from 'react'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(25 34 44)';
      showAlert('Dark mode enabled!','success');
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled!','success');
    }
  }
    
  return (
    
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} /> 
      <Alert alert={alert}/>
      <div className="container">
        <TextForm mode={mode} alert={showAlert} />  
      </div> 
     
    </div>
  );
}

export default App;
