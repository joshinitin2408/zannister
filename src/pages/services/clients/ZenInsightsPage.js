import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import homePage from '../assets/img/pro/zeninsights_home_page.png';
// import providers from '../assets/img/pro/zeninsights_providers.png';
// import perspectives from '../assets/img/pro/zeninsights_perspectives.png';
// import foundingPrinciples from '../assets/img/pro/zeninsights_founding_principles.png';
import homePage from '../../../assests/img/Data-Migration.png';
import providers from '../../../assests/img/Data-Migration.png';
import perspectives from '../../../assests/img/Data-Migration.png';
import foundingPrinciples from '../../../assests/img/Data-Migration.png';

const ZenInsightsPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Zen Insights</h2>
            <p className="text-center">
                Zen Insights operates at the intersection of market shifts, driven by consumer, technology, and business model innovations.
                With a focus on leveraging computing power and human intelligence, Zen Insights empowers business leaders, IT decision-makers,
                and investment professionals with high-quality, data-driven intelligence.
            </p>
            <p className="text-center">
                The platform helps enterprises analyze the impact of disruptive innovations and make informed decisions
                to sustain their competitive edge in the market. Zen Insights aims to bridge the gap between business strategy
                and technological advancements to ensure long-term success.
            </p>
            <p className="text-center">
                <a href="http://www.zeninsights.co" target="_blank" rel="noopener noreferrer">
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
                        <Card.Img variant="top" src={providers} alt="Providers" />
                        <Card.Body>
                            <Card.Title>Providers</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={perspectives} alt="Perspectives" />
                        <Card.Body>
                            <Card.Title>Perspectives</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={foundingPrinciples} alt="Founding Principles" />
                        <Card.Body>
                            <Card.Title>Founding Principles</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ZenInsightsPage;
