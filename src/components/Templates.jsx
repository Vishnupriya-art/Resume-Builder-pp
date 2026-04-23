import React from "react";

import t1 from "../assets/TEMP-1.png";
import t2 from "../assets/TEMP-2.png";
import t3 from "../assets/TEMP-3.jpg";
import t4 from "../assets/TEMP-4.png";
import t5 from "../assets/TEMP-5.png";
import t6 from "../assets/TEMP-6.jpg";
import t7 from "../assets/TEMP-7.png";
import t8 from "../assets/TEMP-8.png";
import t9 from "../assets/TEMP-9.png";

import { useResume } from "../Context/resumeContext";

const Templates = () => {
  const { setSelectedTemplate, setCurrentStep } = useResume();

  const templates = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

  const handleSelect = (index) => {
    setSelectedTemplate(index + 1);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        Select Resume Template
      </h1>

      <div className="templates">
        {templates.map((temp, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 overflow-hidden"
          >
            <img
              src={temp}
              alt={`template-${index}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;