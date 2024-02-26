import { IntroForPages } from '@/shared/ui/IntroForPages'
import { ShopSettings } from '@/widgets/shopSettings'
import React from 'react'

const page = () => {
  return (
    <div>
      <IntroForPages pageName='Shop'/>
      <ShopSettings/>
    </div>
  )
}

export default page