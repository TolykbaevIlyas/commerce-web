import React from 'react'
import { ICarousel } from '../types'
import Image from 'next/image'
import { CarouselCard } from '@/entities/CarouselCard'
import s from '../assets/css/style.module.css'

const Carousel = ({slides}:ICarousel) => {
  return (
    <div className={`relative ${s.Slider}`}>
        <div className='relative'>
          <div className={`flex relative overflow-hidden gap-20 ${s.Slides}`}>
            {slides.map((s) => <CarouselCard title={s.title} description={s.description} image={s.image}/>)}
          </div>
        </div>
        <div className={`flex gap-2 ${s.SliderCount}`}>
          {slides.map(()=> <div className={`bg-gray-300 border-2 border-gray-300 rounded-full  ${s.SliderDot}`}></div>)}
        </div>
    </div>
  )
}

export default Carousel