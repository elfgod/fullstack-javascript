import React from 'react'

const HighScore = ({overTen, onReset}) => {
  return (
    <div>
      {' '}
      {overTen && <h1>Beat high score of 10!</h1>}
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default HighScore