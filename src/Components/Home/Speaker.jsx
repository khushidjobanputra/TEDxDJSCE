import React from "react";
import speaker1nm from "../../assets/Home-images/speaker1nm.webp";

function Speaker({ name, content }) {
  return (
    // bg-purple-700
    <div className=" w-[80%] ml-[10%] lg:h-[50vh] mt-[2vw] pt-2 pb-2 md:p-2 flex flex-col md:flex-row md:gap-10 items-center">
      {/* bg-yellow-700 */}
      <div id="image" className="w-[40%]  md:h-full">
        <img src={speaker1nm} className="w-full md:h-full" alt="" />
      </div>
      {/* bg-blue-800 */}
      <div id="content" className=" w-[75%] md:w-[55%] md:h-full ">
        <h1 className="text-center md:text-[3.1vw] font-normal">Vijay Singh</h1>
        <p className="font-semibold text-[1.3vw]">
          hg9fdhh ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          dolor est beatae vero similique iusto consequuntur magni veniam sit
          asperiores maxime, eum enim cupiditate aut recusandae velit officia
          explicabo? Dolorem officia architecto sint quo, optio unde, velit, est
          voluptatibus repudiandae autem atque id tempore dicta. Laudantium cum
          non id nemo, neque sit, quas magnam, nisi quo eaque expedita.
          Accusamus non itaque delectus quam placeat omnis, voluptas dignissimos
          porro totam asperiores hic voluptate nulla. Ea ut illum similique ad
          repellendus excepturi, pariatur odio voluptatum nemo! Aut provident
          atque ad est sed blanditiis aperiam magni quia laudantium, non
          mollitia enim, ipsa aliquid.
        </p>
      </div>
    </div>
  );
}

export default Speaker;
