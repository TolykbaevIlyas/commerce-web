import { IntroForPages } from '@/shared/ui/IntroForPages'
import { Products } from '@/widgets/Products'
import { Quality } from '@/widgets/Quality'
import { ShopSettings } from '@/widgets/shopSettings'
import React from 'react'

const page = () => {
  return (
    <div>
      <IntroForPages pageName='Shop'/>
      <ShopSettings/>
      <Products/>
      <Quality/>
    </div>
  )
}

export default page