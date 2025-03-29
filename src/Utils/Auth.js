const setAuthToken = (token) => {
  localStorage.setItem("token", token);
};

const getAuthToken = () => {
  return localStorage.getItem("token");
};

const removeAuthToken = () => {
  localStorage.removeItem("token");
};

const isAuthenticated = () => {
  return !!getAuthToken();
};

export { setAuthToken, getAuthToken, removeAuthToken, isAuthenticated };
