import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/BIT_Logo_Full_White.png';
import axios from 'axios';

const Confirmation = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;
  const jobTitle = location.state.job_title;
  const company = location.state.company;
  const email = location.state.email;
  const name = location.state.name;
  const lines = data.split('\n\n');

  const handleBack = () => {
    navigate('/');
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const text = lines.join("\n\n"); // Add two new lines between paragraphs
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${name.replace(/\s+/g, '')}_${jobTitle.replace(/\s+/g, '')}_outreach.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleEmail = (event) => {
    event.preventDefault();
    const data = {
      "to": `${email}`,
      "from": 'support@bloomtech.com',
      "subject": `Outreach for ${jobTitle} at ${company}`,
      "template": 'custom-outreach',
      "h:X-Mailgun-Variables": {outreach: lines.join("\n\n")}
    };
    axios.post(`https://api.mailgun.net/v3/${import.meta.env.VITE_MAILGUN_DOMAIN}/messages`, data, {
      api: import.meta.env.VITE_MAILGUN_API_KEY
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <div className='header'>
        <img src={logo} alt="BIT Logo" />
      </div>
      <div className='confirmation-container' >
        <div className='outreach'>
        <h4>{name}, your custom outreach message is ready! Below, you will find your custom outreach message for the {jobTitle} role at {company}. Click <span>Email Me</span> and we will send you your Initial Outreach Email, the best contact name and email address, and 2 follow-up emails to send 3 and 5 days later. <span>Remember to proofread the email before sending AND attach your resume.</span> Let your career coach know if you have any questions!</h4>
        {data && (
            <div className='email'>
              <h5>Initial Outreach Email:</h5>
                {lines.map((line, index) => (
                  <p key={index} style={{ marginBottom: '.5%' }}>{line}</p>
                ))}
            </div>
        )}
        <div className='email'>
          <h5>If you get no reply for 3 days, reply to your last email with this note:</h5>
          <p style={{ marginBottom: '.5%' }}>Dear Hiring Manager at {company},</p>
          <p>I remain interested in the {jobTitle} role with {company}. I know things get busy so just pushing this to the top of your inbox. Hope to hear from you soon!</p>
          <p style={{ marginTop: '.5%' }}>Sincerely,</p>
          <p>{name}</p>
        </div>
        <div className='email'>
          <h5>After 2 more days, reply to the last email with:</h5>
          <p style={{ marginBottom: '.5%' }}>Dear Hiring Manager at {company},</p>
          <p>Just wanted to drop you a quick follow-up about the {jobTitle} role. If there is someone else I should connect with, please feel free to forward me to them. I appreciate your time reading this and hope to connect with you soon!</p>
          <p style={{ marginTop: '.5%' }}>Sincerely,</p>
          <p>{name}</p>
        </div>
        </div>
        <div className='button-group'>
          <button className='button' onClick={handleBack}>Back to Home</button>
          <button className='button' onClick={handleEmail}>Email Me</button>
          <button className='button' onClick={handleDownload}>Download</button>
        </div>
      </div>
    </>
  )
}

export default Confirmation