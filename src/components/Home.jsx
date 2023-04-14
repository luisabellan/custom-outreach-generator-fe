import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Generator from './Generator';
import { isAuthenticated, login, logout } from '../auth/basicAuth'

const Home = () => {
    const [isAuthenticatedState, setIsAuthenticatedState] = useState(
    isAuthenticated()
  );
  const [keyPhrase, setKeyPhrase] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [resumeHighlights, setResumeHighlights] = useState('');
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

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
    navigate('/confirmation');
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (login(keyPhrase)) {
      setIsAuthenticatedState(true);
    } else {
      alert("Invalid key phrase");
    }
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticatedState(false);
  };

  const handleKeyPhraseChange = (event) => {
    setKeyPhrase(event.target.value);
  };

  return (
    <div className="App">
      {!isAuthenticatedState ? (
        <form onSubmit={handleLogin} className='login-container'>
          <input
            className='input'
            type="text"
            name="password"
            placeholder="Password"
            value={keyPhrase}
            onChange={handleKeyPhraseChange}
          />
          <button type="submit" className='button'>Login</button>
        </form>
      ) : (
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
      )}
    </div>
  )
}

export default Home