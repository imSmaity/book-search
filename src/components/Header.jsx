import React from 'react'
import { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../router/Routing';

export default function Header() {
    const {userLogin,setUserLogin}=useContext(LoginContext)
    const navigate=useNavigate()

    function logout(){
        localStorage.removeItem('_wyzr_books_')
        navigate('/')
        setUserLogin(false)
    }
    return (
        <div className='p-2'>
            {
                userLogin&&
                <GoogleLogout
                    clientId="372899961816-tilqvb4lb9n7i7ghtedi58lb0orcd7cl.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                >
                </GoogleLogout>
            }
            
        </div>
    )
}
