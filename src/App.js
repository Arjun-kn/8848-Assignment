
import './style.scss';
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import './App.css';


import Login from './components/Login';
import List from './components/List';
// import Updated from './components/Updated';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/user" element={<List/>} />
  {/* <Route path="/update/:username" element={<Updated/>} /> */}
 </Routes>
 </BrowserRouter>
  );
}

export default App;
