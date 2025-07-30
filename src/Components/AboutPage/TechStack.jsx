// import React from "react";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit
// } from "react-icons/di";
// import {
//   SiFirebase,
//   SiNextdotjs
// } from "react-icons/si";

// const Techstack = () => {
//   const skills = [
//     { icon: <CgCPlusPlus size={60} /> },
//     { icon: <DiJavascript1 size={60} /> },
//     { icon: <DiNodejs size={60} /> },
//     { icon: <DiReact size={60} /> },
//     { icon: <DiMongodb size={60} /> },
//     { icon: <SiNextdotjs size={60} /> },
//     { icon: <DiGit size={60} /> },
//     { icon: <SiFirebase size={60} /> },
//     { icon: <DiPython size={60} /> },
//   ];

//   return (
//     <div className="py-12 px-4 bg-[#050414]">
//       <h2 className="text-4xl text-white font-semibold text-center mb-12">
//         Professional <span className="text-purple-400">Skillset</span>
//       </h2>
//       <div className="flex flex-wrap justify-center gap-8r">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="w-1/3 md:w-1/6 flex items-center justify-center text-white text-4xl border border-purple-500 rounded-lg hover:scale-110 transition-transform duration-300 shadow-md"
//           >
//             {skill.icon}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Techstack;
import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiMongodb,
  DiGit,
  DiPython,
} from "react-icons/di";
import { SiNextdotjs, SiFirebase } from "react-icons/si";

const Techstack = () => {
  const skills = [
    { icon: <CgCPlusPlus size={60} /> },
    { icon: <DiJavascript1  size={60}/> },
    { icon: <DiNodejs  size={60}/> },
    { icon: <DiReact  size={60}/> },
    { icon: <DiMongodb  size={60}/> },
    { icon: <SiNextdotjs size={60} /> },
    { icon: <DiGit  size={60}/> },
    { icon: <SiFirebase  size={60}/> },
    { icon: <DiPython  size={60}/> },
  ];

  return (
    <div className="bg-[#050414] py-20 px-[5vw]">
      <h2 className="text-center text-white text-4xl md:text-5xl font-semibold mb-16">
        Professional <span className="text-sky-400">Skillset</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full h-full px-3 py-6 text-7xl flex items-center justify-center text-white border border-sky-400 rounded-md shadow-[0_0_10px_rgba(165,82,255,0.2)] hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
