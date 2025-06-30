import { useState, useEffect, useRef } from 'react';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import dummyData from "../static/dummyData_ServicesCard";


const UpcomingServices = () => {

  const [startIdx, setStartIdx] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef(null);

  const visibleCards = 3; // Number of cards to show at once

  // Prepare cards: show one extra card for smooth slide
  const cardsToShow = [];
  for (let i = 0; i < visibleCards + 1; i++) {
    cardsToShow.push(dummyData[(startIdx + i) % dummyData.length]);
  }

  // Slide automatically every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 2000);
    return () => clearInterval(interval);
  }, [startIdx]);    // depend on startIdx for continuous sliding

  // Slide right handler
  const slideRight = () => {
    setIsSliding(true);
    // After animation, update index and reset sliding
    timeoutRef.current = setTimeout(() => {
      setIsSliding(false);
      setStartIdx(prev => (prev + 1) % dummyData.length);
    }, 500); // match duration-500
  }


  // Optional: Manual slide handlers
  const leftSlideHandler = () => {
    setIsSliding(true);
    timeoutRef.current = setTimeout(() => {
      setIsSliding(false);
      setStartIdx(prev => (prev - 1 + dummyData.length) % dummyData.length);
    }, 500);
  }

  const rightSlideHandler = () => {
    slideRight();
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Remove transition when resetting transform to 0
  const transitionClass = isSliding ? "transition-transform duration-500" : "";



  return (
    <div className='max-w-[65%] flex flex-col p-5 gap-6 bg-white border border-solid rounded-md border-[#C5C5C5]'>
      <h3>Upcoming Services</h3>
      <div className='relative flex h-36 overflow-x-hidden'>

        <div className={`flex gap-6 ${transitionClass}`} style={{ transform:isSliding? 'translateX(-28%)' : 'translateX(0)', width: `${(visibleCards + 1) * 25}%` }}>
          {cardsToShow.map((card, idx) => (
            <div key={idx} className="flex flex-col rounded-md z-10 h-full min-w-56 p-4 gap-4" style={{backgroundColor: card.bgColor, flex: "0 0 25%"}}>
              <h3 className='text-lg font-medium'>{card.title}</h3>
              <p className='text-sm'>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className='absolute right-0 top-0 h-full z-20 w-52 flex flex-col justify-center items-end pr-4 gap-3 bg-gradient-to-r from-white/0 to-white'>
          <TfiArrowCircleLeft size={32} onClick={leftSlideHandler} className={`opacity-100 cursor-pointer`} />
          <TfiArrowCircleRight size={32} onClick={rightSlideHandler} className={`opacity-100 cursor-pointer`} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingServices;

// import { useState, useEffect } from 'react';
// import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
// import dummyData from "../static/dummyData_ServicesCard";


// const UpcomingServices = () => {

//   const [startIdx, setStartIdx] = useState(0);
//   const visibleCards = 3; // Number of cards to show at once

//   // Auto-slide every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStartIdx(prev => (prev + 1) % dummyData.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

  
//   const [cardsSlided, setcardsSlided] = useState(false);
  
//   const leftSlideHandler = () => {
//     setcardsSlided(false);
//   }
  
//   const rightSlideHandler = () => {
//     setcardsSlided(true);
//   }


//   return (
//     <div className='max-w-[65%] flex flex-col p-5 gap-6 bg-white border border-solid rounded-md border-[#C5C5C5]'>
//       <h3>Upcoming Services</h3>

//       <div className='relative flex h-36 overflow-x-hidden'>
//         <div className={`flex gap-6 ${cardsSlided?  "-translate-x-60" : "translate-x-0"} transition-transform duration-500`}> 
//             {
//               dummyData.map(card => (
//                 <div key={card.id} className="flex flex-col rounded-md z-10 h-full min-w-56 p-4 gap-4" style={{backgroundColor: card.bgColor}}>
//                   <h3 className='text-lg font-medium'>{card.title}</h3>
//                   <p className='text-sm'>{card.desc}</p>
//                 </div>
//               ))
//             }
//         </div>

//         {/* <div className='max-w-full overflow-x-hidden'>
//           <Swiper className='flex h-full gap-12'
//             modules={[Autoplay]}
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//             loop={true}
//             slidesPerView={4}    // Show 4 cards at once
//             slidesPerGroup={1}    // Slide 1 card at a time
//             spaceBetween={20}
//           >
          
//             {
//               dummyData.map(card => (
//                 <SwiperSlide key={card.id} className='h-full'>
//                   <div className="flex flex-col rounded-md z-10 h-full w-56 p-4 gap-4" style={{backgroundColor: card.bgColor}}>
//                     <h3 className='text-lg font-medium'>{card.title}</h3>
//                     <p className='text-sm '>{card.desc}</p>
//                   </div>
//                 </SwiperSlide>
//               ))
//             }

//           </Swiper>
//         </div> */}

//         <div className='absolute right-0 top-0 h-full z-20 w-52 flex flex-col justify-center items-end pr-4 gap-3 bg-gradient-to-r from-white/0 to-white'>
//           <TfiArrowCircleLeft size={32} onClick={leftSlideHandler} className={`${cardsSlided ? "opacity-100 cursor-pointer" : "opacity-30"}`} />
//           <TfiArrowCircleRight size={32} onClick={rightSlideHandler} className={`${cardsSlided ? "opacity-30" : "opacity-100 cursor-pointer"}`} />
//         </div>
        
//       </div>
//     </div>
//   );
// };


// export default UpcomingServices;