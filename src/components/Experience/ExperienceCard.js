import React from "react";
import { Col } from "react-bootstrap";

const ExperienceCard = (props) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={props.data.companylogo} alt="" />
        <p className="lead">
          {props.data.role}
          <br />
          {props.data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
