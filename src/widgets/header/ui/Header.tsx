import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/img/Logo.svg'
import user from '../assets/img/User.svg'
import search from '../assets/img/Search.svg'
import favourite from '../assets/img/Favourite.svg'
import cart from '../assets/img/Cart.svg'
import { Button } from '@/shared/ui/Button'
import s from '../assets/styles/style.module.css'


const Header = () => {
  return (
    <header className='flex justify-between items-center text-center py-5 bg-white shadow-xl px-20'>
        <div>
            <Link href={'/'}><Image src={logo} alt={'logo'}/></Link>
        </div>
        <nav className='flex gap-10'>
            <Link href={'/'} className={`font-semibold hover:font-bold duration-150 ${s.NavText}`}>Home</Link>
            <Link href={'/'} className={`font-semibold hover:font-bold duration-150 ${s.NavText}`}>Shop</Link>
            <Link href={'/'} className={`font-semibold hover:font-bold duration-150 ${s.NavText}`}>About</Link>
            <Link href={'/'} className={`font-semibold hover:font-bold duration-150 ${s.NavText}`}>Contact</Link>
        </nav>
        <div className='flex gap-10'>
            <Button variant='2'>
                <Image src={user} alt={'Profile'} width={25}/>
            </Button>
            <Button variant='2'>
                <Image src={search} alt={'Search'} width={25}/>
            </Button>
            <Button variant='2'>
                <Image src={favourite} alt={'Favourite'} width={25}/>
            </Button>
            <Button variant='2'>
                <Image src={cart} alt={'Cart'} width={25}/>
            </Button>
        </div>
    </header>
  )
}

export default Header