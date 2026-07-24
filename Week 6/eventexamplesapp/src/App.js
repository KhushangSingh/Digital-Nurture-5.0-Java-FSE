import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  // 1. State for the counter
  const [count, setCount] = useState(0);

  // 2. Event Handlers
  const handleIncrement = () => {
    setCount(count + 1);
    alert("Hello! Member1"); // Multiple methods invoked as requested
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = (e) => {
    // e is the synthetic event object provided by React
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      
      {/* Display Counter */}
      <h2>{count}</h2>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '150px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        
        {/* Passing an argument requires an arrow function wrapper */}
        <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
        
        <button onClick={handleSyntheticEvent}>Click on me</button>
      </div>

      <hr style={{ margin: '40px 0' }} />

      {/* Render the Currency Convertor Component */}
      <CurrencyConvertor />

    </div>
  );
}

export default App;