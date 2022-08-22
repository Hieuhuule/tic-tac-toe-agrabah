import React from 'react'

const Square = (props) => {
  const handleClick = () => {
    (props.handleGamePlay(props.index))
  }
  
  
  return (
    <div className="square"
    onClick={handleClick}></div>
  )
}
export default Square
