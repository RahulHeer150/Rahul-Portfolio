import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img
        className=" object-cover"
        src={props.imgPath}
        alt="card-img"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-2">{props.title}</h2>
        <p className="text-gray-300 text-justify mb-4">{props.description}</p>

        {/* Tech Stack Section */}
        <div className="tech-stack flex justify-center mt-4">
          {Array.isArray(props.techStack) &&
            props.techStack.map((tech, index) => (
              <img
                key={index}
                src={tech}
                alt={`tech-stack-${index}`}
                className="tech-stack-img h-10 mx-2 object-contain"
              />
            ))}
        </div>

        {/* Horizontal Line */}
        <hr className="my-4 border-gray-600" />

        <div className="flex justify-center space-x-4">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            <BsGithub className="inline-block mr-2" />
            {props.isBlog ? "Blog" : "GitHub"}
          </a>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              <CgWebsite className="inline-block mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;