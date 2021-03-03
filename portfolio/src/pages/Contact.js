import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
    return (
        <div>
            <Hero backgroundImage="./img/hollywood2.png">

            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Contact Me</h1>
                    </Col>
                </Row>
               
                <Row>
                    <br></br>
                    <Col size="md-6">
                        <br></br>
                        <h3>remmingtonpearce@gmail.com</h3>
                    </Col>
                    <Col size="md-2">
                    <div>
                        <a href="https://github.com/rmmngtn" alt="github"><i
                            class="fab fa-github fa-3x"></i></a>
                    </div>
                    </Col>
                    <Col size="md-2">
                    <div>
                        <a href="https://www.linkedin.com/in/rmmngtn/"alt="LinkedIn"><i class="fab fa-linkedin fa-3x"></i></a>
                    </div>
                    </Col>
                    <Col size="md-2">
                    <div>
                        <a href="https://www.facebook.com/remmington.pearce" alt="Facebook"
                        ><i class="fab fa-facebook fa-3x"></i></a>
                    </div>
                    </Col>
                
                </Row>
            </Container>

        </div>
    );
}

export default Contact;




// style="color: black; text-shadow: 2px 4px 6px white"