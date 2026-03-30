import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import { useResume } from "../../Context/resumeContext";

const ResumePreview = () => {
  const { resumeData, setStep } = useResume();
  const resumeRef = useRef(); 
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  const downloadPDF = () => {
    const element = resumeRef.current;
    const options = {
      margin: 0.5,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="p-4">

      <div className="flex justify-end mb-4">
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>

  
      <div
        ref={resumeRef}
        className="space-y-6 bg-white p-6 shadow-md max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-center">Resume Preview</h2>

       
        <div className="border p-4 rounded">
          <div className="flex justify-between">
            <h3 className="font-semibold">Personal Info</h3>
            <button onClick={() => setStep(1)} className="text-blue-500">
              Edit
            </button>
          </div>
          <p>{resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}</p>
          <p>{resumeData.personalInfo.email}</p>
          <p>{resumeData.personalInfo.phone}</p>
        </div>

        
        <div className="border p-4 rounded">
          <div className="flex justify-between">
            <h3 className="font-semibold">Summary</h3>
            <button onClick={() => setStep(2)} className="text-blue-500">
              Edit
            </button>
          </div>
          <p>{resumeData.summary}</p>
        </div>


        <div className="border p-4 rounded">
          <div className="flex justify-between">
            <h3 className="font-semibold">Skills</h3>
            <button onClick={() => setStep(5)} className="text-blue-500">
              Edit
            </button>
          </div>
          {resumeData.skills?.map((skill, i) => (
            <p key={i}>{skill.name} - {skill.level}</p>
          ))}
        </div>


        <div className="border p-4 rounded">
          <div className="flex justify-between">
            <h3 className="font-semibold">Projects</h3>
            <button onClick={() => setStep(6)} className="text-blue-500">
              Edit
            </button>
          </div>
          {resumeData.projects?.map((p, i) => (
            <div key={i}>
              <p className="font-medium">{p.title}</p>
              <p>{p.description}</p>
            </div>
          ))}
        </div>

       
        <div className="border p-4 rounded">
          <div className="flex justify-between">
            <h3 className="font-semibold">Certifications</h3>
            <button onClick={() => setStep(7)} className="text-blue-500">
              Edit
            </button>
          </div>
          {resumeData.certifications?.map((c, i) => (
            <p key={i}>{c.name} - {c.organization} ({c.year})</p>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>

      {loading && <div className="text-blue-500 font-medium">Saving resume...</div>}
      {success && <div className="text-green-600 font-medium">Resume submitted successfully!</div>}
    </div>
  );
};

export default ResumePreview;