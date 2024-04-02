import React from 'react'
import img from '../assets/img/Category.svg'
import { CategoryCard } from '@/entities/CategoryCard'
import s from '../assets/styles/styles.module.css'

const Category = () => {
  const category = [
    {
      id:1,
      name:"Dining", 
      img:img
    },

    {
      id:2,
      name:"Living", 
      img:img
    },

    {
      id:3,
      name:"Bedroom",
      img:img
    }
  ]
  return (
    <div className={`${s.CategoryWrapper}`}>

      <h3 className={`${s.Title}`}>
        Browse The Range
      </h3>

      <p className={`${s.Description}`}>
        Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit
      </p>

      <div className={`${s.CategoryBlock}`}>
        {
          category.map(
            (cate) => 
              <CategoryCard 
                key={cate.id} 
                name={cate.name} 
                img={cate.img}/>
          )
        }
      </div>
    </div>
  )
}

export default Category