import React from 'react';
import { NavbarWithMegaMenu } from "../Components/Events/Navbar";
import {Example} from "../Components/Events/Video"
import {AccordionComponent} from "../Components/Events/Accordion"
import { PopoverWithImage } from '../Components/Events/Info';
const Collaborate = () => {
  return (
    <div>
      <div className='home__Container'>
        <div className='home__bgLayer'>
          {/* <NavbarWithMegaMenu/> */}
          <div className='flex flex-col justify-center items-center'>
            <div className='w-[60vh]'>
              <p className='text-white text-4xl text-center my-10 font-bold py-2'>WHAT MAKES US A <span className=' text-red-500'> VALUABLE INVESTMENT ?</span></p>
            </div>
            <div className='grid grid-cols-2 gap-20 mx-20 mt-10'>
            
             <div>
                <Example/>
             </div>

             <div className=' flex flex-col mt-16'>
                <PopoverWithImage/>
             </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaborate;
