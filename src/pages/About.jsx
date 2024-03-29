import React, { useEffect } from "react";
import image1 from "../assets/About-tedx-image-1.webp";
import image2 from "../assets/ted-about-2.webp";
import { motion } from "framer-motion";

function About() {
  useEffect(() => {
    document.title = "About - TEDxDJSCE"; // Set the title of the page
  }, []);

  return (
    <div className="w-full min-h-screen  bg-[url('/src/assets/AboutImage.jpg')] bg-no-repeat bg-cover bg-center flex items-center p-5">
      {/* bg-red-800 */}
      <div className="w-[100%] min-h-[90vh]">
        <motion.h1
          initial={{
            y: "-100vh",
            opacity: 1,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "cubic-bezier(0.76, 0, 0.24, 1)",
            duration: 0.4,
          }}
          className="text-['Outfit'] text-[#fff] font-semibold text-[7vw] md:text-[4vw] text-center"
        >
          ABOUT US
        </motion.h1>
        {/* 1st div */}
        <div
          id="one"
          // bg-yellow-500
          className="w-full flex flex-col items-center md:flex-row md:justify-between py-2 md:p-10 mt-[4vw] md:mt-1"
        >
          {/* bg-purple-600 */}
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "cubic-bezier(0.83, 0, 0.17, 1)",
              duration: 0.8,
              delay: 0.1,
            }}
            id="left1"
            className="md:w-[43%] md:h-full h-[25vh]  w-[75vw] px-[10vw] md:px-1 "
          >
            <img className=" rounded-xl w-full h-full" src={image1} alt="one" />
          </motion.div>
          {/* bg-black */}
          <div
            id="right1"
            className="md:w-[48%] w-full h-full px-[6vw] mt-5 md:mt-[0px] md:px-5"
          >
            <motion.h1
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-semibold text-center font-['Outfit'] text-[#fff] uppercase text-[5.5vw] md:text-[3vw]"
            >
              Ted<span className="text-red-900 normal-case">x</span>
            </motion.h1>
            <div className="w-full">
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#fff] font-['Inter'] text-[4vw] md:text-[1.4vw]"
              >
                TEDx is a grassroots initiative, created in the spirit of TED’s overall mission to research and discover “ideas worth spreading.” TEDx brings the spirit of TED to local communities around the globe through TEDx events. These events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities. TEDx events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED.
              </motion.p>
            </div>
          </div>
        </div>

        {/* 2 div */}
        <div
          id="one"
          // bg-yellow-500
          className="w-full flex flex-col items-center md:flex-row md:justify-between py-2 md:p-10 mt-[4vw] md:mt-1"
        >
          {/* bg-purple-600 */}
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "cubic-bezier(0.83, 0, 0.17, 1)",
              duration: 0.8,
              delay: 0.1,
            }}
            id="left1"
            className="md:w-[43%] md:h-full h-[25vh]  w-[75vw] px-[10vw] md:px-1 md:order-2 "
          >
            <img className=" rounded-xl w-full h-full" src={image2} alt="one" />
          </motion.div>
          {/* bg-black */}
          <div
            id="right1"
            className="md:w-[48%] w-full h-full px-[6vw] mt-5 md:mt-[0px] md:px-5"
          >
            <motion.h1
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-semibold text-center font-['Outfit'] text-[#fff] uppercase text-[5.5vw] md:text-[3vw]"
            >
              Ted<span className="text-red-900 normal-case">x</span>DJSCE
            </motion.h1>
            <div className="w-full">
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#fff] font-['Inter'] text-[4vw] md:text-[1.4vw]"
              >
                TEDxDJSCE is an independently organized TED event, consisting of a
                series of short, carefully curated talks that cover a wide range
                of topics - from science and technology to pressing global issues.
                Our event aims to give inspired thinkers a platform to put forth
                their ideas and expose students to new, emerging perspectives on a
                diverse range of topics that spark conversation and communication.
                TEDxDJSCE is more than just a series of talks; it's an
                immersive experience designed to ignite your imagination and fuel
                your passion for learning. So if you’re someone who believes in
                the transformative power of ideas, come be a part of our community
                where creativity thrives and curiosity comes alive.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

{
  /* <div className="content w-[40vw] bg-yellow-600 md:ml-20 p-5 flex flex-col justify-between">
        <div className="heading">
          <h1 className=" inline-block uppercase text-[#FF0000] font-semibold font-['Outfit'] text-[3vw]">
            About
          </h1>
          <span className="text-[#fff] font-semibold font-['Outfit'] text-[3vw]">
            x
          </span>
        </div>

        <div className="content text-[#fff] font-['Inter'] text-[1vw]">
          <p className="">
            In the spirit of ideas worth spreading, TED has created a program
            called TEDx. TEDx is a program of local, self-organized events that
            bring people together to share a TED-like experience. Our event is
            called TEDxDJSCE, where x = independently organized TED event. At
            our TEDxDJSCE event, TED Talks and interaction with professionals
            from different fields will combine to spark deep discussion and
            connection with the audience. The TED Conference provides general
            guidance for the TEDx program, but individual TEDx events, including
            ours, are self-organized.
          </p>
        </div>
      </div> */
}

// ***************IDEA 2*********************
// {/* h-full */}
// <div className=" w-full">
// <div id="heading" className="text-center">
//   <h1 className="inline-block  uppercase text-[#FF0000] font-semibold font-['Outfit'] text-[3vw]">
//     About
//   </h1>
//   <span className=" text-[3vw] text-[#fff] font-semibold font-['Outfit']">
//     x
//   </span>
// </div>

// <div
//   id="content-parent"
//   className="w-full  mt-5 flex flex-col md:px-5 md:py-5"
// >
//   <div
//     id="left"
//     className=" w-[59%] font-medium text-[1.7vw] text-[#fff] font-['Inter']"
//   >
//     <p>
//       TEDxDJSCE is an independently organized TED event, consisting of a
//       series of short, carefully curated talks that cover a wide range
//       of topics - from science and technology to pressing global issues.
//       Our event aims to give inspired thinkers a platform to put forth
//       their ideas and expose students to new, emerging perspectives on a
//       diverse range of topics that spark conversation and communication.
//       We strive to create an inclusive space that amplifies ideas from
//       various disciplines, backgrounds, and experiences.
//     </p>
//   </div>
//   <div
//     id="right"
//     className=" w-[59%] self-end font-medium text-[#fff] font-['Inter'] text-[1.7vw] md:mt-5"
//   >
//     <p>
//       By doing so, we aim to catalyze conversations that lead to
//       innovative solutions and a deeper understanding of the world
//       around us. TEDxDJSCE is more than just a series of talks; it's an
//       immersive experience designed to ignite your imagination and fuel
//       your passion for learning. So if you’re someone who believes in
//       the transformative power of ideas, come be a part of our community
//       where creativity thrives and curiosity comes alive.
//     </p>
//   </div>
// </div>
// </div>
