import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState([" "," "," "," "," "," "," "," "," "])

  const handleGamePlay = (index) => {
    const newSquares = [...squares]
    newSquares[index] = "X"
    setSquares(newSquares)
  }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="boardgame" >
        {squares.map( (value, index) => {
          return(
            <Square value ={value} index={index} handleGamePlay={handleGamePlay}/>
          )
        })}
      </div>
    </>
  )
}

export default App