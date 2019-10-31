import React from 'react'

const Button = ({funcForm, children}) => {
  return (
    <div>
      <button onClick={() => funcForm()}> {children} </button>
    
    </div>
  )
}

export default Button