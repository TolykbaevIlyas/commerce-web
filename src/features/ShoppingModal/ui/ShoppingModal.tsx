import React from 'react'
import s from '../assets/css/style.module.css'
import { IShoppingModal } from '../types'
import { Button } from '@/shared/ui/Button'
import Image from 'next/image'
import cancel from '../assets/img/Cancel.svg'
import { ModalProductCard } from '@/entities/ModalProductCard'
import ProdImg from '../assets/img/ProductImg.svg'


const ShoppingModal = ({click,setClick}: IShoppingModal) => {

  const Products = [{id:1, img: ProdImg, title: 'Book', price: 100},{id:2, img: ProdImg, title: 'Book', price: 100},{id:3, img: ProdImg, title: 'Book', price: 100}]

  console.log(click)

  return (
    <div className={`${s.ModalWrapper} bg-black/40`}>
      <div className={`${s.ModalInner} px-10 py-5`}>
        <div className='flex justify-between'>
          <h4 className='text-xl font-bold'>Shopping Cart</h4>
          <Button variant='2' onClick={() => setClick(false)}>
              <Image alt="Cancel" src={cancel}/>
          </Button>
        </div>
        <div className='mt-5 border-t-2 border-grey bg'>
          {Products.map((prod)=> <ModalProductCard key={prod.id} image={prod.img} title={prod.title} price={prod.price}/>)}
        </div>
        <div className='flex mt-10 justify-around'>
          <p className='font-bold'>Subtotal</p>
          <p>123,24</p>
        </div>
        <div className='flex gap-5 mt-5 pt-5 border-t-2 border-grey'>
          <Button variant='3'>
            Cart
          </Button>
          <Button variant='3'>
            Checkout
          </Button>
          <Button variant='3'>
            Comparison
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingModal