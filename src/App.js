import './App.css';
import React from 'react'; 
import MainComponent from '../src/component/MainComponent';
import { BrowserRouter } from 'react-router-dom';


let App=()=>{
  return (
  <BrowserRouter>
  <MainComponent />
  </BrowserRouter>
  );
}


export default App;

