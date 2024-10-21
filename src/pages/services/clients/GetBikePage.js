import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import firstScreen from '../assets/img/pro/getbike_first_screen.png';
// import instructionsScreen from '../assets/img/pro/getbike_instructions.png';
// import profileScreen from '../assets/img/pro/getbike_profile.png';
// import proofsScreen from '../assets/img/pro/getbike_proofs.png';
// import walletPage from '../assets/img/pro/getbike_wallet.png';
// import bankDetailsScreen from '../assets/img/pro/getbike_bank_details.png';
// import listingBikesScreen from '../assets/img/pro/getbike_listing_bikes.png';
// import schedulingRideScreen from '../assets/img/pro/getbike_scheduling_ride.png';
// import rideScreen from '../assets/img/pro/getbike_ride_estimated_price.png';
// import rideAlertScreen from '../assets/img/pro/getbike_ride_alert_notification.png';
// import rideStartScreen from '../assets/img/pro/getbike_ride_start.png';
// import paymentModeScreen from '../assets/img/pro/getbike_payment_mode.png';
// import rideDetailsScreen from '../assets/img/pro/getbike_ride_details.png';
// import billDetailsScreen from '../assets/img/pro/getbike_bill_details.png';
// import shareAndEarnScreen from '../assets/img/pro/getbike_share_and_earn.png';
// import promotionScreen from '../assets/img/pro/getbike_promotion_coupon.png';
import firstScreen from '../../../assests/img/Data-Migration.png';
import instructionsScreen from '../../../assests/img/Data-Migration.png';
import profileScreen from '../../../assests/img/Data-Migration.png';
import proofsScreen from '../../../assests/img/Data-Migration.png';
import walletPage from '../../../assests/img/Data-Migration.png';
import bankDetailsScreen from '../../../assests/img/Data-Migration.png';
import listingBikesScreen from '../../../assests/img/Data-Migration.png';
import schedulingRideScreen from '../../../assests/img/Data-Migration.png';
import rideScreen from '../../../assests/img/Data-Migration.png';
import rideAlertScreen from '../../../assests/img/Data-Migration.png';
import rideStartScreen from '../../../assests/img/Data-Migration.png';
import paymentModeScreen from '../../../assests/img/Data-Migration.png';
import rideDetailsScreen from '../../../assests/img/Data-Migration.png';
import billDetailsScreen from '../../../assests/img/Data-Migration.png';
import shareAndEarnScreen from '../../../assests/img/Data-Migration.png';
import promotionScreen from '../../../assests/img/Data-Migration.png';

const GetBikePage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">getbike</h2>
            <p className="text-center">
                "getbike" is a bike-sharing company designed specifically for the Indian market. It offers an affordable
                and convenient solution for city commuters who rely on public transport. getbike aims to provide a
                seamless bike-sharing experience to the larger population of Indian cities.
            </p>
            <p className="text-center">
                <a href="http://www.getbike.co.in" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={firstScreen} alt="First Screen" />
                        <Card.Body>
                            <Card.Title>First Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={instructionsScreen} alt="Instructions Screen" />
                        <Card.Body>
                            <Card.Title>Instructions Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={profileScreen} alt="Profile With Vehicle Details" />
                        <Card.Body>
                            <Card.Title>Profile With Vehicle Details</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={proofsScreen} alt="Proofs Screen" />
                        <Card.Body>
                            <Card.Title>Proofs Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={walletPage} alt="Wallet Page" />
                        <Card.Body>
                            <Card.Title>Wallet Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={bankDetailsScreen} alt="Bank Details Screen" />
                        <Card.Body>
                            <Card.Title>Bank Details Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={listingBikesScreen} alt="Listing Bikes Screen" />
                        <Card.Body>
                            <Card.Title>Listing Bikes Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={schedulingRideScreen} alt="Scheduling Ride Screen" />
                        <Card.Body>
                            <Card.Title>Scheduling Ride Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={rideScreen} alt="Ride Screen with Estimated Price" />
                        <Card.Body>
                            <Card.Title>Ride Screen with Estimated Price</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={rideAlertScreen} alt="Ride Alert Notification" />
                        <Card.Body>
                            <Card.Title>Ride Alert Notification</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={rideStartScreen} alt="Ride Start Screen" />
                        <Card.Body>
                            <Card.Title>Ride Start Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={paymentModeScreen} alt="Payment Mode Selection Screen" />
                        <Card.Body>
                            <Card.Title>Payment Mode Selection Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={rideDetailsScreen} alt="Ride Details Screen" />
                        <Card.Body>
                            <Card.Title>Ride Details Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={billDetailsScreen} alt="Bill Details Screen" />
                        <Card.Body>
                            <Card.Title>Bill Details Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={shareAndEarnScreen} alt="Share And Earn Screen" />
                        <Card.Body>
                            <Card.Title>Share And Earn Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={promotionScreen} alt="Promotion Coupon Code Screen" />
                        <Card.Body>
                            <Card.Title>Promotion Coupon Code Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default GetBikePage;
