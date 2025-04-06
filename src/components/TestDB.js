import React, { useState, useEffect } from 'react';

function TestDB() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/test-db')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      {data ? (
        <p>Current time from DB: {data[0].now}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TestDB;