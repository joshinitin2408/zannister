import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaHandshake, FaDollarSign, FaGlobe, FaLaptopCode, FaClipboardCheck, FaSync, FaCertificate } from 'react-icons/fa';

const Methods = () => {
    return (
        <Container className="fw-bold my-2">
            <h2 className="text-center mb-3 fw-bold">An Insight</h2>
            <p className="text-center mb-4">
                Zannister Software Solutions, is an Information Technology Solutions provider operating from Madhya Pradesh, India. The company is currently providing solutions to companies in the Finance industry, Education, Retail, and Construction Industries. Our core competency includes custom application development with utmost product quality. Zannister provides solutions that are faster, better, and cost-effective. High quality of service, customer focus, and transparent project management are the key areas of emphasis in Zannister.
            </p>
            {/* 
            <h3 className="text-center mb-4 fw-bold">Clients</h3>
            <Row className="g-4 justify-content-center mb-5">
                <Col md={3} className="text-center">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>Earth Science Co.</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="text-center">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>EduWorld Solutions</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="text-center">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>RetailPoint</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="text-center">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>ConstructPro</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}

            <h3 className="text-center mb-3 fw-bold">Methods</h3>
            <p className="text-center mb-4">
                Zannister uses Agile Methodology with Extreme Programming practices which makes our products and services top class. We believe in:
            </p>

            <Row className="g-4">
                <Col md={6} lg={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Body>
                            <FaHandshake size={50} className="text-primary mb-3" />
                            <Card.Title>Effective Customer Collaboration</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Body>
                            <FaCertificate size={50} className="text-success mb-3" />
                            <Card.Title>High Quality Software</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Body>
                            <FaUsers size={50} className="text-warning mb-3" />
                            <Card.Title>Individuals and Interactions</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Body>
                            <FaSync size={50} className="text-info mb-3" />
                            <Card.Title>Responding to Change</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h3 className="text-center mt-5 mb-3 fw-bold">Why Zannister?</h3>
            <Row className="g-4">
                <Col md={6} lg={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Body>
                            <FaUsers size={50} className="text-primary mb-3" />
                            <Card.Title>Customer-Oriented Approach</Card.Title>
                            <Card.Text>
                                Our ultimate goal is to add value to your business. We match our processes to fit your preferences, so that you feel comfortable and secure outsourcing work to an offshore team.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Body>
                            <FaGlobe size={50} className="text-success mb-3" />
                            <Card.Title>Seamless Communication</Card.Title>
                            <Card.Text>
                                Our customers and partners tell us we're easier to communicate with than other outsourcing companies. We make sure we're available through multiple communication channels.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Body>
                            <FaDollarSign size={50} className="text-warning mb-3" />
                            <Card.Title>Reasonable Cost</Card.Title>
                            <Card.Text>
                                Our Indian office allows us to make use of the immense talent pool available here, providing services that are economical with great return on investment.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Body>
                            <FaLaptopCode size={50} className="text-danger mb-3" />
                            <Card.Title>Time-Zones</Card.Title>
                            <Card.Text>
                                Our managers and tech leads adjust to your time-zones to ensure you get "overnight turnaround" every day.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Body>
                            <FaClipboardCheck size={50} className="text-info mb-3" />
                            <Card.Title>Comprehensive Solution</Card.Title>
                            <Card.Text>
                                We cover the full business cycle, from business analysis to post-launch maintenance, making your budget and timeline more predictable.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Methods;
