import React, { useState } from "react";

const Sidebar = ({ portfolioData, setPortfolioData }) => {
  // Temporary state for dynamic inputs
  const [newSkill, setNewSkill] = useState("");
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    link: "",
  });

  // Handle input changes for personal details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolioData((prev) => ({ ...prev, [name]: value }));
  };

  // Add new skill
  const addSkill = () => {
    if (newSkill.trim()) {
      setPortfolioData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill],
      }));
      setNewSkill("");
    }
  };

  // Add new project
  const addProject = () => {
    if (newProject.name.trim()) {
      setPortfolioData((prev) => ({
        ...prev,
        projects: [...prev.projects, newProject],
      }));
      setNewProject({ name: "", description: "", link: "" });
    }
  };

  return (
    <div className="w-1/3 bg-gray-100 p-4 h-full overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Customize Portfolio</h2>

      {/* Personal Details */}
      <div className="mb-6">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={portfolioData.name}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </label>
        <label className="block mb-2">
          Bio:
          <textarea
            name="bio"
            value={portfolioData.bio}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </label>
        <label className="block mb-2">
          Profile Picture URL:
          <input
            type="text"
            name="profilePicture"
            value={portfolioData.profilePicture}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </label>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Skills</h3>
        <div className="flex mb-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
            className="flex-grow border rounded px-2 py-1"
          />
          <button
            onClick={addSkill}
            className="bg-blue-500 text-white px-4 py-1 rounded ml-2"
          >
            Add
          </button>
        </div>
        <ul>
          {portfolioData.skills.map((skill, index) => (
            <li key={index} className="text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Projects</h3>
        <label className="block mb-2">
          Project Name:
          <input
            type="text"
            value={newProject.name}
            onChange={(e) =>
              setNewProject((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full border rounded px-2 py-1"
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            value={newProject.description}
            onChange={(e) =>
              setNewProject((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            className="w-full border rounded px-2 py-1"
          />
        </label>
        <label className="block mb-2">
          Link:
          <input
            type="text"
            value={newProject.link}
            onChange={(e) =>
              setNewProject((prev) => ({ ...prev, link: e.target.value }))
            }
            className="w-full border rounded px-2 py-1"
          />
        </label>
        <button
          onClick={addProject}
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Add Project
        </button>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-md font-semibold mb-2">Social Links</h3>
        <label className="block mb-2">
          GitHub:
          <input
            type="text"
            name="socialLinks.github"
            value={portfolioData.socialLinks?.github || ""}
            onChange={(e) =>
              setPortfolioData((prev) => ({
                ...prev,
                socialLinks: { ...prev.socialLinks, github: e.target.value },
              }))
            }
            className="w-full border rounded px-2 py-1"
          />
        </label>
        <label className="block mb-2">
          LinkedIn:
          <input
            type="text"
            name="socialLinks.linkedin"
            value={portfolioData.socialLinks?.linkedin || ""}
            onChange={(e) =>
              setPortfolioData((prev) => ({
                ...prev,
                socialLinks: { ...prev.socialLinks, linkedin: e.target.value },
              }))
            }
            className="w-full border rounded px-2 py-1"
          />
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
