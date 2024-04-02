import React from 'react'
import s from '../assets/css/style.module.css'
import { Button } from '@/shared/ui/Button'

const Intro = () => {
  return (
    <main className={`${s.Intro}`}>
        <div className={`${s.IntroBlock} bg-primary2`}>
            <p className={`font-bold`}>New Arrival</p>
            <h3 className={`${s.IntroText}`}>Discover Our New Collection</h3>
            <p className={`${s.IntroDesc}`} >
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quisquam quos ipsa, minus 
              dignissimos reprehenderit aspernatur asperiores, 
              voluptas exercitationem vero molestias sequi officiis 
              culpa totam quae fuga nobis delectus sunt praesentium!
            </p>
            <Button variant='1' className={`text-primary2 ${s.Button}`}>
              Buy Now
            </Button>
        </div>
    </main>
  )
}

export default Intro