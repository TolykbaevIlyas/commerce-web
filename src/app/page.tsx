'use client'
import { ShoppingModal } from '@/features/ShoppingModal'
import { Category } from '@/widgets/Category'
import { Intro } from '@/widgets/Intro'
import { ProductsShort } from '@/widgets/ProductsShort'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="">
      <Intro/>
      <Category/>
      <ProductsShort/>
    </main>
  )
}
