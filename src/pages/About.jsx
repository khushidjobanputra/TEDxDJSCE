import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen  bg-[url('/src/assets/AboutImage.jpg')] bg-no-repeat bg-cover bg-center flex items-center p-5">
      {/* h-full */}
      <div className=" w-full">
        <div id="heading" className="text-center">
          <h1 className="inline-block  uppercase text-[#FF0000] font-semibold font-['Outfit'] text-[3vw]">
            About
          </h1>
          <span className=" text-[3vw] text-[#fff] font-semibold font-['Outfit']">
            x
          </span>
        </div>

        <div
          id="content-parent"
          className="w-full  mt-5 flex flex-col md:px-5 md:py-5"
        >
          <div
            id="left"
            className=" w-[59%] font-medium text-[1.7vw] text-[#fff] font-['Inter']"
          >
            <p>
              TEDxDJSCE is an independently organized TED event, consisting of a
              series of short, carefully curated talks that cover a wide range
              of topics - from science and technology to pressing global issues.
              Our event aims to give inspired thinkers a platform to put forth
              their ideas and expose students to new, emerging perspectives on a
              diverse range of topics that spark conversation and communication.
              We strive to create an inclusive space that amplifies ideas from
              various disciplines, backgrounds, and experiences.
            </p>
          </div>
          <div
            id="right"
            className=" w-[59%] self-end font-medium text-[#fff] font-['Inter'] text-[1.7vw] md:mt-5"
          >
            <p>
              By doing so, we aim to catalyze conversations that lead to
              innovative solutions and a deeper understanding of the world
              around us. TEDxDJSCE is more than just a series of talks; it's an
              immersive experience designed to ignite your imagination and fuel
              your passion for learning. So if you’re someone who believes in
              the transformative power of ideas, come be a part of our community
              where creativity thrives and curiosity comes alive.
            </p>
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
