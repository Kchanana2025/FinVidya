import React from 'react'

function Card({name, image}) {
  return (
    <>
      <div className='ml-8'>
      <div className="wrapper w-44 h-20 p-5 flex gap-2 items-center relative">
        <img src={image} className='w-12 h-12 object-cover' alt="" />
        <p className=' tracking-tighter text-zinc-500 font-semibold text-lg'>{name}</p>
      </div>
      </div>
    </>
  )
}

export default Card
