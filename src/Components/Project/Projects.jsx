import React from "react";
import ProjectCard from "./ProjectCard"; // Assuming you have a ProjectCard component
import Particle from "../Particle";
import profile from "../../Assets/profile.png"; // Assuming you have a profile image


function Projects() {
  const html =
    "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white";
  const css =
    "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white";
  const js =
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E";
  const react =
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB";
  const tailwindcss =
    "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white";
  const bootstrap =
    "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white";
  const node =
    "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white";
  const express =
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB";
  const mongo =
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white";
  const firebase =
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase";
  const canva =
    "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white";
  const restapi =
    "https://img.shields.io/badge/REST_API-%234F4F4F.svg?style=for-the-badge&logo=rest-api&logoColor=white";
  const postman =
    "https://img.shields.io/badge/Postman-%234F4F4F.svg?style=for-the-badge&logo=postman&logoColor=red";

  return (
    <div className="bg-gray-900 text-white py-10">
      <Particle />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 mt-6">
          My Recent <span className="text-sky-400">Works</span>
        </h1>
        <p className="text-center text-xl mb-10">
          Here are a few projects I've worked on recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            imgPath={profile}
            techStack={
              <div className="tech-stack">
                <img src={react} alt="React" className="tech-stack-img" />
                <img src={express} alt="Express" className="tech-stack-img" />
                <img src={mongo} alt="MongoDB" className="tech-stack-img" />
                <img src={node} alt="Node.js" className="tech-stack-img" />
                <img src={tailwindcss} alt="Tailwind CSS" className="tech-stack-img" />
                <img src={postman} alt="Postman" className="tech-stack-img" />
                <img src={restapi} alt="REST API" className="tech-stack-img" />
                <img src={canva} alt="Canva" className="tech-stack-img" />
              </div>
            }
            isBlog={false}
            title="Personal Portfolio Website"
            description="A personal portfolio website showcasing my skills, projects, and experiences. Built with React, Tailwind-CSS, and Framer-motion, it features a responsive design and a user-friendly interface."
            ghLink=""
            demoLink="https://ptustudyzone.vercel.app/"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
