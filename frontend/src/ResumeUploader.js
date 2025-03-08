import React, { useState } from "react";
import axios from "axios";

const ResumeUploader = ({ setUserData }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    return;
  };

  const uploadResume = async () => {
    if (!file) {
      return alert("Please select a file to upload");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http://127.0.0.1:8000/upload-resume/", 
            {
                method: "POST",
                body: formData
            }
        )

        if (!response.ok) {
            throw new Error(`HTTP error | Status : ${response.status}`);
        }

        const data = await response.json();
        setUserData(data);
    } catch (error) {
        console.error(error);
    }

    //   const response = await axios.post(
    //     "http://127.0.0.1:8000/upload-resume/",
    //     formData,
    //     { headers: { "Content-Type": "multipart/form-data" } }
    //   );

    //   setUserData(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={uploadResume}>Analyze Resume</button>
    </div>
  );
};

export default ResumeUploader;
