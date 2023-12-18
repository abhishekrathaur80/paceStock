import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const SkillsBar = (props) => {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{props.skill}</p>
      <ProgressBar
        className={!props.isScrolled ? "progress" : " progress-bar-animation"}
        now={props.value}
      />
    </div>
  );
};

export default SkillsBar;
