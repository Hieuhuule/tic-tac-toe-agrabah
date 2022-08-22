import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])

  const [turnCount, setTurnCount] = useState(0)


  const handleGamePlay = (index) => {

    const newSquares = [...squares]
    
    if (turnCount === 9) {
      alert("Game Over!")
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