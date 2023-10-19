import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <h1 id="main-section-header" className="mt-5">Resume</h1>
      <hr id="main-section-hr" />
      <a
        id="resume-link"
        className="mb-4"
        href={`./Assets/Resume/resume.pdf`}
        download
      >
        Download my Resume
      </a>
      <div id="resume-wrapper" className="mb-5">
        <div>
          <h1 className="text-center">Backend Skills</h1>
          <ul className="resume-list">
            <li>Node</li>
            <li>Express</li>
            <li>Vercel</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            
          </ul>
        </div>
        <div>
          <h1>Frontend Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Resume;
