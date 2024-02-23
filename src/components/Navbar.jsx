import React from 'react'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// agin note to import
import "./Navbar.css"

import add from '../img/add.png'


import { storage } from './config';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import Login from './LoginPage';
import { Navigate } from 'react-router-dom';


function Navbar() {

  const [img,setImg]=useState(null)
  const filechange=(e)=>{
    setImg(e.target.files[0])
  }

  //-------user auth
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
      
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
      });

      return () => {
          unsubscribe();
      };
  }, []);

//------handleclick
  const Click = () => {
    if (user) {
        upload();
    } else {
        handleLogin();
    }
};


// -------Upload
  const upload =()=>{
    // console.log("Hello")
    
    if (img !==null){ 
      // console.log("null")
    // console.log("notnull")
    const imgRef =ref(storage,`files/${v4()}`)
    uploadBytes(imgRef,img).then(value=>{
      console.log(value)
      setImg(null)
      // signOut(auth)
      window.location.reload(); 
      signOut(auth)
    })
  }
  else console.log("null")
  }

  const navigate =useNavigate()
  //------login handle
  const handleLogin = () => {
    // Login logic

    navigate("/Login")
    console.log("Login")

};


  return (
    <div>
        <nav>
          <div className="logo">
            <a href='/' >
            <h1 >ImageBox</h1>
            </a>
          </div>
          <div className='choose-file'>
          <input className='fileInput' id='fileInput' type="file"  accept="image/*" multiple onChange={filechange} /> 
          <img src={add} className='select' id='select'/>
          </div>
          
          <div className='btn-div'>
          <button className="btn" onClick={Click}>{user ? 'Upload' : 'Login'}</button>
          </div>
        
        </nav>
        
    </div>
  )
}

export default Navbar