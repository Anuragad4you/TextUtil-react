
import { useState } from 'react';
import './App.css';
import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route            
  
// } from "react-router-dom";  

// import About from './components/About';

import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import Alert from './components/Alert';




function App() {

   const [mode,setMode]=useState('light');
   const [alert,setAlert]=useState(null);

   const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)

   }

   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray';
      showAlert("dark mode has been enabled","success");
    }
    else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode has been enabled","success");
        
    }
   }




  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    <div className= {`container my-3 text-${mode==='light'?'dark':'light'}`}>

    {/* <Routes> */}
    {/* <Route exact path="/about" element={<About/>} > </Route> */}

     <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
    {/* </Routes> */}


     
    
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
