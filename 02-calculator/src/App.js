import React, { useState, useEffect } from 'react'

// Imports
import Button from './components/Button'

// Import styles
import './css/style.css'

const App = () => {
  return (
    <div className='calculator'>
      <div className='display'>0</div>
      <Button value='7' />
      <Button value='8' />
      <Button value='9' />
      <Button className='operator' value='/' />

      <Button value='4' />
      <Button value='5' />
      <Button value='6' />
      <Button className='operator' value='*' />

      <Button value='1' />
      <Button value='2' />
      <Button value='3' />
      <Button className='operator' value='-' />

      <Button value='C' />
      <Button value='2' />
      <Button value='=' />
      <Button className='operator' value='+' />
    </div>
  )
}

export default App
