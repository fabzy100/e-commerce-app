import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container flex justify-around h-full mx-auto">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center font-semibold uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">Fresh Fashion Finds<br />
          <span className="font-light">new collection</span></h1>
          <Link to={'/'} className='self-start font-semibold uppercase border-b-2 border-primary'>Discover More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;