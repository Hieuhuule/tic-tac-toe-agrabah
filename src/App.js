import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  var [xTurn, setXTurn] = useState(0)
  var [oTurn, setOTurn] = useState(0)


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
      setXTurn(xTurn + 1)
      console.log(setXTurn)
    } else if (xTurn > oTurn) {
      newSquares[index] = "O"
      setSquares(newSquares)
      setOTurn(oTurn + 1)
      console.log(setOTurn)
    // } else if (xTurn < oTurn) {
    //   newSquares[index] = "X"
    //   setSquares(newSquares)
    //   setXTurn = xTurn + 1
    //   console.log(setXTurn)
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