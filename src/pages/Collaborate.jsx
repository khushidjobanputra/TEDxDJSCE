import React, { useEffect } from 'react';
import {Example} from "../Components/Events/Video"
import { PopoverWithImage } from '../Components/Events/Info';
const Collaborate = () => {

  useEffect(() => {
    document.title = "Collaborate - TEDxDJSCE"; // Set the title of the page
  }, []);

  return (
    <div>
      <div className='home__Container'>
        <div className='home__bgLayer'>
          {/* <NavbarWithMegaMenu/> */}
          <div className='flex flex-col justify-center items-center'>
            <div className='md:w-[60vh] w-[30vh]'>
              <p className='text-white text-xl md:text-4xl text-center my-10 font-bold py-2'>WHAT MAKES US A <span className=' text-red-500'> VALUABLE INVESTMENT ?</span></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20 md:mx-20 mx-4 mt-10'>
            
             <div>
                <Example/>
             </div>

             <div className=' flex flex-col md:mt-16 mt-2'>
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
