import React, { useState } from 'react'

const Generator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [resumeHighlights, setResumeHighlights] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g. send data to a server
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
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="jobTitle">Job Title</label>
      <input
        id="jobTitle"
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />

      <label htmlFor="company">Company</label>
      <input
        id="company"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <label htmlFor="jobDescription">Job Description</label>
      <textarea
        id="jobDescription"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <label htmlFor="resumeHighlights">Resume Highlights</label>
      <textarea
        id="resumeHighlights"
        value={resumeHighlights}
        onChange={(e) => setResumeHighlights(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
    </>
  )
};

export default Generator