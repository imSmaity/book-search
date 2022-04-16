import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../router/Routing';

function Home() {
  const {userLogin,setUserLogin}=useContext(LoginContext)
  const navigate=useNavigate()

  const responseGoogle = (response) => {
    
    if(!response.error){
      const {name,email}=response.profileObj

      localStorage.setItem('_wyzr_books_',JSON.stringify({name,email}))
      setUserLogin(true)
      navigate('/search')
    }
  }
  return (
    <div className='p-2'>
      {
        !userLogin&&
        <GoogleLogin
            clientId="372899961816-tilqvb4lb9n7i7ghtedi58lb0orcd7cl.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
      }
    </div>
  )
}

export default Home