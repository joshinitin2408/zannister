import React from 'react';
import { Card } from 'react-bootstrap';
import mobileAppImage from '../../assests/img/app-development.webp';
import brand from '../../assests/img/brand.svg';
import growth from '../../assests/img/growth.jpeg';
import increaseuser from '../../assests/img/increaseuser.jpg';

const MobileAppDevelopment = () => {
    return (
        <div className="container-fluid px-4 fw-bold">
            <div className="text-center mb-5">
                <h2 className="mb-3">Mobile App Development</h2>
                <p>Bringing Your Ideas to Life on Mobile Platforms.</p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img className="img-fluid sectionimage" src={mobileAppImage} alt="Mobile App Development" />
                </div>
                <div className="col-md-6">
                    <ul className="list fw-bold text-secondary">
                        <li className="list-item one"><p>Native and Hybrid Apps - Develop apps for both Android and iOS.</p></li>
                        <li className="list-item two"><p>App Store Optimization - Boost your app’s visibility and downloads.</p></li>
                        <li className="list-item three"><p>Performance Monitoring - Ensure optimal app performance with regular updates.</p></li>
                    </ul>
                </div>
            </div>



            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={increaseuser} alt="Increased User Engagement" />
                        <Card.Body>
                            <Card.Title>Increasing User Engagement</Card.Title>
                            <Card.Text>
                                Our mobile apps are designed to engage users, providing a platform for interaction that increases brand loyalty and customer retention.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 1 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={growth} alt="Revenue Growth" />
                        <Card.Body>
                            <Card.Title>Driving Revenue Growth</Card.Title>
                            <Card.Text>
                                By offering seamless purchasing experiences and in-app purchases, our mobile apps help increase your revenue through better user interaction.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 2 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={brand} alt="Enhanced Brand Presence" />
                        <Card.Body>
                            <Card.Title>Enhancing Brand Presence</Card.Title>
                            <Card.Text>
                                Our mobile solutions ensure that your brand stays top-of-mind for customers by providing easy access to your services anytime, anywhere.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MobileAppDevelopment;
