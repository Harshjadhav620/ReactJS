import React from 'react'

const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-14 w-14 text-2xl font-semibold flex justify-center items-center'>1</h2>
            <div>
            <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis sed commodi. Adipisci, totam ex!</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
                <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent