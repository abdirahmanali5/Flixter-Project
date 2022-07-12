import SignUp from './register';
import SignIn from './log-in';
import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"

export default function AppRouter() {
    return  (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/log-in" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      


    )


}