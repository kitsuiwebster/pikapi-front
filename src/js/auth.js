const isAuthenticated = () => {
    const jwtToken = localStorage.getItem('jwtToken');
    return jwtToken !== null;
  };
  
  export { isAuthenticated };
  