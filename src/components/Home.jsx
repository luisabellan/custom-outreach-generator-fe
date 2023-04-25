import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Generator from './Generator';
import axios from 'axios';
import video from '../assets/ezgif.com-gif-to-mp4.mp4';
import logo_white from '../assets/BIT_Logo_Full_White.png';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [resumeHighlights, setResumeHighlights] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        const res = await axios.get(`${import.meta.env.VITE_OUTREACH_API_URI}?your_name=${name}&your_email=${email}&job_title=${jobTitle}&company=${company}&job_description=${jobDescription}&key_points_from_resume=${resumeHighlights}`, { 
            headers: {
                'Content-Type': 'application/json',
            }
         });

        navigate('/confirmation', { state: { data: res.data, job_title: jobTitle, company: company, name: name, email: email } });
    } catch (error) {
        console.log(error);
        alert('This app uses OpenAI GPT 3.5-Turbo. API usage is very high right now. Please try again later.');
    } finally {
        setIsLoading(false);
    } 
  };

  return (
    <div className="App">
      {isLoading ? (
        <>
        <div className='header'>
          <img src={logo_white} alt="BIT Logo" />
        </div>
        <div className="loader">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
        </div>
        </>
      ) : (
        <>
          <div className='header'>
            <img src={logo_white} alt="BIT Logo" />
          </div>
          <Generator
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
            company={company}
            setCompany={setCompany}
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            resumeHighlights={resumeHighlights}
            setResumeHighlights={setResumeHighlights}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  )
}

export default Home