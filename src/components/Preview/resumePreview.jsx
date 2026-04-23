import { useRef } from "react";
import html2pdf from "html2pdf.js";
import { useResume } from "../../Context/resumeContext";

const ResumePreview = () => {
  const { resumeData } = useResume();
  const resumeRef = useRef();

  const downloadPDF = () => {
    const element = resumeRef.current;

    const options = {
      margin: 0,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: {
        unit: "px",
        format: [794, 1123],
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Download Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>

      <div className="flex justify-center">
        <div
          ref={resumeRef}
          className="bg-white w-[794px] min-h-[1123px] p-10 text-gray-800"
        >
          {/* PERSONAL INFO */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold uppercase">
              {resumeData?.personalInfo?.firstName || "First"}{" "}
              {resumeData?.personalInfo?.lastName || "Last"}
            </h1>
            <p className="text-sm">
              {resumeData?.personalInfo?.email || "email@email.com"} |{" "}
              {resumeData?.personalInfo?.phone || "0000000000"}
            </p>
            <p className="text-sm">
              {resumeData?.personalInfo?.location || "Location"}
            </p>
          </div>

          {/* SUMMARY */}
          <div className="mb-6">
            <h2 className="font-bold border-b mb-2">
              Professional Summary
            </h2>
            <p>{resumeData?.summary || "Add summary"}</p>
          </div>

          {/* EDUCATION */}
          {/* EDUCATION */}
<div className="mb-8">
  <h2 className="text-lg font-bold text-blue-700 border-b-2 border-blue-700 pb-1 mb-2">
    Education
  </h2>

  {resumeData.education?.map((edu, i) => (
    <div key={i} className="mb-3">
      <p className="font-semibold">{edu.degree}</p>

      <p className="text-sm">
        {edu.institution}{" "}
        {edu.startYear && edu.endYear
          ? `(${edu.startYear} - ${edu.endYear})`
          : ""}
      </p>
    </div>
  ))}
</div>
          {/* EXPERIENCE */}
         {/* EXPERIENCE */}
<div className="mb-8">
  <h2 className="text-lg font-bold text-blue-700 border-b-2 border-blue-700 pb-1 mb-2">
    Experience
  </h2>

  {resumeData.experience?.map((exp, i) => (
    <div key={i} className="mb-3">
      <p className="font-semibold">
        {exp.company}
        {exp.startYear && exp.endYear
          ? ` (${exp.startYear} - ${exp.endYear})`
          : ""}
      </p>

      <p className="text-sm">{exp.role}</p>
      <p className="text-sm mt-1">{exp.description}</p>
    </div>
  ))}
</div>
          {/* SKILLS */}
          <div className="mb-6">
            <h2 className="font-bold border-b mb-2">Skills</h2>
            {resumeData?.skills?.length > 0 ? (
              <ul className="grid grid-cols-2 gap-2">
                {resumeData.skills.map((skill, i) => (
                  <li key={i}>• {skill.name}</li>
                ))}
              </ul>
            ) : (
              <p>No skills added</p>
            )}
          </div>

          {/* PROJECTS */}
          <div className="mb-6">
            <h2 className="font-bold border-b mb-2">Projects</h2>
            {resumeData?.projects?.length > 0 ? (
              resumeData.projects.map((p, i) => (
                <div key={i} className="mb-2">
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm">{p.description}</p>
                </div>
              ))
            ) : (
              <p>No projects added</p>
            )}
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h2 className="font-bold border-b mb-2">
              Certifications
            </h2>
            {resumeData?.certifications?.length > 0 ? (
              resumeData.certifications.map((c, i) => (
                <p key={i} className="text-sm">
                  {c.name} - {c.organization} ({c.year})
                </p>
              ))
            ) : (
              <p>No certifications added</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;