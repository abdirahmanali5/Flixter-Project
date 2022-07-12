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
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar';
export default function Home() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <>
      
       {/* <SignIn></SignIn>  */}

      <CssBaseline />
      <Container maxWidth={false} sx={{ bgcolor: '#cfe8fc', height: '100vh', flexGrow: 1 }}>
        ello


      {/* <Box  /> */}
      </Container>
      </>
      </div> )}
