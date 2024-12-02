import React from "react";

const Preview = ({ portfolioData }) => {
  const { name, bio, skills, projects, profilePicture, socialLinks } =
    portfolioData;

  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-8 justify-start bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-8 rounded-lg shadow-lg">
      {/* Personal Details */}
      <div className="text-center mb-8">
        {profilePicture ? (
          <img
            src={profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
        )}
        <h1 className="text-3xl font-bold">{name || "Your Name"}</h1>
        <p className="text-lg">
          {bio || "Write a short bio about yourself here."}
        </p>
        <div className="bg-white w-[100%] h-1 mt-7"></div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white flex justify-center items-center text-purple-700 px-3 py-1 rounded-full text-sm shadow"
              >
                {skill}
              </span>
            ))
          ) : (
            <p>No skills added yet.</p>
          )}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="flex space-x-4">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={index}
                className="bg-white  flex flex-col items-start justify-center text-purple-700 p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-400 rounded-md mt-2 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))
          ) : (
            <p>No projects added yet.</p>
          )}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect</h2>
        <div className="flex justify-center gap-4">
          {socialLinks?.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-200"
            >
              <i className="text-2xl">Github</i>
            </a>
          )}
          {socialLinks?.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-200"
            >
              <i className="text-2xl">LinkedIn</i>
            </a>
          )}
          {/* Add other social links similarly */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
