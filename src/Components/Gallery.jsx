import { useRef } from "react";
import image1 from "../assets/Events/image1.jpg";
import image2 from "../assets/Events/image2.jpg";
import image3 from "../assets/Events/image3.jpg";
import image4 from "../assets/Events/image4.png";
import image5 from "../assets/Events/image5.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
// import "../styles/carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AccordionComponent from "./Events/Accordion";

const images = [image1, image2, image3, image4, image5];

const Gallery = () => {
  return (
    <>
      
        <div
          id="gallery"
          className="relative h-screen md:w-[70vw] md:ml-[15vw] flex flex-col items-center justify-center"
        >
          <h1 className="text-center md:text-[5vw] text-[#fff] m-2 block">
            Events
          </h1>
          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination]}
            navigation={{
              prevEl: ".button-prev",
              nextEl: ".button-next",
            }}
            pagination={{ clickable: true }}
            spaceBetween={5}
            speed={600}
            slidesPerView={2}
            centeredSlides
            effect={"coverflow"}
            loop={true}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: true,
            }}
            className=" h-[60vh] md:h-[500px] w-[200vw]  md:w-[99%] mt-20 rounded-xl"
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {images.map((slide, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <img
                  src={slide}
                  alt="Event Image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-ESummitBlue-900 rounded-full flex justify-center items-center cursor-pointer z-10 button-prev text-white">
              <IoIosArrowBack />
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-ESummitBlue-900 rounded-full flex justify-center items-center cursor-pointer z-10 button-next text-white">
              <IoIosArrowForward />
            </div>
          </Swiper>
        </div>

<AccordionComponent />
      
    </>
  );
};

export default Gallery;
