import axios from 'axios';
import { useState } from 'react';

function Login({ setAuthToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sanctum/csrf-cookie`, { withCredentials: true });

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, 
        { email, password }, 
        { withCredentials: true }
      );
      
      setAuthToken(response.data.token);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
