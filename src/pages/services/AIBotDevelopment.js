// src/components/AI_Bot_Development.js
import React from 'react';
import { Card } from 'react-bootstrap';
import aiBotImage from '../../assests/img/Generative-ai-bot.avif'
import cos from '../../assests/img/costomer.jpg'
import data from '../../assests/img/data-driven.png'
import secure from '../../assests/img/secure-data-management.jpg'

const AIBotDevelopment = () => {
    return (
        <div className="container-fluid px-4 fw-bold">
            <div className="text-center mb-5">
                <h2 className="mb-3">AI Bot Development</h2>
                <p>Innovating Customer Engagement: Smart Bots for Every Interaction.</p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img className="img-fluid sectionimage" src={aiBotImage} alt="AI Bot Development" />
                </div>
                <div className="col-md-6">
                    <ul className="list fw-bold text-secondary">
                        <li class="list-item one"><p>Cloud Storage - Secure and scalable data storage options.</p></li>
                        <li class="list-item two"><p>Infrastructure as a Service - Deploy and manage scalable infrastructure.</p></li>
                        <li class="list-item three"><p>Disaster Recovery - Ensure business continuity with robust backup solutions.</p></li>
                    </ul>
                </div>
            </div>



            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={cos} alt="Customer Satisfaction" />
                        <Card.Body>
                            <Card.Title>Enhancing Customer Satisfaction</Card.Title>
                            <Card.Text>
                                Our AI bots are designed to understand customer needs, providing immediate responses and ensuring a seamless experience, which leads to higher satisfaction and retention rates.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={data} alt="Data-Driven Analytics" />
                        <Card.Body>
                            <Card.Title>Data-Driven Analytics</Card.Title>
                            <Card.Text>
                                Our platform provides real-time analytics, allowing businesses to track performance and make informed decisions to optimize customer engagement and service delivery.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={secure} alt="Secure Data Management" />
                        <Card.Body>
                            <Card.Title>Secure Data Management</Card.Title>
                            <Card.Text>
                                We ensure the highest level of security in data handling, protecting sensitive information and providing businesses with the peace of mind that their customer data is safe.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default AIBotDevelopment;
