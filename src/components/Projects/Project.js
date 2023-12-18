import React from "react";
import Container from "react-bootstrap/Container";
import Switch from "../../store/Switch";
import Row from "react-bootstrap/Row";

import ProjectCard from "./ProjectCard";

const dummyProject = [
  {
    name: "SavoryStop",
    description: "Online Food Service",
    svn_url: "https://github.com/abhishekrathaur80/SavoryStop",
    stargazers_count: "53.9%",
    languages_url: "https://github.com/abhishekrathaur80/SavoryStop",
    pushed_at: "2020-2-25",
  },
  {
    name: "SavoryStop",
    description: "Online Food Service",
    svn_url: "https://github.com/abhishekrathaur80/SavoryStop",
    stargazers_count: "53.9%",
    languages_url: "https://github.com/abhishekrathaur80/SavoryStop",
    pushed_at: "2020-2-25",
  },
  {
    name: "SavoryStop",
    description: "Online Food Service",
    svn_url: "https://github.com/abhishekrathaur80/SavoryStop",
    stargazers_count: "53.9%",
    languages_url: "https://github.com/abhishekrathaur80/SavoryStop",
    pushed_at: "2020-2-25",
  },
  {
    name: "SavoryStop",
    description: "Online Food Service",
    svn_url: "https://github.com/abhishekrathaur80/SavoryStop",
    stargazers_count: "53.9%",
    languages_url: "https://github.com/abhishekrathaur80/SavoryStop",
    pushed_at: "2020-2-25",
  },
];

const Project = (props) => {
  return (
    <Switch fluid id="Projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{props.heading}</h2>
        <Row>
          {dummyProject.map((project, index) => (
            <ProjectCard
              key={`dummy-${index}`}
              id={`dummy-${index}`}
              value={project}
            />
          ))}
        </Row>
      </Container>
    </Switch>
  );
};

export default Project;
