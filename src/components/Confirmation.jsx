import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/BIT_Logo_Full_White.png';
import video from '../assets/ezgif.com-gif-to-mp4_2.mp4';

const Confirmation = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;
  const jobTitle = location.state.job_title;
  const company = location.state.company;
  const email = location.state.email;

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <div className='header'>
        <img src={logo} alt="BIT Logo" />
      </div>
      <div className='confirmation' >
        <h1>You've just taken the first step to landing your next job!</h1>
        <h4>Check your email ( <span>{email}</span> ) for your outreach message to {company} for the {jobTitle} position.</h4>
        <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
        </video>
        <button className='submit-button button' onClick={handleBack}>Back to Generator</button>
      </div>
    </>
  )
}

export default Confirmation