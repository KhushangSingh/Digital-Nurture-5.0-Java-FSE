import React from 'react';

export default function Scorebelow70({ players }) {
    const players70 = [];
    players.map((item) => {
        if (item.score <= 70) {
            players70.push(item);
        }
        return null;
    });

    return (
        <div>
            <ul>
                {players70.examples || players70.map((item, index) => (
                    <div key={index}>
                        <li>Mr. {item.name} <span> {item.score}</span></li>
                    </div>
                ))}
            </ul>
        </div>
    );
}