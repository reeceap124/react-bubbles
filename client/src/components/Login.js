import React, {useState} from "react";
import {axiosAuth} from '../utils/axiosAuth'

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [creds, setCreds] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosAuth()
      .post('/login', creds)
      .then(res => {
        console.log('login res', res)
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => console.log('login err', err))
      .finally(()=>{
        return(
          setIsLoading(false),
          setCreds({
            username: '',
            password: ''
          })
        )
      })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
            <form onSubmit={login}>
                <input type='text' name='username' placeholder='Username' onChange={handleChange} value={creds.username}/>
                <input type='password' name='password' placeholder='Password' onChange={handleChange} value={creds.password}/>
                <button disabled={isLoading} type='submit'>{isLoading ? 'Loading...' : 'Login'}</button>
            </form>
        </div>
    </>
  );
};

export default Login;
