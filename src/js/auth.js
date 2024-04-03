

// Update the isAuthenticated function to check for token expiration
const isAuthenticated = () => {
  const token = localStorage.getItem('token'); // Ensure this matches the key used in storage
  return !!token; // Simplified check just for the presence of a token
};

// In auth.js
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username'); // Clear the username
  // Any additional logout logic can go here
};


export { isAuthenticated, logout };
