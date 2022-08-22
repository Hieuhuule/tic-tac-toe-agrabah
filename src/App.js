import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import WinCondition from './components/WinConditions'

const App = () => {
  const [squares, setSquares] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])

  const [turnCount, setTurnCount] = useState(0)

  // WIN CONDITION
  // need to look at the state of squares
    // if squares match win condition, alert
  // write win conditions for every way, across, vertical, diagonal
  // Win conditions for X
    // across-top [0,1,2]
    // across-middle [3,4,5]
    // across-bottom [6,7,8]
    // vert-left [0,3,6]
    // vert-middle [1,4,7]
    // vert-right [2,5,8]
    // top-left-diag = [0,4,8]
    // top-right-diag = [2,4,6]

  const handleGamePlay = (index) => {

    const newSquares = [...squares]
    

    if (turnCount === 8) {
      alert("Game Over!")

        if ("X" === newSquares[0,1,2]  ||
    "X" === newSquares[3,4,5]  ||
    "X" === newSquares[6,7,8] ||
    "X" === newSquares[0,3,6] ||
    "X" === newSquares[1,4,7] ||
    "X" === newSquares[2,5,8] ||
    "X" === newSquares[0,4,8] ||
    "X" === newSquares[2,4,6] 
    ) {
      alert("X is the winner!")
    } else if (
        "O" === newSquares[0,1,2]  ||
        "O" === newSquares[3,4,5]  ||
        "O" === newSquares[6,7,8] ||
        "O" === newSquares[0,3,6] ||
        "O" === newSquares[1,4,7] ||
        "O" === newSquares[2,5,8] ||
        "O" === newSquares[0,4,8] ||
        "O" === newSquares[2,4,6] 
    ) {
      alert("O is the winner!")
    }

    } else if (
      turnCount % 2 === 0
      && newSquares[index] !== "X"
      && newSquares[index] !== "O"
      ) {
        newSquares[index] = "X"
        setSquares(newSquares)
        setTurnCount((turnCount + 1))
        console.log(turnCount)
    } else if (
      turnCount % 2 === 1 
      && newSquares[index] !== "X" 
      && newSquares[index] !== "O"
      ) {
        newSquares[index] = "O"
        setSquares(newSquares)
        setTurnCount((turnCount + 1))
        console.log(turnCount)
    }
  }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="boardgame" >
        {squares.map((value, index) => {
          return (
            <Square value={value} index={index} handleGamePlay={handleGamePlay} />
          )
        })}
      </div>
    </>
  )
}

export default App