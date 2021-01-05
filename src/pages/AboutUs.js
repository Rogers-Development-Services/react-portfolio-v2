import React from "react";
import "devicon";
import "../assets/styles/AboutUs.css";
import { Row, Col } from 'react-materialize';

let skills = require('../assets/data/skills.json');

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

      <section>
        <h2>About Us</h2>
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
              Welcome to Rogers Development Services! My name is Matthew Shane Rogers and I’m an aspiring Web Developer. I am a native CA and have lived all around this wonderful state for the past thirty years.<br />
              <br />
            I've been certified by UCSD’s Full-Stack Web Development Bootcamp hosted by Trilogy Education Services.
            My hope is by learning from this course I will be equipped to either transition into a full time Full-Stack Web Developer position in San Diego (or remote) career or to become a freelance web designer. I hope to create usable, accessible, and beautiful web applications to service whatever my clients might
            need.<br />
              <br />
            My last career in leadership development taught me that whatever investment I need to make sure it solves a human problem and contributes to growth for the people involved. I strive to apply my learners posture in every developing project I contribute to. You can access my current resume <a className="about-us-links" rel="external" href="https://github.com/Rogers-Development-Services/Portfolio/files/5578900/Bootcamp.Resume.pdf">here</a>, I'm always open to learning about opportunties. Don't hesitate to reach out to <a className="about-us-links" rel="external" href="mailto:matthew.shane.rogers@gmail.com"><i>matthew.shane.roges@gmail.com</i></a>!
            </p>
            <div>
              <Row className="professional-icons">
                <Col>
                  <a className="about-us-links" href="https://www.linkedin.com/in/matthewsrogers/" ><i className="devicon-linkedin-plain"></i></a>
                </Col>
                <Col>
                  <a className="about-us-links" href="https://github.com/Rogers-Development-Services"><i className="devicon-github-plain"></i></a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>

      <section className="container" id="skill-section">
        <h2>Skills</h2>
        <Row
          children={
            [
              skills.map(data =>
                <Col key={data.id} className="skills-container" s={2} m={2} l={2}>
                  <a rel="external" href={data.link}>
                    <i className={data.devcon}></i>
                  </a>
                </Col>)
            ]
          }>
        </Row>
      </section>
    </div>
  );
}

export default AboutUs;