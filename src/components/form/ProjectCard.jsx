import { useState } from "react";
import { useResume } from "../../Context/resumeContext";
import ProjectCard from "./ProjectCard";

const ProjectsForm = () => {
  const { resumeData, updateData, setStep } = useResume();

  
  const [project, setProject] = useState(
    resumeData.projects && resumeData.projects.length > 0
      ? resumeData.projects
      : [
          {
            title: "",
            description: "",
            techStack: "",
            url: ""
          }
        ]
  );

  
  const projects = resumeData.projects || [];

  
    const handleChange = (index, e) => {
  const updatedProjects = [...project];
  updatedProjects[index][e.target.name] = e.target.value;
  setProject(updatedProjects);
};

 
  const addProject = () => {
    setProject([
      ...project,
      {
        title: "",
        description: "",
        techStack: "",
        url: ""
      }
    ]);
  };

 
  const handleNext = () => {
    updateData("projects", project);
    setStep(7);
  };

  const handleBack = () => {
    setStep(5);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Projects</h2>

     
      {project.map((proj, index) => (
        <div key={index} className="space-y-2 border p-3 rounded">
          <input
            name="title"
            placeholder="Project Title"
            value={proj.title}
            onChange={(e) => handleChange(index, e)}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={proj.description}
            onChange={(e) => handleChange(index, e)}
            className="w-full border p-2 rounded"
          />

          <input
            name="techStack"
            placeholder="Tech Stack"
            value={proj.techStack}
            onChange={(e) => handleChange(index, e)}
            className="w-full border p-2 rounded"
          />

          <input
            name="url"
            placeholder="Project URL"
            value={proj.url}
            onChange={(e) => handleChange(index, e)}
            className="w-full border p-2 rounded"
          />
        </div>
      ))}

      {/* Add project button */}
      <button
        onClick={addProject}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Project
      </button>

      {/* Display all saved projects using ProjectCard */}
      {projects.map((p, index) => (
        <ProjectCard key={index} project={p} />
      ))}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectsForm;