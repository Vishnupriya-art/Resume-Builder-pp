import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {

  // Page routing
  const [currentStep, setCurrentStep] = useState(0);

  // Builder form steps
  const [step, setStep] = useState(1);

  // Selected template
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      portfolio: ""
    },
    summary: "",
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certifications: []
  });

  const updateData = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        step,
        setStep,
        selectedTemplate,
        setSelectedTemplate,
        resumeData,
        updateData
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);