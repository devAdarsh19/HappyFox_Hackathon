import React, { useState } from "react";
import ResumeUploader from "./ResumeUploader";
import Results from "./Results";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div>
      <h1>Resume Analyzer</h1>
      <ResumeUploader setUserData={setUserData} />
      {userData && <Results userData={userData} />}
    </div>
  );
}

export default App;
