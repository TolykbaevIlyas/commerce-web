
import { ShoppingModal } from '@/features/ShoppingModal'
import { Intro } from '@/widgets/Intro'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Intro/>
      <ShoppingModal/>
    </main>
  )
}
