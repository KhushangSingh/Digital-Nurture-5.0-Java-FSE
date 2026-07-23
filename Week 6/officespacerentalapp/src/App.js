import React from 'react';
import './App.css';

function App() {
  // 1. Define the variables and objects
  const element = "Office Space";
  
  // Using an online placeholder image of a modern office
  const imageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"; 
  
  // Applying a class name to the image for CSS styling
  const jsxatt = <img src={imageUrl} alt="Office Space" className="office-img" />;
  
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  // 2. Conditional logic to determine rent color
  let rentColor = "";
  if (ItemName.Rent <= 60000) {
    rentColor = "#e74c3c"; // A softer, modern red
  } else {
    rentColor = "#27ae60"; // A softer, modern green
  }

  // 3. Render the JSX
  return (
    <div className="app-container">
      <div className="card">
        
        {/* Title Section */}
        <h1 className="main-title">
          {element} <span className="subtitle">at Affordable Range</span>
        </h1>
        
        {/* Image Section */}
        <div className="image-container">
          {jsxatt}
        </div>
        
        {/* Details Section */}
        <div className="details-container">
          <h2><span className="label">Name:</span> {ItemName.Name}</h2>
          
          <h3 style={{ color: rentColor }} className="rent-text">
            <span className="label">Rent:</span> Rs. {ItemName.Rent}
          </h3>
          
          <h3 className="address-text"><span className="label">Address:</span> {ItemName.Address}</h3>
        </div>
        
      </div>
    </div>
  );
}

export default App;