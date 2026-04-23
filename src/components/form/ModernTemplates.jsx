import React, { useState } from "react";

import t1 from "../../assets/TEMP-1.png";
import t2 from "../../assets/TEMP-2.png";
import t3 from "../../assets/TEMP-3.jpg";
import t4 from "../../assets/TEMP-4.png";
import t5 from "../../assets/TEMP-5.png";
import t6 from "../../assets/TEMP-6.jpg";
import t7 from "../../assets/TEMP-7.png";
import t8 from "../../assets/TEMP-8.png";
import t9 from "../../assets/TEMP-9.png";


const templates = [t1,t2,t3,t4,t5,t6,t7,t8,t9,];

const ModernTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  return (
    <div className="template-wrapper">

      <h2>Select Template</h2>

      <div className="template-grid">
        {templates.map((temp, index) => (
          <img
            key={index}
            src={temp}
            alt="template"
            className={selectedTemplate === index ? "active" : ""}
            onClick={() => setSelectedTemplate(index)}
          />
        ))}
      </div>

      <h3>Preview</h3>
      <div className="preview">
        <img src={templates[selectedTemplate]} alt="preview" />
      </div>

    </div>
  );
};

export default ModernTemplates;