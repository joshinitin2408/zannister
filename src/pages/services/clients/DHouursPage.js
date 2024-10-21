import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import dashboard from '../assets/img/pro/dhours_dashboard.png';
// import bookingDetails from '../assets/img/pro/dhours_booking_details.png';
// import eventScreen from '../assets/img/pro/dhours_event_screen.png';
// import barcodeScreen from '../assets/img/pro/dhours_barcode_screen.png';
// import chatScreen from '../assets/img/pro/dhours_chat_screen.png';
// import faqs from '../assets/img/pro/dhours_faqs.png';
// import mapScreen from '../assets/img/pro/dhours_map_screen.png';
// import personalScreen from '../assets/img/pro/dhours_personal_screen.png';
// import restaurantScreen from '../assets/img/pro/dhours_restaurant_screen.png';
// import recentlyViewed from '../assets/img/pro/dhours_recently_viewed.png';
import dashboard from '../../../assests/img/Data-Migration.png';
import bookingDetails from '../../../assests/img/Data-Migration.png';
import eventScreen from '../../../assests/img/Data-Migration.png';
import barcodeScreen from '../../../assests/img/Data-Migration.png';
import chatScreen from '../../../assests/img/Data-Migration.png';
import faqs from '../../../assests/img/Data-Migration.png';
import mapScreen from '../../../assests/img/Data-Migration.png';
import personalScreen from '../../../assests/img/Data-Migration.png';
import restaurantScreen from '../../../assests/img/Data-Migration.png';
import recentlyViewed from '../../../assests/img/Data-Migration.png';

const DHouursPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">D' Hours</h2>
            <p className="text-center">
                D' Hours uses your location to showcase the best deals near you, ensuring that
                you never miss out on great discounts. With real-time notifications,
                you can stay updated on exciting offers in your neighborhood.
            </p>
            <p className="text-center">
                <a href="http://www.dhours.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={dashboard} alt="Dashboard" />
                        <Card.Body>
                            <Card.Title>Dashboard</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={bookingDetails} alt="D'Hours Booking Details" />
                        <Card.Body>
                            <Card.Title>Booking Details</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={eventScreen} alt="Event Screen" />
                        <Card.Body>
                            <Card.Title>Event Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={barcodeScreen} alt="Bar Code Screen" />
                        <Card.Body>
                            <Card.Title>Bar Code Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={chatScreen} alt="Chat Screen" />
                        <Card.Body>
                            <Card.Title>Chat Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={faqs} alt="FAQ's" />
                        <Card.Body>
                            <Card.Title>FAQ's</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={mapScreen} alt="Map Screen" />
                        <Card.Body>
                            <Card.Title>Map Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={personalScreen} alt="Personal Screen" />
                        <Card.Body>
                            <Card.Title>Personal Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={restaurantScreen} alt="Restaurant Screen" />
                        <Card.Body>
                            <Card.Title>Restaurant Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={recentlyViewed} alt="Recently Viewed Screen" />
                        <Card.Body>
                            <Card.Title>Recently Viewed Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DHouursPage;
