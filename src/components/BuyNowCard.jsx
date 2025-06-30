import React from 'react';


const BuyNowCard = () => {

  return (
    <div className='bg-[#FCE5E5] p-4 gap-4 m-1 rounded-md flex flex-col items-center justify-center cursor-pointer'>
      <h4 className='font-semibold text-xl text-center'>59 days remaining on your free trial period</h4>
      <button className='bg-white py-2.5 px-5 text-lg font-semibold rounded-full border hover:cursor-pointer hover:drop-shadow-2xl'>Buy Now</button>
    </div>
  )
}

export default BuyNowCard;