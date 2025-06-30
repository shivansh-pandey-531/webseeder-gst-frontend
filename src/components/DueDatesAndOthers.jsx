import React from 'react';
import { dueDates, others } from '../static/dummyData_DueDates';


const DueDatesAndOthers = () => {

  return (
    <div className='w-[415px] border-[1px] border-solid my-10 mx-40 border-[#C5C5C5] flex flex-col'>

        {/* Due Dates */}
        <div className='p-5 border-solid'>
          <h3 className='font-semibold text-xl mb-4'>Due Dates</h3>

          <ul className='list-none rounded-lg border-[#C5C5C5]'>
            {
              dueDates.map((item, idx) => (
                <li key={idx} className='flex items-center justify-between w-full'>
                  <div className='flex items-center p-2 gap-2'>
                    <p className='font-medium'>{item.form}</p>
                    <p className='text-sm text-gray-500'>({item.period})</p>
                  </div>

                  <div>
                    <p>{item.due_date}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>


        {/* Others */}
        <div>
          <h3>Others</h3>

          <ul className='list-none border-solid border-[#C5C5C5]'>
            {
              others.map((item, idx) => (
                <li key={idx} className='flex justify-between'>
                  <div className='flex gap-2'>
                    <p>{item.form}</p>
                    <p>({item.period})</p>
                  </div>

                  <div>
                    <p>{item.due_date}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default DueDatesAndOthers;