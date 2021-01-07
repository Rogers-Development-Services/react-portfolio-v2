import React, {useState} from "react";
import "../assets/styles/Contact.css";
import submitForm from "../utils/form-submission-handler";
import { Textarea, Icon, TextInput, Button, Row, Col } from 'react-materialize';

function Contact() {

  const [submit, setSubmit] = useState("none");

  function handleSubmit() {
    setSubmit("block");
    submitForm();
  };

  return (
    <div className="container">
      <h2>Contact Us!</h2>
      <Row>
        <Col className="contact-intro"
          s={12} m={12} l={12}
        >
          <p>
            We would <em>love</em> to hear from you!
          </p>
          <p>
            Connect with us with the form below, or at <a className="about-us-links" href="tel:9169524662">916-952-4662</a> &#38; <a className="about-us-links" href="mailto:matthew.shane.rogers@gmail.com">matthew.shane.rogers@gmail.com</a>.
          </p>
        </Col>
      </Row>

      <Row>
        <Col s={12} l={12}>
          <form
            className="gform pure-form pure-form-stacked"
            method="POST"
            data-email="matthew.shane.rogers@gmail.com"
            action="https://script.google.com/macros/s/AKfycbz0lCgoEhYNK-aUDuMl-cy1q2z1EdI4h4BDNwpd/exec"
          >

            <Row>
              <Col s={6} l={6}>
                <TextInput
                  className="input"
                  name="name"
                  icon="person"
                  id="client-name"
                  label="First Name"
                  s={12} l={12}
                />
              </Col>
              <Col s={6} l={6}>
                <TextInput
                  className="input"
                  name="name"
                  id="client-name"
                  label="Last Name"
                  s={12} l={12}
                />
              </Col>
            </Row>

            <Row>
              <Col s={12} l={12}>
                <Textarea
                  className="input"
                  icon={<Icon>mode_edit</Icon>}
                  name="message"
                  id="client-message"
                  label="Message"
                  s={12} l={12}
                />
              </Col>
            </Row>

            <Row>
              <Col s={12} l={12}>
                <TextInput
                  className="input"
                  email
                  name="email"
                  icon="email"
                  id="client-email"
                  label="Email"
                  validate
                  s={12} l={12}
                />
              </Col>
            </Row>
            <Row>
              <Col className="submit-col"
                s={12} l={12}>
                <Button
                  className="submit-button"
                  onClick={handleSubmit}
                  node="button"
                  type="submit"
                  waves="light"
                >
                  Submit<Icon right>send</Icon>
                </Button>
              </Col>
            </Row>

            <div style={{ display: submit }} className="thankyou-message">
              <h4><em>Thank you</em> for contacting us! We will get back to you soon!</h4>
            </div>

          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;