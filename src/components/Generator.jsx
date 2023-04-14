import React from 'react'

const Generator = ({
  name,
  setName,
  email,
  setEmail,
  jobTitle,
  setJobTitle,
  company,
  setCompany,
  jobDescription,
  setJobDescription,
  resumeHighlights,
  setResumeHighlights,
  handleSubmit
}) => {

  return (
    <div className='generator'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            id="jobTitle"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="resumeHighlights">Resume Highlights</label>
          <textarea
            id="resumeHighlights"
            value={resumeHighlights}
            onChange={(e) => setResumeHighlights(e.target.value)}
          />
        </div>

        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </div>
  )
};

export default Generator