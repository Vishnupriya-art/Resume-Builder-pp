import { useState } from "react";
import { useResume } from "../../Context/resumeContext";
import ProjectCard from "./ProjectCard";

const ProjectsForm = () => {
  const { resumeData, updateData, setStep } = useResume();

  const [project, setProject] = useState({
    title: "",
    description: "",
    techStack: "",
    url: ""
  });

  const projects = resumeData.projects || [];

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const addProject = () => {
    if (!project.title) return;

    const updatedProjects = [...projects, project];
    updateData("projects", updatedProjects);

    setProject({
      title: "",
      description: "",
      techStack: "",
      url: ""
    });
  };

  const handleNext = () => {
    setStep(7);
  };

  const handleBack = () => {
    setStep(5);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Projects</h2>

      <input
        name="title"
        placeholder="Project Title"
        value={project.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={project.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="techStack"
        placeholder="Tech Stack"
        value={project.techStack}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="url"
        placeholder="Project URL"
        value={project.url}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        onClick={addProject}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Project
      </button>

      {/* Project List */}
      {projects.map((p, index) => (
        <ProjectCard key={index} project={p} />
      ))}

      <div className="flex justify-between">
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