import React, { useState } from 'react';
import Sqaure from './components/Sqaure';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState();
  const winner = calculateWinner(board);
  console.log(winner);
  console.log(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;
  const handleSqaureClick = position => {
    if (board[position] || winner) {
      return;
    }
    setboard(prev => {
      return prev.map((sqaure, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return sqaure;
      });
    });
    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSqaureClick={handleSqaureClick} />
    </div>
  );
};
export default App;
