import React from "react";
import "devicon";
import "../assets/styles/AboutUs.css";
import { Row, Col } from 'react-materialize';

function AboutUs() {
  return (
    <div>
      <section className="home-image">
        <div className="container">
          <p className="intro-text">MATTHEW
            <span className="intro-text-teal"> ROGERS</span>
          </p>
          <p className="intro-text">
            <span className="intro-text-teal">FULL STACK </span>
            DEVELOPER
          </p>
        </div>
      </section >

      <h2 style={{ fontFamily: 'nunito', fontWeight: "bold" }}>About Us</h2>
      <Row className="container">
        <Col
          className="black-text"
          s={12}
          l={6}
        >
          <img
            className='RDS-logo'
            src="https://user-images.githubusercontent.com/38272211/99867457-77214c80-2b6e-11eb-8c5b-4ba73f7c4c8a.png" alt="Rogers-Development-Services-Logo"></img>
        </Col>
        <Col
          className="black-text"
          s={12}
          l={6}
        >
          <p>
            Welcome to Rogers Development Services! My name is Matthew Shane Rogers and I’m an aspiring Web Developer.
            I am a native CA and have lived all around this wonderful state for the past thirty years.<br />
            <br />
            I’m currently enrolled in UCSD’s Full-Stack Web Development Bootcamp hosted by Trilogy Education Services.
            My hope is by learning from this course I will be equipped to either transition into a full time
            Full-Stack Web Developer position in San Diego (or remote) career or to become a freelance web designer. I
            hope to create usable, accessible, and beautiful web applications to service whatever my clients might
            need.<br />
            <br />
            My last career in leadership development taught me that whatever investment I need to make sure it solves a human problem and contributes to growth for the people involved. I strive to apply my learners posture in every developing project I contribute to. You can access my current resume <a className="about-us-links" href="https://github.com/Rogers-Development-Services/Portfolio/files/5578900/Bootcamp.Resume.pdf" target="_blank">here</a>, I'm always open to learning about opportunties. Don't hesitate to reach out to <a className="about-us-links" href="mailto:matthew.shane.rogers@gmail.com"><i>matthew.shane.roges@gmail.com</i></a>!
            </p>
          <div>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col>
                <a className="about-us-links" target="blank" href="https://www.linkedin.com/in/matthewsrogers/" ><i style={{ fontSize: "2rem" }} className="devicon-linkedin-plain"></i></a>
              </Col>
              <Col>
                <a className="about-us-links" target="_blank" href="https://github.com/Rogers-Development-Services"><i style={{ fontSize: "2rem" }} className="devicon-github-plain"></i></a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <section className="container" style={{ marginBottom: "5rem" }}>
        <h2>Skills</h2>
        <Row>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://html.spec.whatwg.org/multipage/"><i className="devicon-html5-plain-wordmark colored"></i></a>
          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://www.w3.org/Style/CSS/Overview.en.html"><i className="devicon-css3-plain-wordmark colored"></i></a>
          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><i className="devicon-javascript-plain colored"></i></a>

          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://jquery.com/"><i className="devicon-jquery-plain colored"></i></a>

          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://nodejs.org/en/"><i className="devicon-nodejs-plain colored"></i></a>

          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://reactjs.org/"><i className="devicon-react-plain colored"></i></a>

          </Col>
        </Row>
        <Row>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://expressjs.com/"><i className="devicon-express-original colored"></i></a>
          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://www.mysql.com/"><i className="devicon-mysql-plain colored"></i></a>
          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://sequelize.org/"><i className="devicon-sequelize-plain colored"></i></a>
          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://www.mongodb.com/"><i className="devicon-mongodb-plain colored"></i></a>
          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://git-scm.com/"><i className="devicon-git-plain colored"></i></a>
          </Col>
          <Col className="skills-container"

            s={2}
            l={2}>
            <a rel="external" href="https://github.com/"><i className="devicon-github-plain colored"></i></a>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default AboutUs;