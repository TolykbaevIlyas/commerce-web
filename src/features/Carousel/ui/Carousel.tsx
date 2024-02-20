import React from 'react'
import { ICarousel } from '../types'
import Image from 'next/image'
import { CarouselCard } from '@/entities/CarouselCard'

const Carousel = ({title,description,img}:ICarousel) => {
  return (
    <div>
        <CarouselCard title={title} description={description} image={img}/>
    </div>
  )
}

export default Carousel