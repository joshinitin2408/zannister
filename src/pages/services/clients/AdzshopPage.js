import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import homePage from '../assests/img/pro/adzshop_home.png';
// import servicesPage from '../assests/img/pro/adzshop_services.png';
// import howItWorksPage from '../assests/img/pro/adzshop_how_it_works.png';
// import galleryPage from '../assests/img/pro/adzshop_gallery.png';
// import loginScreen from '../assests/img/pro/adzshop_login.png';
// import adminDashboard from '../assests/img/pro/adzshop_admin_dashboard.png';
// import categoriesScreen from '../assests/img/pro/adzshop_categories.png';
// import welcomeScreen from '../assests/img/pro/adzshop_welcome.png';
// import appLoginScreen from '../assests/img/pro/adzshop_app_login.png';
// import appMenuScreen from '../assests/img/pro/adzshop_app_menu.png';
// import profileInfo from '../assests/img/pro/adzshop_profile_info.png';
// import profileDetails from '../assests/img/pro/adzshop_profile_details.png';
// import notifications from '../assests/img/pro/adzshop_notifications.png';
// import listItems from '../assests/img/pro/adzshop_list_items.png';
// import accountCreation from '../assests/img/pro/adzshop_account_creation.png';
// import accountDetails from '../assests/img/pro/adzshop_account_details.png';
// import spaceCreation from '../assests/img/pro/adzshop_space_creation.png';
// import chatCreation from '../assests/img/pro/adzshop_chat_creation.png';
// import bookingScreen from '../assests/img/pro/adzshop_booking_screen.png';
import homePage from '../../../assests/img/Data-Migration.png';
import servicesPage from '../../../assests/img/Data-Migration.png';
import howItWorksPage from '../../../assests/img/Data-Migration.png';
import galleryPage from '../../../assests/img/Data-Migration.png';
import loginScreen from '../../../assests/img/Data-Migration.png';
import adminDashboard from '../../../assests/img/Data-Migration.png';
import categoriesScreen from '../../../assests/img/Data-Migration.png';
import welcomeScreen from '../../../assests/img/Data-Migration.png';
import appLoginScreen from '../../../assests/img/Data-Migration.png';
import appMenuScreen from '../../../assests/img/Data-Migration.png';
import profileInfo from '../../../assests/img/Data-Migration.png';
import profileDetails from '../../../assests/img/Data-Migration.png';
import notifications from '../../../assests/img/Data-Migration.png';
import listItems from '../../../assests/img/Data-Migration.png';
import accountCreation from '../../../assests/img/Data-Migration.png';
import accountDetails from '../../../assests/img/Data-Migration.png';
import spaceCreation from '../../../assests/img/Data-Migration.png';
import chatCreation from '../../../assests/img/Data-Migration.png';
import bookingScreen from '../../../assests/img/Data-Migration.png';

const AdzshopPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Adzshop</h2>
            <p className="text-center">
                Adzshop is a revolutionary B2B marketplace app for advertisement spaces. Ad space owners can post idle
                spaces, and businesses or individuals can rent these spaces to promote their products or services.
                We believe this concept has the potential to transform the advertising space, similar to how ‘Airbnb’
                revolutionized property rentals.
            </p>
            <p className="text-center">
                <a href="http://www.adzshop.co" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={homePage} alt="Adzshop Home Page" />
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
                        <Card.Img variant="top" src={howItWorksPage} alt="How It Works Page" />
                        <Card.Body>
                            <Card.Title>How It Works</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={galleryPage} alt="Gallery and Clients Page" />
                        <Card.Body>
                            <Card.Title>Gallery and Clients</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={loginScreen} alt="Login Screen" />
                        <Card.Body>
                            <Card.Title>Login Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={adminDashboard} alt="Admin Dashboard" />
                        <Card.Body>
                            <Card.Title>Admin Dashboard</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={categoriesScreen} alt="Categories Screen" />
                        <Card.Body>
                            <Card.Title>Categories Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={welcomeScreen} alt="App Welcome Screen" />
                        <Card.Body>
                            <Card.Title>App Welcome Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={appLoginScreen} alt="App Login Screen" />
                        <Card.Body>
                            <Card.Title>App Login Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={appMenuScreen} alt="App Menu Screen" />
                        <Card.Body>
                            <Card.Title>App Menu Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={profileInfo} alt="Profile Info" />
                        <Card.Body>
                            <Card.Title>Profile Info</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={profileDetails} alt="Profile Details" />
                        <Card.Body>
                            <Card.Title>Profile Details</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={notifications} alt="App Notifications" />
                        <Card.Body>
                            <Card.Title>App Notifications</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={listItems} alt="List Items" />
                        <Card.Body>
                            <Card.Title>List Items</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={accountCreation} alt="App Account Creation" />
                        <Card.Body>
                            <Card.Title>App Account Creation</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={accountDetails} alt="App Account Details" />
                        <Card.Body>
                            <Card.Title>App Account Details</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={spaceCreation} alt="Space Creation" />
                        <Card.Body>
                            <Card.Title>Space Creation</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={chatCreation} alt="Chat Creation" />
                        <Card.Body>
                            <Card.Title>Chat Creation</Card.Title>
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
            </Row>
        </Container>
    );
};

export default AdzshopPage;
