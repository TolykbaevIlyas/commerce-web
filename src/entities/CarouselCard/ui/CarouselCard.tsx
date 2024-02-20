import React from 'react'
import { ICarouselCard } from '../types'
import Image from 'next/image'

const CarouselCard = ({title,description,image}:ICarouselCard) => {
  return (
    <div>
        <Image src={image} alt={'photo'} height={700}/>
    </div>
  )
}

export default CarouselCard