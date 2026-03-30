import { useState } from "react";
import { useResume } from "../../Context/resumeContext";

const CertificationsForm = () => {
  const { setStep, updateData } = useResume();

  const [certifications, setCertifications] = useState([
    { name: "", organization: "", year: "" }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...certifications];
    updated[index][field] = value;
    setCertifications(updated);
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      { name: "", organization: "", year: "" }
    ]);
  };

  const removeCertification = (index) => {
    const updated = certifications.filter((_, i) => i !== index);
    setCertifications(updated);
  };

  const handleNext = () => {
    updateData("certifications", certifications);
    setStep(8);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Certifications</h2>

      {certifications.map((cert, index) => (
        <div key={index} className="border p-4 rounded space-y-2">

          <input
            className="w-full border p-2 rounded"
            placeholder="Certification Name"
            value={cert.name}
            onChange={(e) =>
              handleChange(index, "name", e.target.value)
            }
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Issuing Organization"
            value={cert.organization}
            onChange={(e) =>
              handleChange(index, "organization", e.target.value)
            }
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Year"
            value={cert.year}
            onChange={(e) =>
              handleChange(index, "year", e.target.value)
            }
          />

          {certifications.length > 1 && (
            <button
              onClick={() => removeCertification(index)}
              className="text-red-500"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addCertification}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Certification
      </button>

      <div className="flex justify-between">
        <button
          onClick={() => setStep(6)}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default CertificationsForm;