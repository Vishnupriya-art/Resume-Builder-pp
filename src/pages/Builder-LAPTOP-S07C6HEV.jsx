import { useResume } from "../Context/resumeContext";

import PersonalForm from "../components/form/PersonalForm";
import ProfessionalSummary from "../components/form/ProfessionalSummary";
import EducationForm from "../components/form/EducationForm";
import ExperienceForm from "../components/form/ExperienceForm";
import SkillsForm from "../components/form/SkillsForm";
import ProjectCard from "../components/form/ProjectCard";
import CertificationsForm from "../components/form/CertificationsForm";
import ResumePreview from "../components/Preview/resumePreview";

const Builder = () => {
  const { step } = useResume();

  return (
    <div className="max-w-3xl mx-auto p-6">
      {step === 1 && <PersonalForm />}
      {step === 2 && <ProfessionalSummary />}
      {step === 3 && <EducationForm />}
      {step === 4 && <ExperienceForm />}
      {step === 5 && <SkillsForm />}
      {step === 6 && <ProjectCard />}
      {step === 7 && <CertificationsForm />}
      {step === 8 && <ResumePreview />}
    </div>
  );
};

export default Builder;