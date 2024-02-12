import React from 'react'
import { IButton } from '../types'

const Button = ({children,onClick,className,type}:IButton) => {
  return (
    <button type={type} onClick={()=>onClick} className={`${className}`}>
        {children}
    </button>
  )
}

export default Button