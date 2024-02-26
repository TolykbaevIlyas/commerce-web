import { Button } from '@/shared/ui/Button'
import React from 'react'
import Image from 'next/image'
import img1 from '../assets/image/Settings.svg'
import img2 from '../assets/image/SettingsIcon1.svg'
import img3 from '../assets/image/SettingsIcon2.svg'

const ShopSettings = () => {
  return (
    <div className='bg-primary4'>
        <div>
            <Button variant='2'>Filter</Button>
            <Button variant='2'></Button> 
        </div>
        <div></div>
    </div>
  )
}

export default ShopSettings