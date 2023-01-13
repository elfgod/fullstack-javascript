// Imports
import React from 'react';
import Button from './components/Button'

// Import styles
import './css/style.css'

const App = () => {

  const [calc, setCalc] = React.useState({
    current: '0',
    total: '0',
    isInitial: true,
    preOp: ''
  })

  function handleNumber(value) {
    // alert('handle number click:' + value)

    let newValue = value

    if(!calc.isInitial) {
      newValue = calc.current + value
    }
    setCalc({ current: newValue, total: calc.total, isInitial: false })
  }

  function handleOperator(value) {
    const total = doCalculation()
    
    setCalc({current: total.toString, total: total.toString(), isInitial: true, preOp: value})
  }

  function doCalculation() {
    let total = parseInt(calc.total)
    switch (calc.preOp) {
      case '+':
        total += parseInt(calc.current)
        break
      case '-':
        total -= parseInt(calc.current)
        break
      case '*':
        total *= parseInt(calc.current)
        break
      case '/':
        total /= parseInt(calc.current)
        break
      default:
        total = parseInt(calc.current)
    }

    return total
  }

  function renderDisplay() {
    return calc.current
  }

  function handleClear() {
    setCalc({
      current: '0',
      total: '0',
      isInitial: true,
      prepOn: ''
    })
  }

  function handleEquals() {
    let total = doCalculation()

    setCalc({current: total.toString(), total: total.toString(), isInitial: true, preOp: '='})
  }

  return (
    <div className='calculator'>
      <div className='display'>{calc.current}</div>
      <Button value='7' onClick={handleNumber} />
      <Button value='8' onClick={handleNumber} />
      <Button value='9' onClick={handleNumber} />
      <Button className='operator' value='/' onClick={handleOperator} />

      <Button value='4' onClick={handleNumber} />
      <Button value='5' onClick={handleNumber} />
      <Button value='6' onClick={handleNumber} />
      <Button className='operator' value='*' onClick={handleOperator} />

      <Button value='1' onClick={handleNumber} />
      <Button value='2' onClick={handleNumber} />
      <Button value='3' onClick={handleNumber} />
      <Button className='operator' value='-' onClick={handleOperator} />

      <Button value='C' onClick={handleClear} />
      <Button value='0' onClick={handleNumber} />
      <Button value='=' />
      <Button className='operator' value='+' onClick={handleOperator} />
    </div>
  )
}

export default App
