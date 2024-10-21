import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import homePage from '../assets/img/pro/riskwatch_home_page.png';
// import blog from '../assets/img/pro/riskwatch_blog.png';
// import recruitPage from '../assets/img/pro/riskwatch_recruit_page.png';
// import contactPage from '../assets/img/pro/riskwatch_contact_page.png';
import homePage from '../../../assests/img/Data-Migration.png';
import blog from '../../../assests/img/Data-Migration.png';
import recruitPage from '../../../assests/img/Data-Migration.png';
import contactPage from '../../../assests/img/Data-Migration.png';

const RiskWatchPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Risk Watch</h2>
            <p className="text-center">
                Since 1993, RiskWatch has been at the forefront of risk assessment solutions.
                Our philosophy is that effective management of security and compliance risks
                relies on precise measurement. We aim to enhance global security and create a safer world
                through exceptional customer service and user-friendly software products.
            </p>
            <p className="text-center">
                RiskWatch's unique approach to risk assessment helps organizations protect themselves
                against an ever-evolving threat landscape, ensuring that they remain compliant and secure.
            </p>
            <p className="text-center">
                <a href="http://riskwatch.Zannister-software.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={homePage} alt="Home Page" />
                        <Card.Body>
                            <Card.Title>Home Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={blog} alt="Blog" />
                        <Card.Body>
                            <Card.Title>Blog</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={recruitPage} alt="Recruit Page" />
                        <Card.Body>
                            <Card.Title>Recruit Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={contactPage} alt="Contact Page" />
                        <Card.Body>
                            <Card.Title>Contact Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RiskWatchPage;
