import { useState } from "react";
import { useResume } from "../../Context/resumeContext";

const SkillsForm = () => {
  const { setStep, updateData } = useResume();

  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("Beginner");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (!skillName) return;

    setSkills([
      ...skills,
      { name: skillName, level: skillLevel }
    ]);

    setSkillName("");
    setSkillLevel("Beginner");
  };

  const removeSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  const handleNext = () => {
    updateData("skills", skills);
    setStep(6);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Skills</h2>

      {/* Input Section */}
      <div className="flex gap-2">
        <input
          className="w-full border p-2 rounded"
          placeholder="Skill Name"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <button
          onClick={addSkill}
          className="bg-green-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Loop Rendering */}
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span>
            {skill.name} - {skill.level}
          </span>

          <button
            onClick={() => removeSkill(index)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setStep(4)}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SkillsForm;