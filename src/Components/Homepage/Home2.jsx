import React from "react";
import Tilt from "react-parallax-tilt";

import Find from "../Find_me";

const Home2 = () => {
  return (
    <div className="bg-aboutgradient py-24 pb-24 md:px-[4vw] px-[6vw] lg:px-[10vw] bg-[#050414]">
      <h1 className="text-5xl font-sans text-white text-center">
        LET ME{" "}
        <span className="text-5xl font-sans text-sky-400 text-center">
          INTRODUCE
        </span>{" "}
        MYSELF
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-7/12 text-center md:text-left mt-8 md:mt-0 text-white">
          <p className="pt-12 text-left text-3xl text-white">
            As a passionate software developer, I've immersed myself in the
            world of programming and continuously strive for excellence. Fluent
            in languages like{" "}
            <i>
              <b className="text-sky-400">C++, JavaScript, and Python</b>
            </i>
            , I have a keen interest in crafting innovative{" "}
            <i>
              <b className="text-sky-400">Web Technologies and Products.</b>
            
            </i>
            .
            <br />
            <br />
            My journey is fueled by a deep-seated curiosity to build impactful
            solutions that resonate with users. Leveraging tools like{" "}
            <b className="purple">Node.js</b> and modern JavaScript libraries
            and frameworks such as{" "}
            <i>
              <b className="purple">React.js</b>
            </i>
            , I bring ideas to life, one line of code at a time.
            <br />
            <br />
            Join me as I embark on this exciting journey of innovation and
            creativity, where every challenge is an opportunity to learn and
            grow.
          </p>
        </div>
        <div className="md:w-5/12 flex justify-center md:justify-end pt-12">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-sky-400 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src="/pro1.jpg"
              alt=""
              className="h-full w-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(47,205,216,0.50)]"
            />
          </Tilt>
        </div>
      </div>
       <Find className='pt-4'/>
    </div>
  );
};

export default Home2;
