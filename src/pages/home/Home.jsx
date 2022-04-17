import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import { LoginContext } from '../../router/Routing';

function Home() {
  const {userLogin,setUserLogin}=useContext(LoginContext)

  const responseGoogle = (response) => {
    
    if(!response.error){
      const {name,email}=response.profileObj

      localStorage.setItem('_wyzr_books_',JSON.stringify({name,email}))
      setUserLogin(true)
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