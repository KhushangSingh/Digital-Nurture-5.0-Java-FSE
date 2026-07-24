import React, { useState } from 'react';
import './App.css';

// --- Sub-components for Buttons ---
function LoginButton(props) {
  return (
    <button className="auth-button" onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className="auth-button auth-button--secondary" onClick={props.onClick}>
      Logout
    </button>
  );
}

// --- Sub-components for Greetings ---
function UserGreeting() {
  return <h1 className="greeting-title">Welcome back</h1>;
}

function GuestGreeting() {
  return <h1 className="greeting-title">Please sign up.</h1>;
}

// --- Greeting Logic Component ---
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// --- Main Application Component ---
function App() {
  // State to track if the user is logged in (defaults to false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handlers to update state
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  // Determine which button to show based on state (Element Variables)
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="app-shell">
      <main className="auth-card">
        <p className="eyebrow">Ticket Booking App</p>

        {/* Renders the correct greeting based on state */}
        <Greeting isLoggedIn={isLoggedIn} />

        <p className="supporting-text">
          {isLoggedIn
            ? 'You are signed in and ready to continue.'
            : 'Sign in to access your booking dashboard.'}
        </p>

        {/* Renders the correct button based on state */}
        <div className="button-row">{button}</div>
      </main>
    </div>
  );
}

export default App;