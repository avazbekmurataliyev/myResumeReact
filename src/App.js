import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Contact from './pages/contact/Contact';
import MyResume from './pages/myresume/MyResume';
import Error from './pages/Error';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      

      
      <Navbar />
      <div className="main-container">
      
      <Sidebar/>
      <Routes>
        <Route path="/" element={<MyResume />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element = {<Error/>} /> 
       </Routes>
        </div>   
    
      
      
    </div>
  );
}

export default App;
