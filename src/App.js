import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleGamePlay = (index) => {
    const newSquares = [...squares]
    newSquares[index] = "x"
    setSquares(newSquares)
    alert(newSquares.value)
  }
// const handleGamePlay = (index) =>{
//   alert(index)
// }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board" >
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