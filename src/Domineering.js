import React, { useState } from 'react';

function Domineering() {
  const initialBoard = Array.from({ length: 10 }, () => Array(10).fill(null));
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState('Left');

  function handleClick(row, col) {
    // Check if the clicked cell is empty
    if (board[row][col] === null) {
      if (player === 'Left') {
        // Check placement rules for 'Left' player
        if (row === 0 && board[row + 1][col] === null) {
          // Place a vertical domino ('L') in both cells
          board[row][col] = 'L';
          board[row + 1][col] = 'L';
          setBoard([...board]); // Update the board state
          if (rightMoveable(board)) {
            setPlayer('Right'); // Switch to 'Right' player
          } else {
            alert( "Player " + player + 'lose!');
          }
        } else if (row > 0 && row < 9 && board[row + 1][col] === null) {
          // Place a vertical domino ('L') in both cells
          board[row][col] = 'L';
          board[row + 1][col] = 'L';
          setBoard([...board]);
          if (rightMoveable(board)) {
            setPlayer('Right'); // Switch to 'Right' player
          } else {
            alert( "Player " + player + 'lose!');
          }
        }
      } else {
        // Check placement rules for 'Right' player
        if (col === 0 && board[row][col + 1] === null) {
          // Place a horizontal domino ('R') in both cells
          board[row][col] = 'R';
          board[row][col + 1] = 'R';
          setBoard([...board]);
          if (leftMoveable(board)) {
            setPlayer('Left'); // Switch to 'Left' player
          } else {
            alert( "Player " + player + 'lose!');
          }
        } else if (col > 0 && col < 9 && board[row][col + 1] === null) {
          // Place a horizontal domino ('R') in both cells
          board[row][col] = 'R';
          board[row][col + 1] = 'R';
          setBoard([...board]);
          if (leftMoveable(board)) {
            setPlayer('Left'); // Switch to 'Left' player
          } else {
            alert( "Player " + player + 'lose!');
          }
        }
      }
    }
  }
  
  function leftMoveable(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // Check if there is a move possible for the 'Left' player
        if (board[row][col] === null && board[row + 1][col] === null) {
          return true;
        }
      }
    }
    return false;
  }

  function rightMoveable(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // Check if there is a move possible for the 'Right' player
        if (board[row][col] === null && board[row][col + 1] === null) {
          return true;
        }
      }
    }
    return false;
  }
  return (
    <div>
      <h1>Domineering</h1>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((square, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleClick(rowIndex, colIndex)}
                  style={{
                    backgroundColor: square === 'L' ? 'blue' : square === 'R' ? 'red' : 'white',
                    width: '50px',
                    height: '50px',
                    border: '1px solid black',
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>Current player: {player}</p>
    </div>
  );
}

export default Domineering;
