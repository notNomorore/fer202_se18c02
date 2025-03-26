import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ItemList() {
  const [keyboards, setKeyboards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/Keyboards') // Lấy dữ liệu từ JSON Server
      .then((response) => response.json())
      .then((data) => setKeyboards(data))
      .catch((error) => console.error('Error loading keyboards:', error));
  }, []);

  return (
    <div>
      <ul>
        {keyboards.map(keyboard => (
          <li key={keyboards.id}>
            <Link to={`/keyboards/${keyboard.id}`}>{keyboard.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;