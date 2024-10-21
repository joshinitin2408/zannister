import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import homeScreen from '../assets/img/pro/glad_home_screen.png';
// import orderingItems from '../assets/img/pro/glad_ordering_items.png';
// import previousOrders from '../assets/img/pro/glad_previous_orders.png';
// import adminOrders from '../assets/img/pro/glad_admin_orders.png';
// import balanceSheet from '../assets/img/pro/glad_balance_sheet.png';
import homeScreen from '../../../assests/img/Data-Migration.png';
import orderingItems from '../../../assests/img/Data-Migration.png';
import previousOrders from '../../../assests/img/Data-Migration.png';
import adminOrders from '../../../assests/img/Data-Migration.png';
import balanceSheet from '../../../assests/img/Data-Migration.png';

const GLADPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Good Lunch At Desk (GLAD)</h2>
            <p className="text-center">
                Good Lunch At Desk is a web portal designed to deliver lunch directly to the desks of busy corporate employees.
                By consolidating orders from specific corporate locations and partnering with local restaurants, GLAD streamlines
                the lunch ordering process for its users. The application includes order consolidation, reminders, and payment
                integration via PayPal.
            </p>
            <p className="text-center">
                <a href="https://www.goodlunchatdesk.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
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
                        <Card.Img variant="top" src={orderingItems} alt="Ordering Items" />
                        <Card.Body>
                            <Card.Title>Ordering Items</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={previousOrders} alt="Previous Orders" />
                        <Card.Body>
                            <Card.Title>Previous Orders</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={adminOrders} alt="Admin Orders Maintenance" />
                        <Card.Body>
                            <Card.Title>Admin Orders Maintenance</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={balanceSheet} alt="Balance Sheet" />
                        <Card.Body>
                            <Card.Title>Balance Sheet</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default GLADPage;
