import React from 'react'

function Card({product}) {
  return (
    <div className='p-2 bg-white cursor-pointer w-56 h-60 rounded-lg border-2 mt-3'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 mb-2 ml-2 p-1 left-0 bg-white/60 rounded-lg text-black text-sm'>{product.category}</span>
            <img className='h-full' src={product.image} alt={product.title} />
            <div className='border border-black  absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 font-black'>
                +
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm truncate font-light m-2'>{product.title}</span>
            <span className='text-md font-black m-2'>${product.price}</span>
        </p>
    </div>
  )
}

export default Card