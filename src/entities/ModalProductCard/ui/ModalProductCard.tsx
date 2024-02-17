'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IModalProductCard } from '../types'
import cancel from '../assets/img/delete.svg'
import s from '../assets/styles/style.module.css'

const ModalProductCard = ({image, title, price}:IModalProductCard) => {
  const[count, setCount] = useState(1);
  return (
    <div className='mt-5 flex justify-between'>
        <div className='flex '>
          <Image alt="ProductImg" src={image}/>
          <div className='flex flex-col ml-5 justify-center'>
            <h5 className='text-lg font-bold'>{title}</h5>
            <p>{count} X {price}</p>
          </div>
        </div>
        <div className={`${s.Cancel} flex cursor-pointer`}>
            <Image alt="Cancel" src={cancel}/>
        </div>
    </div>
  )
}

export default ModalProductCard