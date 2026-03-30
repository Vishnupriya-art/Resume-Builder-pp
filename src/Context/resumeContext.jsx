import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {

  const [step, setStep] = useState(1);

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
        step,
        setStep,
        resumeData,
        updateData
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);