import React from "react";

// FIXME: change message and color based on `gameState`'s value
const GameInfo = ({ player, winner }) => (
  <div>
    <h3>It's your turn {player}</h3>
    <p>le gagnant est : {winner}</p>
  </div>
  
);

export default GameInfo;


