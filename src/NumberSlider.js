import React, { useState } from 'react';

const NumberSlider = () => {
  // Initialize the game board
  const [board, setBoard] = useState([...Array(15)].map((_, i) => i + 1));
  const [emptyIndex, setEmptyIndex] = useState(15);

  // Function to handle tile clicks
  const handleTileClick = (index) => {
    if (isAdjacent(index, emptyIndex)) {
      const newBoard = [...board];

      // Swap the clicked tile with the empty space
      [newBoard[index], newBoard[emptyIndex]] = [newBoard[emptyIndex], newBoard[index]];

      setBoard(newBoard);
      setEmptyIndex(index);
    }
  };

  // Function to check if two tiles are adjacent
  const isAdjacent = (index1, index2) => {
    const row1 = Math.floor(index1 / 4);
    const col1 = index1 % 4;
    const row2 = Math.floor(index2 / 4);
    const col2 = index2 % 4;

    return (
      (row1 === row2 && Math.abs(col1 - col2) === 1) ||
      (col1 === col2 && Math.abs(row1 - row2) === 1)
    );
  };

  // Function to check if the puzzle is solved
  const isPuzzleSolved = () => {
    return board.every((number, i) => number === i + 1);
  };

  return (
    <div>
      <h1>Number Slider Game</h1>
      <div className="board">
        {board.map((number, index) => (
          <div
            key={index}
            className={`tile ${number === emptyIndex + 1 ? 'empty' : ''}`}
            onClick={() => handleTileClick(index)}
          >
            {number}
          </div>
        ))}
      </div>
      {isPuzzleSolved() && <p>Congratulations! You solved the puzzle! 🎉</p>}
    </div>
  );
};

export default NumberSlider;