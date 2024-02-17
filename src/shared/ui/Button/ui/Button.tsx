'use client'
import React from 'react'
import { IButton } from '../types'
import s from './assets/style/style.module.css'

const Button = ({children,onClick,className,type}:IButton) => {
  return (
    <button type={type} onClick={()=>onClick} className={`${className} ${s.Button} px-10 py-5 font-bold`}>
        {children}
    </button>
  )
}

export default Button