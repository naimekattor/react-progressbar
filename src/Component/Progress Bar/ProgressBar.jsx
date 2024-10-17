import React from "react";
import "./ProgressBar.css";
const ProgressBar = () => {
  return (
    <div className="text-centern d-flex flex-column justify-content-center align-items-center">
      <h2 className="m-10">Progress bar</h2>
      <div className="progressbar">
        <div className="progress-per html">
          <span>90%</span>
        </div>
      </div>
      <div className="progressbar">
        <div className="progress-per react">
          <span>70%</span>
        </div>
      </div>
      <div className="progressbar">
        <div className="progress-per javascript">
          <span>75%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
