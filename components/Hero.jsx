import React, { useContext } from 'react'
import { EventContext } from '@/contexts/EventContext';
//components
import Searchbar from './Searchbar/Searchbar'

const Hero = () => {
    const { handleClearSearch} = useContext
    (EventContext);
  //console.log(showEventList);
  return (
    <section className='h-screen xl:h-[800px] mb-16 relative'>
        <div className="conatainer mx-auto h-full flex flex-col justify-center items-center pt-12 xl:pt-0">
          
            <div className='w-full max-w-[648px] text-center mx-auto flex flex-col gap-2'>
            <div className="pretitle">Uncover New Moments</div>
            <h1 className="h1">Discover Events <br /> & Experiences
            </h1>
            <p className="text-sm xl:text-lg font-light text-white/80 mb-4 xl:mb-12 max-w-[480px]
            xl:max-w-none mx-auto">Join a vibrant community where you can explore global happenings and share memorable moments with friends and family.
            </p>
        </div>

        <div>
    <Searchbar />
     
     <div className='w-full mt-3 relative flex flex-col justify-center '>
      <p className='text-sm italic font-light text-white/70 text-center mb-3 xl:mb-0'>
      please select at least one field or leave them empty to see all events</p>
      {/* clear Search */}
     <button 
     className= "text-accent text-sm xl:absolute right-0" 
     onClick={() => handleClearSearch()}
     >
        clear search
      </button>

        </div>
      </div>
      </div>
      {/* bg_1 */}
      <div className='absolute bg-primary top-0 left-0 w-[50vw] h-full bg-hero_1 bg-blend-color-dodge bg-no-repeat bg-cover -z-10 opacity-50'></div>
      {/* bg_2 */}
      <div className='absolute bg-primary top-0 right-0 w-[50vw] h-full bg-hero_2 bg-blend-lighten bg-no-repeat bg-cover -z-10 opacity-50'></div>

    </section>
  )
}

export default Hero