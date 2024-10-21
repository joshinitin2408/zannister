import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import homePage from '../assets/img/pro/sahadev_home_page.png';
// import onlineOrdering from '../assets/img/pro/sahadev_online_ordering.png';
// import androidHome from '../assets/img/pro/sahadev_android_home.png';
// import androidItems from '../assets/img/pro/sahadev_android_items.png';
// import androidCart from '../assets/img/pro/sahadev_android_cart.png';
// import androidCheckout from '../assets/img/pro/sahadev_android_checkout.png';
// import androidFeedback from '../assets/img/pro/sahadev_android_feedback.png';
import homePage from '../../../assests/img/Data-Migration.png';
import onlineOrdering from '../../../assests/img/Data-Migration.png';
import androidHome from '../../../assests/img/Data-Migration.png';
import androidItems from '../../../assests/img/Data-Migration.png';
import androidCart from '../../../assests/img/Data-Migration.png';
import androidCheckout from '../../../assests/img/Data-Migration.png';
import androidFeedback from '../../../assests/img/Data-Migration.png';

const SahadevReddySweetsPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Sahadev Reddy Sweets</h2>
            <p className="text-center">
                Established in 1996, Sahadev Reddy Sweets is a renowned name offering premium quality sweets and snacks.
                We have enabled online ordering capabilities for this store, implementing order processing and CC Avenue payment
                gateway integration. The Android app provides mobile-friendly access to the store for easy ordering and doorstep delivery.
            </p>
            <p className="text-center">
                Currently under testing, this service will be live soon.
            </p>
            <p className="text-center">
                <a href="http://sahadeva.Zannister-software.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={homePage} alt="Home Page" />
                        <Card.Body>
                            <Card.Title>Home Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={onlineOrdering} alt="Web Online Ordering Page" />
                        <Card.Body>
                            <Card.Title>Web Online Ordering Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={androidHome} alt="Android App Home Page" />
                        <Card.Body>
                            <Card.Title>Android App Home Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={androidItems} alt="Android App Items Screen" />
                        <Card.Body>
                            <Card.Title>Android App Items Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={androidCart} alt="Android App Cart" />
                        <Card.Body>
                            <Card.Title>Android App Cart</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={androidCheckout} alt="Android App Checkout" />
                        <Card.Body>
                            <Card.Title>Android App Checkout</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={androidFeedback} alt="Android App Feedback" />
                        <Card.Body>
                            <Card.Title>Android App Feedback</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SahadevReddySweetsPage;
