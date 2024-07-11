import React from 'react';

const ProjectItem = ({ imageSrc, projectTitle, githubLink, demoLink }) => {
  return (
    <div className="border border-gray-300 bg-gray-100 rounded-xl p-6 flex flex-col items-center overflow-hidden">
      <div className="flex justify-center mb-4">
        <img src={imageSrc} alt={projectTitle} className="rounded-xl w-64 h-48 object-cover" />
      </div>
      <h2 className="my-4 text-black text-xl font-semibold text-center">{projectTitle}</h2>
      <div className="flex justify-center gap-4">
        <button
          className="border border-gray-300 text-black py-2 px-4 rounded hover:bg-gray-200"
          onClick={() => window.open(githubLink, '_blank')}
        >
          Github
        </button>
        <button
          className="border border-gray-300 text-black py-2 px-4 rounded hover:bg-gray-200"
          onClick={() => window.open(demoLink, '_blank')}
        >
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
