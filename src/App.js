
import { useState } from 'react';
import './App.css';
import About from './componet/About';
import Navbar from './componet/Navbar';
import TextFrom from './componet/TextFrom';
import Alert from './componet/Alert';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },2000);
  }

  const toggle = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Has Been Enable", "success");
      // document.title("TextUtil - Drak Mode");
    }else{
      setMode('light'); 
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enable", "success");
      // document.title("TextUtil - light Mode");
    }
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUnits" mode={mode} toggle={toggle} about="About"/>
      {/* <Navbar title="TextUnits" about="About"/> */}
      <Alert alert={alert}/>

      <div className="container my-3">

      <Routes>
          <Route index element={<TextFrom showAlert={showAlert} heading= "Enter The Text" mode={mode} />}/>
          <Route path="/about" element={<About/>} />
      </Routes>

      </div>
      </BrowserRouter>
    </>
  );  
}

export default App;
