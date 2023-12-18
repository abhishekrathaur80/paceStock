import React from "react";
import Switch from "../store/Switch";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";

const Header = (props) => {
  return (
    <Switch
      fluid
      id="header"
      style={{
        background: `linear-gradient(135deg,${props.gradientColors})`,
        backgroundSize: "1200% 1200%",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <Container className="text-center">
        <h1 className="display-1"> {props.title}</h1>
        <Typist>
          <div className="lead typist">{props.message}</div>
        </Typist>
        <div className="p-5">
          {props.icons.map((icon, index) => (
            <a key={`social-icon-${index}`} href={icon.url}>
              <i className={`fab ${icon.image}  fa-3x socialicons`} />
            </a>
          ))}
        </div>
        <a
          className="btn btn-outline-light btn-lg "
          href="#about"
          role="button"
          aria-label="Learn more about me"
        >
          More about me
        </a>
      </Container>
    </Switch>
  );
};

export default Header;
