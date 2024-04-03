import React from "react";
import speaker1nm from "../../assets/Home-images/speaker1nm.webp";

function Speaker({ name, content, index }) {
  return (
    // bg-purple-700
    <div className="mt-[3vw] w-[80%] ml-[10%] lg:h-[65vh] pt-2 pb-2 md:p-2 flex flex-col md:flex-row md:gap-10 items-center">
      {/* bg-yellow-700 */}
      <div
        id="image"
        className={` w-full md:w-[35%]  md:h-full ${
          index % 2 != 0 ? "md:order-2" : ""
        }`}
      >
        <img src={speaker1nm} className={`w-full md:h-full `} alt="" />
      </div>
      {/* bg-blue-800 */}
      <div id="content" className=" w-full md:w-[55%] md:h-full ">
        <h1 className="text-center text-[10vw] md:text-[3.1vw] font-normal text-white">
          {name}
        </h1>
        <p className="font-semibold text-[5vw] md:text-[1.5vw] text-white">{content}</p>
      </div>
    </div>
  );
}

export default Speaker;
