import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";
import Find from "../Find_me";

const Home2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-aboutgradient py-24 pb-24 md:px-[4vw] px-[6vw] lg:px-[10vw] bg-[#050414]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl font-sans text-white text-center"
      >
        LET ME{" "}
        <span className="text-5xl font-sans text-sky-400 text-center">
          INTRODUCE
        </span>{" "}
        MYSELF
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col-reverse md:flex-row justify-between items-center"
      >
        <div className="md:w-7/12 text-center md:text-left mt-8 md:mt-0 text-white">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-12 text-left text-3xl text-white"
          >
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
            <b className="text-sky-400">Node.js</b> and modern JavaScript
            libraries and frameworks such as{" "}
            <i>
              <b className="text-sky-400">React.js</b>
            </i>
            , I bring ideas to life, one line of code at a time.
            <br />
            <br />
            Join me as I embark on this exciting journey of innovation and
            creativity, where every challenge is an opportunity to learn and
            grow.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="md:w-5/12 flex justify-center md:justify-end pt-12"
        >
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
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        <Find className="pt-4" />
      </motion.div>
    </motion.div>
  );
};

export default Home2;