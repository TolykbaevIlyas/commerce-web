import React from 'react'
import Link from 'next/link'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import s from '../assets/css/style.module.css'

const Footer = () => {
  return (
    <div className='border-t-2 border-gray-300'>
       <div className='flex justify-between mx-20'>
        <div className='mt-10'>
                <h5 className={`font-extrabold ${s.Title}`}>Funiro</h5>
                <p className='font-light mt-10 text-gray-300 '>400 University Drive Suite 200 Coral Gables,
    FL 33134 USA</p>
            </div>
            <div className='flex flex-col gap-10 mt-10'>
                <h5 className='font-light text-gray-400'>Links</h5>
                <div className='flex flex-col gap-5'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/Shop'}>Shop</Link>
                    <Link href={'/About'}>About</Link>
                    <Link href={'/Contact'}>Contact</Link>
                </div>
            </div>
            <div className='flex flex-col gap-10 mt-10'>
                <h5 className='font-light text-gray-400'>Help</h5>
                <div className='flex flex-col gap-5'>
                    <Link href={'/payment'}>Payment Options</Link>
                    <Link href={'/'}>Returns</Link>
                    <Link href={'/'}>Privacy Policies</Link>
                </div>
            </div>
            <div className='flex flex-col gap-10 mt-10'>
                <h5 className='font-light text-gray-400'>NewSletter</h5>
                <div className='flex flex-row gap-5'>
                    <Input placeholder='Hello'/> 
                    <Button variant={"2"} className='border-b-2 border-black'>Subscribe</Button> 
                </div>  
            </div>
       </div>
       <div className='border-t-2 border-gray-300 mx-20 mt-10'>
            <p className='my-5'>2023 furino. All rights reverved</p>
       </div>
    </div>
  )
}

export default Footer