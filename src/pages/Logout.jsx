import React from 'react';
import axios from 'axios';

const Logout = ({ setAuthToken }) => {
  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/logout`);
      setAuthToken(null);
    } catch (err) {
      console.error('Error logging out', err);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
