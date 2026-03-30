import { useResume } from "../../Context/resumeContext";

const Stepper = () => {
  const { step, setStep } = useResume();

  const steps = [
    "Personal",
    "Summary",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Certifications",
    "Preview"
  ];

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {steps.map((s, i) => (
        <div
          key={i}
             onClick={() => setStep(i + 1)}
          className={`px-3 py-1 rounded text-sm ${
            step === i + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {s}
        </div>
      ))}
    </div>
  );
};

export default Stepper;