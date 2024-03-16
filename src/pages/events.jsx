import React from 'react'
import Carousel from '../Components/Events/Carousel'
import AccordionComponent from '../Components/Events/Accordion'
import { motion } from "framer-motion";
const Events = () => {
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
         <Carousel/>
         <AccordionComponent/>
    </div>
  )
}

export default Events