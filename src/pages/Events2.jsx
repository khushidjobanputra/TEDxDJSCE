import React, { useEffect } from 'react'
import Carousel from '../Components/Events/Carousel'
import AccordionComponent from '../Components/Events/Accordion'
// import {clean_room, unclean_room, image} from '../assets/events'
import clean_room from '../assets/events/clean_room.png'
import image from '../assets/events/image.png'
import unclean_room from '../assets/events/unclean_room.png'
import { motion } from "framer-motion";
import CarouselSlider from './CarouselSlider';

const Events2 = () => {

  useEffect(() => {
    document.title = "Events - TEDxDJSCE"; // Set the title of the page
  }, []);

  const slides2 = [
    {url: clean_room},
    {url: image},
    {url: clean_room},
    {url: image},
    {url: unclean_room},
  ];

  return (
    <div>
       {/* <NavbarWithMegaMenu/> */}
       <motion.div 
       initial={{ x: "-100vw" }} 
       animate={{ x: 0 }} 
       transition={{ type: "spring", stiffness: 40 }} 
       className='text-red-500 font-bold text-5xl flex justify-start mx-32 mt-8 md:mt-[20vh] items-center'>
        EVENT <span className=' text-white'>x</span>
       </motion.div>
       <div style={{width: '700px', height: '450px', marginLeft: '390px', marginTop: '30px'}}>
            {/* <Typography variant='h3' style={{color: 'white', marginLeft: '130px',marginBottom: '20px', background: 'linear-gradient(-50deg, #37BFD1, #C1F3F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>After cleaning images</Typography> */}
            <CarouselSlider slides={slides2}/>
        </div>
         {/* <Carousel/> */}
         {/* <AccordionComponent/>  */}
    </div>
  )
}

export default Events2