import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Hero backgroundImage="./img/Whisky.png">
                <h1>Remmington Pascone</h1>
                <h3>Full Stack Developer</h3>
                <h4>and Professional Musician</h4>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            Remmington Pascone began coding as an alternative to sitting around during
                            quarantine, as
                            her previous industries closed due to increased social-distancing protocols.
                            Although
                            originally from Florida, this currently-former professional touring musician, stage
                            technician, and front-of-house service industry worker presently resides in Los
                            Angeles,
                            California, where she pretty much never leaves her apartment because people are
                            everywhere. In the meantime, while waiting for the pandemic to end and people to
                            become
                            less scary, she finds learning to code really enjoyable and looks forward to looking
                            up
                            fewer things less often.
            </p>

                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default About;