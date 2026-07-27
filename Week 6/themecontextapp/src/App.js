import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeeList from './EmployeeList';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme}`}>
        <header className="App-header">
          <h1>Employee Management Application</h1>
          <button className={`toggle-btn ${theme}`} onClick={toggleTheme}>
            Toggle Theme to {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </header>
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
