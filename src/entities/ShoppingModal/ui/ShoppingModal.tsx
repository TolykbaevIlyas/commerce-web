import React from 'react'
import s from '../assets/css/style.module.css'
import { IShoppingModal } from '../types'

const ShoppingModal = ({}: IShoppingModal) => {
  return (
    <div className={`${s.ModalWrapper}`}>
      <div className={`${s.ModalInner} rounded-lg`}>
        Modal 
      </div>
    </div>
  )
}

export default ShoppingModal