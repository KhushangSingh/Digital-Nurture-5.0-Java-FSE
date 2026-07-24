import React, { useState } from 'react';

export default function CurrencyConvertor() {
  // State for form inputs
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // Basic conversion logic (assuming 1 Euro = 80 Rupees based on the screenshot)
    if (currency.toLowerCase() === 'euro') {
      const convertedAmount = amount * 80;
      alert(`Converting to Euro Amount is ${convertedAmount}`);
    } else {
      alert("Please enter 'Euro' as the currency for conversion.");
    }
  };

  return (
    <div>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px' }}>Amount:</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'inline-block', width: '80px' }}>Currency:</label>
          <input 
            type="text" 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}
            required 
          />
        </div>
        
        <button type="submit" style={{ marginLeft: '80px' }}>Submit</button>
      </form>
    </div>
  );
}