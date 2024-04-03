//speaker.jsx
import React from "react";

function Speaker({ name, content, imageSrc, index }) {
  // Log the value of imageSrc
  console.log("Image Source:", imageSrc);

  return (
    <div className="mt-[3vw] w-[80%] ml-[10%] lg:h-[65vh] pt-2 pb-2 md:p-2 flex flex-col md:flex-row md:gap-10 items-center">
      <div
        id="image"
        className={`w-full md:w-[35%]  md:h-full ${
          index % 2 !== 0 ? "md:order-2" : ""
        }`}
      >
        <img src={imageSrc} className="w-full h-full" alt={name} />
      </div>
      <div id="content" className="w-full md:w-[55%] md:h-full">
        <h1 className="text-center font-sans font-black text-[10vw] md:text-[3.1vw]  text-white">
          {name}
        </h1>
        <p className="font-semibold font-mono text-[5vw] md:text-[1.5vw] text-white">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Speaker;


