import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import loginPage from '../assets/img/pro/cfaa_login_page.png';
// import registrationPage from '../assets/img/pro/cfaa_registration_page.png';
// import homeScreen from '../assets/img/pro/cfaa_home_screen.png';
// import facilitiesScreen from '../assets/img/pro/cfaa_facilities_screen.png';
// import bookingScreen from '../assets/img/pro/cfaa_booking_screen.png';
// import condoInfo from '../assets/img/pro/cfaa_condo_info.png';
// import condoEvents from '../assets/img/pro/cfaa_condo_events.png';
// import condoGuide from '../assets/img/pro/cfaa_condo_guide.png';
// import condoStaff from '../assets/img/pro/cfaa_condo_staff.png';
// import visitorScreen from '../assets/img/pro/cfaa_visitor_screen.png';
import loginPage from '../../../assests/img/Data-Migration.png';
import registrationPage from '../../../assests/img/Data-Migration.png';
import homeScreen from '../../../assests/img/Data-Migration.png';
import facilitiesScreen from '../../../assests/img/Data-Migration.png';
import bookingScreen from '../../../assests/img/Data-Migration.png';
import condoInfo from '../../../assests/img/Data-Migration.png';
import condoEvents from '../../../assests/img/Data-Migration.png';
import condoGuide from '../../../assests/img/Data-Migration.png';
import condoStaff from '../../../assests/img/Data-Migration.png';
import visitorScreen from '../../../assests/img/Data-Migration.png';

const CFAACondominiumAppPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">CFAA Condominium App for Livia Group, Singapore</h2>
            <p className="text-center">
                We developed an Android app for condo residents of Livia Group, Singapore.
                This app provides comprehensive information about the condo, including staff details,
                community member information, booking of common facilities, maintenance feedback, event info,
                picture gallery, notifications, notice board, guides, and services.
            </p>
            <p className="text-center">
                The app integrates with social platforms like Facebook, Google Plus, Twitter, and Microsoft for resident validation.
                The iOS app and backend portal were developed by our partner firm.
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={loginPage} alt="Login Page" />
                        <Card.Body>
                            <Card.Title>Login Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={registrationPage} alt="Registration Page" />
                        <Card.Body>
                            <Card.Title>Registration Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={homeScreen} alt="Home Screen" />
                        <Card.Body>
                            <Card.Title>Home Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={facilitiesScreen} alt="Facilities Screen" />
                        <Card.Body>
                            <Card.Title>Facilities Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={bookingScreen} alt="Booking Screen" />
                        <Card.Body>
                            <Card.Title>Booking Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={condoInfo} alt="Condo Info" />
                        <Card.Body>
                            <Card.Title>Condo Info</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={condoEvents} alt="Condo Events" />
                        <Card.Body>
                            <Card.Title>Condo Events</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={condoGuide} alt="Condo Guide" />
                        <Card.Body>
                            <Card.Title>Condo Guide</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={condoStaff} alt="Condo Management Staff" />
                        <Card.Body>
                            <Card.Title>Condo Management Staff</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={visitorScreen} alt="Visitor Screen" />
                        <Card.Body>
                            <Card.Title>Visitor Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CFAACondominiumAppPage;
