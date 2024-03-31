import React from 'react'

export default function Hero() {
  return (
    <div className='flex justify-between items-center mt-6 mb-4'>
        <div>
            <h1 className='text-white text-[36px] font-medium '>You’ve got <span className='text-[#6200EE]'> 7 book</span> </h1>
            <p className='text-white'>Your books today</p>
        </div>
        <div>
            <button className='bg-[#6200EE] px-4 py-2 rounded-md text-white font-bold'>+ Create a book</button>
        </div>
    </div>
  )
}
