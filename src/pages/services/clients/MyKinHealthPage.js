import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import homePage from '../assests/img/pro/mykinhealth_home.png';
// import servicesPage from '../assests/img/pro/mykinhealth_services.png';
// import kinDashboard from '../assests/img/pro/mykinhealth_dashboard.png';
// import wellnessReport from '../assests/img/pro/mykinhealth_wellness.png';
// import recommendations from '../assests/img/pro/mykinhealth_recommendations.png';
import homePage from '../../../assests/img/Data-Migration.png';
import servicesPage from '../../../assests/img/Data-Migration.png';
import kinDashboard from '../../../assests/img/Data-Migration.png';
import wellnessReport from '../../../assests/img/Data-Migration.png';
import recommendations from '../../../assests/img/Data-Migration.png';

const MyKinHealthPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">MyKinHealth</h2>
            <p className="text-center">
                MyKinHealth is powered by world-class medical experts trained and practicing at top institutions
                in the United States. We incorporate technologies and services in India to provide personalized
                premium 24/7 healthcare services to your kin that are on par with medical standards followed in
                the US, focusing on promoting health and preventing illness.
            </p>
            <p className="text-center">
                <a href="http://www.mykinhealth.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={homePage} alt="MyKinHealth Home Page" />
                        <Card.Body>
                            <Card.Title>Home Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={servicesPage} alt="Services Page" />
                        <Card.Body>
                            <Card.Title>Services</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={kinDashboard} alt="Kin Dashboard" />
                        <Card.Body>
                            <Card.Title>Kin Dashboard</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={wellnessReport} alt="Wellness Report" />
                        <Card.Body>
                            <Card.Title>Wellness Report</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={recommendations} alt="Recommendations" />
                        <Card.Body>
                            <Card.Title>Recommendations</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MyKinHealthPage;
