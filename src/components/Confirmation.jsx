import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmation = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };
  
    
  return (
    <div>
        <h1>Thank you for submitting the form!</h1>
        <p>We have received your information and will review it shortly.</p>
        <button onClick={handleBack}>Back to Home</button>
    </div>
  )
}

export default Confirmation