import React from 'react';


const GetStarted = () => {

  return (
      <div className='flex flex-col max-w-[65%] bg-white border border-solid rounded-md border-[#C5C5C5]'>
        {/* Row-1 */}
        <div className='flex flex-col items-center w-full gap-2 py-4' style={{ borderBottom: '1px solid #C5C5C5' }}>
          <h1 className='text-[#1D4281] font-semibold'>Get Started with Munim GST</h1>
          <h2 className='font-medium'>Way to Customer Creations</h2>
        </div>

        {/* Row-2 */}
        <div className='grid grid-cols-2'>
          <div className='flex flex-col items-center py-5 gap-3' style={{ borderRight: '1px solid #C5C5C5' }}>
            <h3 className='font-semibold'>Import Your Customer</h3>
            <button className='bg-[#1773EA] text-white font-medium rounded-md px-4 py-2 transition-all duration-100 border-solid border border-[#1773EA] hover:bg-white hover:text-[#1773EA] cursor-pointer'>Click here</button>
          </div>
          
          <div className='flex flex-col items-center py-5 gap-3'>
            <h3 className='font-semibold'>Create Your Customer</h3>
            <button className='bg-[#1773EA] text-white font-medium rounded-md px-4 py-2 transition-all duration-100 border-solid border border-[#1773EA] hover:bg-white hover:text-[#1773EA] cursor-pointer'>Click here</button>
          </div>
        </div>
      </div>
  )
}

export default GetStarted