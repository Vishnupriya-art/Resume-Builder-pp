import { useState } from "react";
import { ResumeProvider, useResume } from "./Context/resumeContext";

import Templates from "./components/Templates";
import Builder from "./pages/Builder";
import ResumePreview from "./components/Preview/resumePreview";
import DiffTemplates from "./components/diffTemplates/temp1/temp01";

const AppContent = () => {
  const { currentStep } = useResume();
  const [dark, setDark] = useState(false);

  return (
    // <div className={dark ? "dark" : ""}>
    //   <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
    //     {/* Dark Mode Button */}
    //     <div className="p-4">
    //       <button
    //         onClick={() => setDark(!dark)}
    //         className="bg-black text-white px-4 py-2 rounded"
    //       >
    //         Toggle Dark Mode
    //       </button>
    //     </div>

    //     {/* ROUTING */}
    //     {currentStep === 0 && <Templates />}
    //     {currentStep === 1 && <Builder />}
    //     {currentStep === 2 && <ResumePreview />}
    //   </div>
    // </div>
    <DiffTemplates />
  );
};

function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  );
}

export default App;
