import React from 'react'
import { ICarouselCard } from '../types'
import Image from 'next/image'
import s from '../assets/css/style.module.css'

const CarouselCard = ({title,description,image,className}:ICarouselCard) => {
  return (
    <div className={`${className} ${s.CarouselCard} `}>
        <Image src={image} alt={'photo'} height={700}/>
    </div>
  )
}

export default CarouselCard