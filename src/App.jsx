import React from 'react';
import { Router, Route, Routes} from 'react-router-dom';

import "./App.css";
import Navbar from "./components/Navbar"
import { Gallery } from './components/Gallery';
import LoginPage from './components/LoginPage';
import Login from './components/Login';
import ABC from './components/ABC'


function App() {
  return (
    
      <div>
        {/* <Router>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/">
                      <abc/>
                      {/* <Navbar/>
                      <Gallery/> 
                    </Route>
        </Router> */}
         <Routes>
                    <Route path='/' element={<>
                    <div className='contain'>
                      
                       <Navbar/>
                       
                       <Gallery/>
                    </div>
                    
                       </>} />
                    <Route path="/Login" element={<LoginPage/>} />

        </Routes>
        {/* <ABC/> */}
      </div>
    
  )
}

export default App

