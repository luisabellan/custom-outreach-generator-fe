const keyPhrase = "bloomtech_bear_123";

const isAuthenticated = () => {
  const savedKeyPhrase = localStorage.getItem("keyPhrase");
  return savedKeyPhrase === keyPhrase;
};

const login = (keyPhrase) => {
  if (keyPhrase === keyPhrase) {
    localStorage.setItem("keyPhrase", keyPhrase);
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("keyPhrase");
};

export { isAuthenticated, login, logout };
