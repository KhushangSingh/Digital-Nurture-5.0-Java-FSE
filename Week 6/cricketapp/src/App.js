import React, { useState } from 'react';
import './App.css'; // Importing our new styles
import ListofPlayers from './Components/ListofPlayers';
import Scorebelow70 from './Components/Scorebelow70';
import { OddPlayers, EvenPlayers, IndianPlayers, ListofIndianPlayers } from './Components/OddEvenPlayers';

function App() {
  // Define base players array
  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 }
  ];

  const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvraj5", "Raina6"];

  // Replace 'var flag' with React State. It defaults to 'true'.
  const [flag, setFlag] = useState(true);

  // This function flips the state whenever the button is clicked
  const toggleView = () => {
    setFlag(!flag);
  };

  return (
    <div className="app-container">
      {/* Top Navigation / Header */}
      <div className="header">
        <h2>Cricket Dashboard</h2>
        <button className="toggle-btn" onClick={toggleView}>
          {flag ? "Switch to Team Views" : "Switch to Player Scores"}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="content-area">
        {flag ? (
          <div>
            <div className="card">
              <h1>List of All Players</h1>
              <ListofPlayers players={players} />
            </div>
            <div className="card">
              <h1>Players Scoring Less Than 70</h1>
              <Scorebelow70 players={players} />
            </div>
          </div>
        ) : (
          <div>
            <div className="card">
              <h1>Indian Team Splitting</h1>
              <div className="split-view">
                <div>
                <h2>Odd Players</h2>
                {OddPlayers(IndianTeam)}
              </div>
              <div>
                <h2>Even Players</h2>
                {EvenPlayers(IndianTeam)}
              </div>
              </div>
            </div>
            <div className="card">
              <h1>List of Indian Players Merged</h1>
              <ListofIndianPlayers IndianPlayers={IndianPlayers} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;