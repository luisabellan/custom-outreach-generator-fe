import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import mailgun from 'mailgun-js';

const Confirmation = () => {

  // const mg = mailgun({apiKey: meta.import.env.VITE_MAILGUN_API_KEY, domain: meta.import.env.VITE_MAILGUN_DOMAIN});
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state.data;
  const jobTitle = location.state.job_title;
  const company = location.state.company;
  const name = location.state.name;

  const handleBack = () => {
    navigate('/');
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(data, null, 2)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "outreach.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  // const handleEmail = () => {
  //   const data = {
  //     from: "Outreach Genrator <postmaster@mail.bloomtech.com>",
  //     to: "ashalesh.tilawat@bloomtech.com",
  //     subject: "Cold Outreach is Ready!",
  //     template: "custom_outreach",
  //     'h:X-Mailgun-Variables': {outreach_message: JSON.stringify(data, null, 2)}
  //   }
  //   mg.messages().send(data, function (error, body) {
  //     console.log(body);
  //   });
  // };
  
    
  return (
    <div className='confirmation' >
        <h1>{name}! Your custom outreach message is ready!</h1>
        <p>Below, you will find 3 items that are critical to your custom outreach sequence for the {jobTitle} role at {company}: your Initial Outreach Email, the best contact name and email address, and 2 follow-up emails to send 3 and 5 days later. Remember to <span>proofread the email before sending AND attach your resume.</span> Let your career coach know if you have any questions!</p>
        {data && (
            <div className='outreach-container'>
                {JSON.stringify(data, null, 2)}
            </div>
        )}
        <div className='button-group'>
          <button className='button' onClick={handleBack}>Back to Home</button>
          <button className='button'>Email Me</button>
          <button className='button' onClick={handleDownload}>Download</button>
        </div>
    </div>
  )
}

export default Confirmation