import react, { useState } from "react";
import axios from "axios";

const Results = ({ userData }) => {
  const [projects, setProjects] = useState("");

  const generateProjects = async () => {
    if (!userData.Skills) return alert("No skills detected");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/recommend-projects/",
        new URLSearchParams({ skills: userData.Skills })
      );
      setProjects(response.data.projects);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Extracted Resume Details</h2>
      {userData && (
        <ul>
          {Object.entries(userData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      )}

      <button onClick={generateProjects}>Generate Project Ideas</button>
      {projects && (
        <div>
          <h2>Recommended Projects</h2>
          <pre>{projects}</pre>
        </div>
      )}
    </div>
  );
};

export default Results;
