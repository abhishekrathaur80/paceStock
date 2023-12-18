import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  const { name, description, svn_url, languages_url, pushed_at } = props.value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {svn_url && <CardButton svn_url={svn_url} />}
          <hr />

          {languages_url && <span>{languages_url}</span>}
          {pushed_at && <Card.Footer>{pushed_at}</Card.Footer>}
        </Card.Body>
      </Card>
    </Col>
  );
};

function CardButton(props) {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${props.svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a
        href={props.svn_url}
        target=" _blank"
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
}

export default ProjectCard;
