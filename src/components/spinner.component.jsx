import React from "react";
import "./spinner.styles.scss";

const Spinner = ({ size, color, thickness }) => {
  return (
    <div
      className="loading-spinner"
      style={{
        height: size,
        width: size,
        border: `${thickness}px solid ${color}`,
        borderTop: `${thickness}px solid #383636`,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default Spinner;
