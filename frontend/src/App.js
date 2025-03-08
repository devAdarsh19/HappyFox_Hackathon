import React, { useState } from "react";
import ResumeUploader from "./ResumeUploader";
import Results from "./Results";
import ProjDoc from "./ProjDoc";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div>
      <h1>Resume Analyzer</h1>
      <ResumeUploader setUserData={setUserData} />
      {userData && <Results userData={userData} />}
      <ProjDoc />
    </div>
  );
}

export default App;
