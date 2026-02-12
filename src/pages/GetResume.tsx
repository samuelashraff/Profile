import FilePreview from "reactjs-file-preview";
import singlePageResume from "../assets/CV (Single-Page) - Samuel Ashraff.pdf";
import twoPageResume from "../assets/CV - Samuel Ashraff.pdf";
import "../styles/get-resume.css";

export default function GetResume() {
  return (
    <div className="get-resume-container">
      <div className="resume-header">
        <h1>Choose Your Resume</h1>
        <p>Select the version that works best for you</p>
      </div>

      <div className="resume-cards">
        {/* Single Page Card */}
        <div className="resume-card">
          <div className="preview-container">
            <FilePreview preview={singlePageResume} clarity={1500} />
          </div>
          <div className="card-content">
            <h2>Single Page</h2>
            <p className="description">
              Single-page resume
            </p>
            <a
              href={singlePageResume}
              download="SamuelAshraff_Resume_SinglePage.pdf"
              className="download-btn"
            >
              Download
            </a>
          </div>
        </div>

        {/* Two Page Card */}
        <div className="resume-card">
          <div className="preview-container">
            <FilePreview preview={twoPageResume} clarity={1500} />
          </div>
          <div className="card-content">
            <h2>Two Page</h2>
            <p className="description">
              Additionally showcases my recent certifications and projects.
            </p>
            <a
              href={twoPageResume}
              download="SamuelAshraff_Resume_TwoPage.pdf"
              className="download-btn"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
