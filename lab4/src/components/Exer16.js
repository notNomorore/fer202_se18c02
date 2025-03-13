import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div >
      <h1>Event Handling Demo</h1>
      <p>Count: {count}</p>
      <Button onClick={handleButtonClick}>Increase Count</Button>
    </div >
  );
};

export default EventHandlingDemo;
