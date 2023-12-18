import React from "react";

const GetInTouch = (props) => {
  return (
    <div>
      <h2 className="display-4 pb-3 text-center">{props.heading}</h2>
      <p className="lead text-center pb-3">
        {props.message} ,
        <a className="text-decoration-none" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </p>
    </div>
  );
};

export default GetInTouch;
