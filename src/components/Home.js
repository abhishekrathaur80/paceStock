import React from "react";
import { skills, experiences, repos, about, mainBody } from "../store/config";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Project from "./Projects/Project";
import AboutMySelf from "./AboutMySelf";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header
        gradientColors={mainBody.gradientColors}
        message={mainBody.message}
        icons={mainBody.icons}
        title={`${mainBody.firstName}  ${mainBody.lastName} `}
      />

      {about.show && (
        <AboutMySelf
          heading={about.heading}
          message={about.message}
          imageSize={about.imageSize}
          imageLink={about.imageLink}
        />
      )}
      {experiences.show && <Experience experiences={experiences} />}
      {repos.show && <Project heading={repos.heading} />}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
    </>
  );
};

export default Home;
