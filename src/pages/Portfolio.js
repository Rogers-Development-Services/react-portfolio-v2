import React from "react";
import "../assets/styles/Portfolio.css";
import { Row, Col, Card, Icon, CardTitle, Button, Badge } from 'react-materialize';

const projects = require('../assets/data/projects.json');

function Portfolio() {
  return (
    <section className="portfolio-projects">
      <div className="container">
        <h2>Portfolio</h2>

        <Row
          children={
            [
              projects.map(project =>
                <Col key={project.id} className="projects-container" s={12} m={6} l={6}>
                  <Card
                    className="large project-cards"
                    title={project.name}
                    header={
                      <CardTitle
                        image={project.image}
                        reveal waves="light"
                      />
                    }
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_horiz</Icon>}
                    reveal={
                      <p>​{project.description}
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
                            href={project.link}
                          >
                            Demo
                        </a>
                        </Button>
                      </p>}
                  >
                    <Row>
                      <Col>
                        <p>
                          <a className="repos" rel="external" href={project.repo}>
                            Git Hub Repo
                          </a>
                          <br></br>
                        </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="badges"
                        children={
                          [
                            project.badges.map((badge, index) =>
                              <Badge
                                key={index}
                                className="badge"
                                newIcon
                                caption={badge}
                              >
                              </Badge>
                            )
                          ]
                        }
                      >
                      </Col>
                    </Row>

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