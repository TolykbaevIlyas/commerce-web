import React from 'react'
import { IProductCard } from '../types'
import Image from 'next/image'
import s from '../assets/css/style.module.css'

const ProductsCard = ({name,price,img,shortDescription}:IProductCard) => {
  return (
    <div>
        <Image src={img} alt={"ProductImg"} width={300}/>
        <div className='flex flex-col bg-gray-100 px-5 py-2 gap-2'>
            <h4 className={`font-bold ${s.Title}`}>{name}</h4>
            <p className={`font-extralight ${s.Description}`}>{shortDescription}</p>
            <p className={`font-bold ${s.price}`}>{price} $</p>
        </div>
    </div>
  )
}

export default ProductsCard