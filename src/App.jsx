import './App.css'
import React, { useState } from 'react';
import Generator from './components/Generator'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [resumeHighlights, setResumeHighlights] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      jobTitle,
      company,
      jobDescription,
      resumeHighlights,
    });
  };

  return (
    <div className="App">
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
    </div>
  )
}

export default App
