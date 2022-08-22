import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  let turnCounter = 0
  let xTurn = 0
  let oTurn = 0
  const xTurn = squares.filter( if "O">"X")

  // newSquares[index] = "X"
  // setSquares(newSquares)

  // Turn counter
  // if counter is even, X's turn
  // if counter is odd, O's turn
  // if counter === 9, gameover
  // add logic for handleGamePlay to put X or O's

  const handleGamePlay = (index) => {
    
    const newSquares = [...squares]
    if (xTurn === oTurn) {
      newSquares[index] = "X"
      setSquares(newSquares)
      xTurn++
      console.log(xTurn)
    } else if (xTurn > oTurn) {
      newSquares[index] = "O"
      setSquares(newSquares)
      oTurn++
      console.log(oTurn)
    } else if (xTurn < oTurn) {
      newSquares[index] = "X"
      setSquares(newSquares)
      xTurn++
      console.log(xTurn)
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