import { useState } from "react";
import { ResumeProvider } from "./Context/resumeContext";
import Builder from "./pages/Builder";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ResumeProvider>
      <div className={dark ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
          <div className="p-4">
            <button
              onClick={() => setDark(!dark)}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Toggle Dark Mode
            </button>
          </div>

          <Builder />
        </div>
      </div>
    </ResumeProvider>
  );
}

export default App;
