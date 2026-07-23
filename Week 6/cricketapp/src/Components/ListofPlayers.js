import React from 'react';

export default function ListofPlayers({ players }) {
    return (
        <div>
            <ul>
                {players.map((item, index) => (
                    <div key={index}>
                        <li>Mr. {item.name} <span> {item.score}</span></li>
                    </div>
                ))}
            </ul>
        </div>
    );
}