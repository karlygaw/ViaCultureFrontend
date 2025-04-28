import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Nations from './pages/Nations';
import NationDetails from './pages/NationDetails';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; 
import Logout from './pages/Logout';

function App() {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nations" element={<Nations />} />
            <Route path="/nations/:id" element={<NationDetails />} />
            <Route path="/chat" element={<Chat />} />
            
            <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
            
            <Route 
              path="/dashboard" 
              element={
                authToken ? (
                  <>
                    <Dashboard authToken={authToken} />
                    <Logout setAuthToken={setAuthToken} />
                  </>
                ) : (
                  <div>You must be logged in to view the dashboard.</div>
                )
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
