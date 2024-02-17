import React from 'react'
import s from '../assets/css/style.module.css'
import { Button } from '@/shared/ui/Button'

const Intro = () => {
  return (
    <main className={`${s.Intro}`}>
        <div className={`${s.IntroBlock} px-10 py-20`}>
            <p className={`font-bold`}>New Arrival</p>
            <h3 className={`font-bold text-5xl mt-5 ${s.IntroText}`}>Discover Our New Collection</h3>
            <p className={`mt-5`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos ipsa, minus dignissimos reprehenderit aspernatur asperiores, voluptas exercitationem vero molestias sequi officiis culpa totam quae fuga nobis delectus sunt praesentium!</p>
            <Button className='mt-10'>Buy Now</Button>
        </div>
    </main>
  )
}

export default Intro