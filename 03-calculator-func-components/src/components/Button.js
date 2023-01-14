import React from 'react'

// Import styles
import '../css/style.css'

const Button = (props) => {
  return (
    <div>
      <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
    </div>
  )
}

export default Button
