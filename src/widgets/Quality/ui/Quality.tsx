import React from 'react'
import Image from 'next/image'
import Vic from '../assets/img/Victory.svg'
import Ok from '../assets/img/Okey.svg'
import Del from '../assets/img/Delivery.svg'
import Sup from '../assets/img/Support.svg'

const Quality = () => {
  return (
    <div className='flex justify-between px-40 py-32 bg-primary4 mt-10 -mb-20'>   
        <div  className='flex gap-3'>
            <div>
                <Image src={Vic} alt={'victory'}/>
            </div>
            <div>
                <h4 className='font-bold text-xl'> High Quality</h4>
                <p className='font-light text-lg text-gray-600'>crafted from top materials</p>
            </div>
        </div>
        <div className='flex gap-3'>
            <div>
                <Image src={Ok} alt={'Okey'}/>
            </div>
            <div>
                <h4 className='font-bold text-xl'> Warranty Protection</h4>
                <p className='font-light text-lg text-gray-600'>Over 2 year</p>
            </div>
        </div>
        <div className='flex gap-3'>
            <div>
                <Image src={Del} alt={'Delivery'}/>
            </div>
            <div>
                <h4 className='font-bold text-xl'> Free Shipping</h4>
                <p className='font-light text-lg text-gray-600'>Order over 150$</p>
            </div>
        </div>
        <div className='flex gap-3'>
            <div>
                <Image src={Sup} alt={'Support'}/>
            </div>
            <div>
                <h4 className='font-bold text-xl'> 24 / 7 Support</h4>
                <p className='font-light text-lg text-gray-600'>Dedicated support</p>
            </div>
        </div>
    </div>
  )
}

export default Quality