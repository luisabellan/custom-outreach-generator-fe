import React from 'react'
import { login } from '../auth/basicAuth';

const Login = ({
    setIsAuthenticatedState,
    keyPhrase,
    setKeyPhrase
}) => {

    const handleLogin = (event) => {
        event.preventDefault();
    
        if (login(keyPhrase)) {
          setIsAuthenticatedState(true);
        } else {
          alert("Invalid key phrase");
        }
    };
    
    const handleKeyPhraseChange = (event) => {
        setKeyPhrase(event.target.value);
    };

  return (
    <form onSubmit={handleLogin} className='login-container'>
        <input
            className='input'
            type="text"
            name="password"
            placeholder="Password"
            value={keyPhrase}
            onChange={handleKeyPhraseChange}
        />
    <button type="submit" className='button'>Login</button>
  </form>
  )
}

export default Login