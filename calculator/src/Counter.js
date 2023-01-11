import React, { useState, useEffect } from 'react';

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

  function handleIncrement() {
    setCounter(counter + 1)
  }

  function handleDecrement() {
    setCounter(counter <= 0 ? 0 : counter - 1)
  }

  function handleReset() {
    setCounter(0)
    setRandomText('Random text is updated')
  }

  useEffect(() => {
    console.log('Component lifecycle')
    // updaterandomText(`Random text is updated`);
  }, [counter])

  return (
    <div style={center}>
      <Btn onClick={handleIncrement}>+</Btn>
      <span style={textStyle}>{counter}</span>
      <Btn onClick={handleDecrement}>-</Btn>
      <div style={center}>
        <Btn onClick={handleReset}>Reset</Btn>
      </div>
      <br />
      <span>{randomText}</span>
    </div>
  );
}

export default Counter
