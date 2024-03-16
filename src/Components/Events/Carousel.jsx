import React from 'react'
import { Carousel } from "@material-tailwind/react";
const CarouselComponent = () => {
  return (
    <div className='flex items-center justify-center my-5'>
       <Carousel transition={{ duration: 1 }} className="rounded-xl my-6 md:mx-64 mx-6 w-[100vh]">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                className="h-[50vh] w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                className="h-[50vh] w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                className="h-[50vh] w-full object-cover"
              />
            </Carousel>
       </div>
  )
}

export default CarouselComponent