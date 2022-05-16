import React from 'react'
import { productstype } from '../../JsonData.js/products'

export default function ProductsType() {
  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3 '>
        {
          productstype ? productstype.map((productstype, index) => (
            <div key={index} className={` cursor-pointer rounded-2xl py-4 ${index == 0 ? 'col-span-3 bg-stone-300' : ""} grid ${index == 4 ? 'col-span-2 bg-yellow-100' : ""} ${index == 1 ? ' bg-red-100' : ""} ${index == 3 ? ' bg-green-100' : ""} ${index == 1 ? ' bg-red-100' : ""} ${index == 2 ? ' bg-blue-100' : ""} `}>
              <div className='m-auto'>
                <img className="hover:scale-105" src={productstype.img ? productstype.img : ""} style={{ width: "85%", margin: "10px 7.5%" }} />
              </div>
            </div>
          )) : ""
        }
      </div>

    </>
  )
}
