import React from 'react'
import { IInput } from '../types'

const Input = ({type,placeholder,className,onChange,value}:IInput) => {
    const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(onChange){
            onChange(event.target.value)
        }
    }

  return (
    <input type={type} placeholder={placeholder} value={value} className={`${className}`} onChange={ChangeHandler}/>
  )
}

export default Input