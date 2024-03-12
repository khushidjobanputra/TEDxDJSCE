import React from "react";

function About() {
  return (
    <div className="w-full h-[100vh] bg-red-300 bg-[url('/src/assets/AboutImage.jpg')] bg-no-repeat bg-cover bg-center flex items-center">
      <div className="content w-[40vw]  md:ml-20 p-5 flex flex-col justify-between">
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
      </div>
    </div>
  );
}

export default About;
