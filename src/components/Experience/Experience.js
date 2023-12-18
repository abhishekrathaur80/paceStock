import React from "react";
import Switch from "../../store/Switch";
import ExperienceCard from "./ExperienceCard";
import { Container, Row } from "react-bootstrap";

const Experience = (props) => {
  return (
    <section className="section">
      <Container>
        <Switch className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {props.experiences.heading}
          </h2>
          <Row>
            {props.experiences.data.map((data, index) => {
              return <ExperienceCard key={index} data={data} />;
            })}
          </Row>
        </Switch>
      </Container>
    </section>
  );
};
export default Experience;
