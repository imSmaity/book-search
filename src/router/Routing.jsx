import React, { useState } from 'react'
import { createContext } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Header from '../components/Header';
import {Home, Search, Details} from '../pages/index'

export const LoginContext=createContext()

function Routing() {
  const [userLogin,setUserLogin]=useState(localStorage.getItem('_wyzr_books_')!==null)

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{userLogin,setUserLogin}}>
        <Header/>
        <Routes>
            <Route>
                <Route path='/' element={<Home/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/book/:id' element={<Details/>}/>
            </Route>
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  )
}

export default Routing