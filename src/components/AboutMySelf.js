import React from "react";
import Switch from "../store/Switch";

const AboutMySelf = (props) => {
  return (
    <Switch id="aboutMySelf" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {props.imageLink && (
            <img
              className="border border-secondary rounded-circle"
              src={props.imageLink}
              alt="profilePicture"
              width={props.imageSize}
              height={props.imageSize}
            />
          )}
        </div>
        <div className="col-lg-7">
          <h2 className="display-4 mb-5 text-center">{props.heading}</h2>
          <p className="lead text-center">{props.message}</p>
        </div>
      </div>
    </Switch>
  );
};

export default AboutMySelf;
