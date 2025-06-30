import { Link } from 'react-router-dom';
import "./NotifsAndCirculars.css";
import notifications from '../static/dummyData_GovtNotifications';
import circulars from '../static/dummyData_GovtCirculars';


const NotifsAndCirculars = () => {

  return (
    <div className='notifs-and-circulars max-w-[65%] grid grid-cols-2 gap-4'>

      {/* Govt Notifications */}
      <div className='p-5 h-fit bg-white border border-solid rounded-md border-[#C5C5C5]'>
        
        {/* Heading */}
        <div className='flex justify-between'>
          <h3>Govt. Notifications</h3>
          <Link className='text-[#166DDE] text-sm'>View all</Link>
        </div>

        {/* Data */}
        <ul className="py-5 pl-5 pr-2 space-y-5 divide-y divide-gray-800">
          {
            notifications.map((notif, idx) => (
              <li key={idx}>
                <div className='flex flex-col pl-3 gap-2'>
                  <div className='font-medium text-sm'>{notif.title}</div>

                  <div className='flex justify-between'>
                    <div className='flex text-sm gap-5'>
                      <p>{notif.date}</p>
                      <p>{notif.docId}</p>
                    </div>

                    <div className='text-sm'>
                      <Link className='text-[#166DDE] no-underline'>View</Link>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>


      {/* Govt Circulars */}
      <div  className='p-6 bg-white border border-solid rounded-md border-[#C5C5C5]'>
        
        {/* Heading */}
        <div className='flex justify-between'>
          <h3>Govt. Circulars</h3>
          <Link className='text-[#166DDE] text-sm'>View all</Link>
        </div>
        

        {/* Data */}
        <ul className="py-5 pl-5 pr-2 space-y-5 divide-y divide-gray-800">
          {
            circulars.map((circular, idx) => (
              <li key={idx}>
                <div className='flex flex-col pl-3 gap-2'>
                  <div className='font-medium text-sm'>{circular.title}</div>

                  <div className='flex justify-between'>
                    <div className='flex text-sm gap-5'>
                      <p>{circular.date}</p>
                      <p>{circular.docId}</p>
                    </div>

                    <div className='text-sm'>
                      <Link className='text-[#166DDE] no-underline'>View</Link>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default NotifsAndCirculars;