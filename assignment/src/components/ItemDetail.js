import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { id } = useParams();
  const [keyboard, setKeyboard] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/Keyboards/${id}`) 
      .then((response) => response.json())
      .then((data) => setKeyboard(data))
      .catch((error) => console.error('Error loading keyboard:', error));
  }, [id]);

  if (!keyboard) {
    return <h2>404 not found</h2>;
  }

  return (
    <div>
<h1>hi</h1>
    </div>
  );
}

export default ItemDetail;
