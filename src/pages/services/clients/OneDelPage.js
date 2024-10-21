import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import dashboard from '../assets/img/pro/onedel_dashboard.png';
// import bidScreen from '../assets/img/pro/onedel_bid_screen.png';
// import chatHistory from '../assets/img/pro/onedel_chat_history.png';
// import ordersScreen from '../assets/img/pro/onedel_orders_screen.png';
// import aboutUs from '../assets/img/pro/onedel_about_us.png';
// import cartScreen from '../assets/img/pro/onedel_cart_screen.png';
// import chatScreen from '../assets/img/pro/onedel_chat_screen.png';
// import courierScreen from '../assets/img/pro/onedel_courier_screen.png';
// import journeyScreen from '../assets/img/pro/onedel_journey_screen.png';
// import directionScreen from '../assets/img/pro/onedel_direction_screen.png';
// import jobListing from '../assets/img/pro/onedel_job_listing.png';
// import newTraveler from '../assets/img/pro/onedel_new_traveler.png';
// import messageScreen from '../assets/img/pro/onedel_message_screen.png';
// import routePreference from '../assets/img/pro/onedel_route_preference.png';
// import requestsScreen from '../assets/img/pro/onedel_requests_screen.png';
import dashboard from '../../../assests/img/Data-Migration.png';
import bidScreen from '../../../assests/img/Data-Migration.png';
import chatHistory from '../../../assests/img/Data-Migration.png';
import ordersScreen from '../../../assests/img/Data-Migration.png';
import aboutUs from '../../../assests/img/Data-Migration.png';
import cartScreen from '../../../assests/img/Data-Migration.png';
import chatScreen from '../../../assests/img/Data-Migration.png';
import courierScreen from '../../../assests/img/Data-Migration.png';
import journeyScreen from '../../../assests/img/Data-Migration.png';
import directionScreen from '../../../assests/img/Data-Migration.png';
import jobListing from '../../../assests/img/Data-Migration.png';
import newTraveler from '../../../assests/img/Data-Migration.png';
import messageScreen from '../../../assests/img/Data-Migration.png';
import routePreference from '../../../assests/img/Data-Migration.png';
import requestsScreen from '../../../assests/img/Data-Migration.png';

const OneDelPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">OneDel</h2>
            <p className="text-center">
                OneDel provides a platform for seamless interaction between travelers and couriers,
                ensuring efficient delivery of goods and services. With features that facilitate
                bidding, chat history, order management, and more, it’s your go-to solution for delivery needs.
            </p>
            <p className="text-center">
                <a href="https://zestone.co" target="_blank" rel="noopener noreferrer">
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
                        <Card.Img variant="top" src={bidScreen} alt="Bid Screen" />
                        <Card.Body>
                            <Card.Title>Bid Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={chatHistory} alt="Chat History" />
                        <Card.Body>
                            <Card.Title>Chat History</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={ordersScreen} alt="Orders Screen" />
                        <Card.Body>
                            <Card.Title>Orders Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={aboutUs} alt="About Us" />
                        <Card.Body>
                            <Card.Title>About Us</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={cartScreen} alt="Cart Screen" />
                        <Card.Body>
                            <Card.Title>Cart Screen</Card.Title>
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
                        <Card.Img variant="top" src={courierScreen} alt="Courier Screen" />
                        <Card.Body>
                            <Card.Title>Courier Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={journeyScreen} alt="Journey Screen" />
                        <Card.Body>
                            <Card.Title>Journey Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={directionScreen} alt="Direction Directions" />
                        <Card.Body>
                            <Card.Title>Direction Directions</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={jobListing} alt="Job Listing" />
                        <Card.Body>
                            <Card.Title>Job Listing</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={newTraveler} alt="New Traveler Screen" />
                        <Card.Body>
                            <Card.Title>New Traveler Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={messageScreen} alt="Message Screen" />
                        <Card.Body>
                            <Card.Title>Message Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={routePreference} alt="Route Preference" />
                        <Card.Body>
                            <Card.Title>Route Preference</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={requestsScreen} alt="Requests Screens" />
                        <Card.Body>
                            <Card.Title>Requests Screens</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default OneDelPage;
