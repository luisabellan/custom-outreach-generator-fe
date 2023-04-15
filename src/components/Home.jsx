import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Generator from './Generator';
import axios from 'axios';
import spinner from '../assets/loading-wheel-removebg-preview.png';
import illustration from '../assets/BIT_Illustration_community.png';
import logo from '../assets/BIT_Logo_Full_White.png';

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
    const formData = JSON.stringify({
        your_name: name,
        job_title: jobTitle,
        company: company,
        job_description: jobDescription,
        key_points_from_resume: resumeHighlights
    });

    try {
        const res = await axios.get(`${import.meta.env.VITE_OUTREACH_API_URI}?your_name=${name}&job_title=${jobTitle}&company=${company}&job_description=${jobDescription}&key_points_from_resume=${resumeHighlights}`, { 
            headers: {
                'Content-Type': 'application/json',
            }
         });

        navigate('/confirmation', { state: { data: res.data, job_title: jobTitle, company: company, name: name } });
    } catch (error) {
        console.log(error);
    } finally {
        setIsLoading(false);
    } 
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">
          <img src={illustration} alt="Loading..." />
        </div>
      ) : (
        <>
          <div className='header'>
            <img src={logo} alt="BIT Logo" />
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