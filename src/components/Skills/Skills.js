import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Switch from "../../store/Switch";
import SkillsTab from "./SkillsTab";

const Skills = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <Switch fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 className="display-4 pb-5 text-center">{props.heading}</h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={props.hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={props.softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Switch>
  );
};

export default Skills;
