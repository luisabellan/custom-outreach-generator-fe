import React from 'react'
import { login } from '../auth/basicAuth';
import stacked_logo from '../assets/BIT_Logo_Stacked_White.png';

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
    <>
    <div className='login-header'>
      <img src={stacked_logo} alt="BIT Logo" />
    </div>
      <div className='login'>
        <h2>Custom Outreach Generator</h2>
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
      </div>
    </>
  )
}

export default Login