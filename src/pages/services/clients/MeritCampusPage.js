import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import homePage from '../assests/img/pro/merit_campus_home.png';
// import sampleTopic from '../assests/img/pro/merit_campus_topic.png';
// import onlineCompiler from '../assests/img/pro/merit_campus_compiler.png';
// import ranksPage from '../assests/img/pro/merit_campus_ranks.png';
import homePage from '../../../assests/img/Data-Migration.png';
import sampleTopic from '../../../assests/img/Data-Migration.png';
import onlineCompiler from '../../../assests/img/Data-Migration.png';
import ranksPage from '../../../assests/img/Data-Migration.png';
const MeritCampusPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Merit Campus</h2>
            <p className="text-center">
                Merit Campus is a one-stop point for learning Java Topics, practicing Java Questions/Programs,
                and competing for Merit Certificates. It features a database of 350+ topics, 2000+ MCQs, and
                600+ Java programs. This self-learning and automated evaluation tool assesses students' programming
                skills and their commitment to programming.
            </p>
            <p className="text-center">
                This application is conceived, developed, and maintained by Zannister Software, which uses this platform
                to identify good programmers for its company. As of December 2014, Merit Campus has served 1,00,000 tests
                to 3500 users and has a Global Alexa rank of 189,534.
            </p>
            <p className="text-center">
                <a href="http://java.meritcampus.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={homePage} alt="Merit Campus Home Page" />
                        <Card.Body>
                            <Card.Title>Home Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={sampleTopic} alt="Sample Topic Page" />
                        <Card.Body>
                            <Card.Title>Sample Topic</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={onlineCompiler} alt="Online Java Compiler" />
                        <Card.Body>
                            <Card.Title>Online Java Compiler</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={ranksPage} alt="Sample Ranks Page" />
                        <Card.Body>
                            <Card.Title>Sample Ranks Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MeritCampusPage;
