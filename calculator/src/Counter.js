import React, { useState, useEffect } from 'react';

// Imports
import HighScore from './HighScore'

const center = {
  textAlign: 'Center'
}

const btnStyle = {
  paddingRight: '20px',
  paddingLeft: '20px'
}

const textStyle = {
  fontSize: '50px',
  padding: '20px',
  verticalAlign: 'Middle'
}

function Btn({ children, onClick }) {
  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  )
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [randomText, setRandomText] = useState('This is random Text');
  const [overTen, setOverTen] = useState(false);

  function handleIncrement() {
    setCounter(counter + 1)
  }

  function handleDecrement() {
    setCounter(counter <= 0 ? 0 : counter - 1)
  }

  function handleReset(event) {
    setCounter(0)
    setRandomText('Random text is updated')
    console.log(event)
  }

  useEffect(() => {
    console.log('Component lifecycle')
    // updaterandomText(`Random text is updated`);
/*     if(counter > 10) {
      setOverTen(true)
    } */
        if (counter > 10 && overTen == false) {
          console.log('Updating overTen')
          setOverTen(true)
        }
  }, [counter])

  return (
    <div style={center}>
      <br />
      <br />
      <br />
      <br />
      <span style={textStyle}>You clicked the button {counter} times</span>
      <br />
      <Btn onClick={handleDecrement}>-</Btn>
      <Btn onClick={handleIncrement}>+</Btn>
      <br />
      <br />
      <div style={center}>
        {/* <Btn onClick={handleReset}>Reset</Btn> */}
        <HighScore overTen={overTen} onReset={(e) => handleReset(e)} />
      </div>
      <br />

      <span>{randomText}</span>
    </div>
  )
}

export default Counter
