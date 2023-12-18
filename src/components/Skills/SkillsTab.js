import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection(props) {
  return (
    <>
      {props.skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={props.isScrolled}
        />
      ))}
    </>
  );
}

const SkillsTab = (props) => {
  return (
    <>
      <Col xs={12} md={6}>
        {" "}
        <SkillsSection
          skills={props.skills.slice(0, Math.floor(props.skills.length / 2))}
          isScrolled={props.isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={props.skills.slice(
            Math.floor(props.skills.length / 2),
            props.skills.length
          )}
        />
      </Col>
    </>
  );
};

export default SkillsTab;
