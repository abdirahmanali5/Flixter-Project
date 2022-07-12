import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ResponsiveAppBar from './Navbar'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignUp from './register';
import SignIn from './log-in';
import AppRouter from './AppRouter';
import Home from './Home'
import Navbar from './Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)


return (
  <div className="app">
    <BrowserRouter>
      <main>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/log-in" element={<SignUp />} />
   
      </Routes>
  
      </main>
    </BrowserRouter>
  </div>
)
    
       
   
     
  
}

export default App
