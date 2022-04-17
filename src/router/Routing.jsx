import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
  } from "react-router-dom";
import Header from '../components/Header';
import {Home, Search, Details} from '../pages/index'

export const LoginContext=createContext()

function Redirect({to}){
  const navigate=useNavigate()
  useEffect(()=>{
    navigate(to)
  })
  return null;
}

function Routing() {
  const [userLogin,setUserLogin]=useState(localStorage.getItem('_wyzr_books_')!==null)

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{userLogin,setUserLogin}}>
        <Header/>
        <Routes>
            <Route>
                <Route path='/' element={!userLogin?<Home/>:<Redirect to={'/search'}/>}/>
                <Route path='/search' element={userLogin?<Search/>:<Redirect to={'/'}/>}/>
                <Route path='/book/:id' element={userLogin?<Details/>:<Redirect to={'/'}/>}/>
            </Route>
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  )
}

export default Routing