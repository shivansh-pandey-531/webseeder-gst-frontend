import React from 'react';


const HelpdeskCard = ({embedLink, desc}) => {

  return (
    <div className='flex flex-col gap-4 justify-center'>
      <iframe width="240" height="148" src={embedLink} className='rounded-xl' title="YouTube video" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
      <p className='text-sm'>{desc}</p>
    </div>
  )
}

export default HelpdeskCard;