'use client'
import React from 'react'
import { IButton } from '../types'
import s from './assets/style/style.module.css'

const Button = ({children,onClick,className,type,variant}:IButton) => {
  return (
    <button 
      type={type} 
      onClick={()=>onClick} 
      className={`${className} 
                  ${variant === "1" ? ` px-10 py-5 font-bold text-white bg-primary rounded-sm` : null}
                  ${variant === "2" ? `` : null}
                  ${variant === "3" ? `px-5 py-2 font-bold text-black rounded-lg border-2 border-black` : null}`}>
        {children}
    </button>
  )
}

export default Button