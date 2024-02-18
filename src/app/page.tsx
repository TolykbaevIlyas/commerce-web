'use client'
import { ShoppingModal } from '@/features/ShoppingModal'
import { Intro } from '@/widgets/Intro'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [click, setClick] = useState(false);
  return (
    <main className="">
      <Intro/>
      {/* <ShoppingModal/> */}
      {click ? <ShoppingModal click={click} setClick={() => setClick}/> : null}
    </main>
  )
}
