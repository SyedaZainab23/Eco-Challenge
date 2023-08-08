import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(' https://46ljn61sng.execute-api.us-east-1.amazonaws.com/dev/top_teams');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Leadership Board</button>
      <ul>
        {data.map((item) => (
          <li key={item.Position}>
            Position: {item.Position}, ID: {item.ID}, Name:{item.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
