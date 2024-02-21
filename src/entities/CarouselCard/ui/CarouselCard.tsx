import React from 'react'
import { ICarouselCard } from '../types'
import Image from 'next/image'
import s from '../assets/css/style.module.css'

const CarouselCard = ({title,description,image}:ICarouselCard) => {
  return (
    <div className={`${s.CarouselCard}`}>
        <Image src={image} alt={'photo'} height={700}/>
    </div>
  )
}

export default CarouselCard