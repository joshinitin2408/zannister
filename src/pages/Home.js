import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRocket, FaLightbulb, FaChartLine, FaMapSigns, FaCogs, FaBox, FaShippingFast, FaSync } from 'react-icons/fa';
import GCSBAN from "../assests/img/GCS-home-page-banner.png";

const Home = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center px-2">
                <h3 className='fst-italic text-secondary fw-bold'>
                    Creating cutting-edge technological solutions that <br /> are both affordable and accessible to small and <br />medium-sized businesses.
                </h3>
                <div className='px-4 leftSection'>
                    <img className='sectionimage img-fluid' src={GCSBAN} alt="Home Banner" />
                </div>
            </div>

            {/* Zannister Software Solutions Content */}
            <Container className="py-5 fw-bold">
                <h2 className="text-center mb-3 fw-bold">Zannister Software Solutions</h2>
                <Container className="fw-bold">
                    <p className="text-center">
                        Zannister is an end-to-end IT solutions provider based out of Karnataka, India, delivering services to clients across the globe.
                        We specialize in providing state-of-the-art solutions in custom application development, offshore software outsourcing services, quality management, and testing services.
                    </p>
                    <p className="text-center">
                        Backed by strong quality processes and rich experience in managing global clients across various business verticals, we align our solutions to your business goals.
                        Our strength lies in our team of software outsourcing professionals who form the building blocks of our organization. Coming from various backgrounds, they expand and add to the creative potential of Zannister.
                    </p>
                    <p className="text-center">
                        Our expertise embraces a wide range of custom programming skills involving the latest and most effective development technologies.
                        We have been able to provide a strategic blend of resources, processes, and technical expertise to become fully aligned with client business strategies and goals.
                    </p>
                    <p className="text-center">
                        If you are looking for a one-stop solution for all your technical requirements and for a business partner who can align with your business strategy while minimizing your investments in technology, your search ends here!
                    </p>
                </Container>
                <h4 className="text-center fw-bold">
                    Get Results With Innovative Methods<br />
                </h4>
                <h5 className="text-center mb-4">As a partner, we’re invested in you and your product so we guide you through our process while giving you our best ideas.
                </h5>
                <Row className="g-4">
                    {/* Cards for Zannister Services */}
                    <Col md={6} lg={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaLightbulb size={50} className="text-warning mb-3" />
                                <Card.Title>Discover</Card.Title>
                                <Card.Text>
                                    Meet face-to-face with our product team and transfer your vision. We evaluate technologies and ask smart questions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaMapSigns size={50} className="text-info mb-3" />
                                <Card.Title>Plan</Card.Title>
                                <Card.Text>
                                    We deliver a comprehensive project plan and technical architecture.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaCogs size={50} className="text-success mb-3" />
                                <Card.Title>Prototype</Card.Title>
                                <Card.Text>
                                    We deliver a functional prototype. You test-drive your product’s core features, so you make informed decisions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaChartLine size={50} className="text-primary mb-3" />
                                <Card.Title>Iterate</Card.Title>
                                <Card.Text>
                                    We add and optimize all first version requirements while you receive weekly product builds.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaRocket size={50} className="text-danger mb-3" />
                                <Card.Title>Ship</Card.Title>
                                <Card.Text>
                                    Since the code we write is always ready to go live, you decide when to launch.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaSync size={50} className="text-secondary mb-3" />
                                <Card.Title>Learn</Card.Title>
                                <Card.Text>
                                    We record every customer interaction to optimize your conversion and retention rates. Use this data to prioritize next version enhancements.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaBox size={50} className="text-primary mb-3" />
                                <Card.Title>Maintain</Card.Title>
                                <Card.Text>
                                    Our operations team maintains and upgrades your infrastructure, monitoring your application 24/7.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Home;
