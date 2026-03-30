import { useState } from "react";
import { useResume } from "../../Context/resumeContext";

const ProfessionalSummary = () => {
  const { setStep, updateData } = useResume();
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (summary.length < 50) {
      setError("Minimum 50 characters required");
      return;
    }

    if (summary.length > 300) {
      setError("Maximum 300 characters allowed");
      return;
    }

    setError("");
    updateData("summary", summary);
    setStep(3);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Professional Summary</h2>

      <textarea
        className="w-full border p-3 rounded"
        rows="6"
        placeholder="Write your professional summary..."
        value={summary}
        onChange={(e) => {
          setSummary(e.target.value);
          if (e.target.value.length >= 50) setError("");
        }}
      />

     
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">
          {summary.length}/300 characters
        </span>
      </div>

      
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <div className="flex justify-between">
        <button
          onClick={() => setStep(2)}
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

export default ProfessionalSummary;