import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ authToken }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://your-api-url/admin/dashboard', {
          headers: { Authorization: `Bearer ${authToken}` }
        });
        setData(response.data);
      } catch (err) {
        console.error('Error fetching dashboard data', err);
      }
    };

    if (authToken) {
      fetchData();
    }
  }, [authToken]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
