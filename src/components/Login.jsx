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
      <div className='login-container'>
        <div className='login-heading'>
          <h2>Custom Outreach Generator</h2>
          <p>By leveraging the capabilities of OpenAI's GPT-3.5 Turbo, the app generates a unique and engaging outreach letter based on the information you provide.</p>
        </div>
      <form onSubmit={handleLogin} className='login-form'>
        <input
            className='input'
            type="text"
            name="password"
            placeholder="Password"
            value={keyPhrase}
            onChange={handleKeyPhraseChange}
        />
        <button type="submit" className='submit-button button'>Login</button>
      </form>
      </div>
    </>
  )
}

export default Login