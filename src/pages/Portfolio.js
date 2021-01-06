import React from "react";
import "../assets/styles/Portfolio.css";
import { Row, Col, Card, Icon, CardTitle, Button } from 'react-materialize';

let projects = require('../assets/data/projects.json');

function Portfolio() {
  return (
    <section className="portfolio-projects">
      <div className="container">
        <h2>Portfolio</h2>

        <Row
          children={
            [
              projects.map(data =>
                <Col key={data.id} className="projects-container" s={12} m={6} l={6}>
                  <Card
                    className="medium project-cards"
                    title={data.name}
                    header={
                      <CardTitle
                        image={data.image}
                        reveal waves="light"
                      />
                    }
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_horiz</Icon>}
                    reveal={
                      <p>​{data.description}
                        <br></br>
                        <Button
                          className="project-buttons"
                          node="button"
                          waves="light"
                        >
                          <a
                            className="project-links"
                            waves="light"
                            rel="external"
                            href={data.link}
                          >
                            Demo
                        </a>
                        </Button>
                      </p>}
                  >
                    <p>
                      <a rel="external" href={data.repo}>
                        Git Hub Repo
                    </a>
                    </p>
                  </Card>
                </Col>)
            ]
          }>
        </Row>
      </div>
    </section>
  );
}

export default Portfolio;