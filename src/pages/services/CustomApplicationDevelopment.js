import React from 'react';
import { Card } from 'react-bootstrap';
import appDevImage from '../../assests/img/Custom-Application-Development.jpg';
import erp from '../../assests/img/erp.png';
import hms from '../../assests/img/hms.png';
import crm from '../../assests/img/crm.jpg';
import financial from '../../assests/img/financial-system.webp';


const ApplicationDevelopment = () => {
    return (
        <div className="container-fluid px-4 fw-bold">
            <div className="text-center mb-5">
                <h2 className="mb-3">Custom Application Development</h2>
                <p>Custom Solutions Tailored to Your Business Needs.</p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img className="img-fluid sectionimage" src={appDevImage} alt="Application Development" />
                </div>
                <div className="col-md-6">
                    <ul className="list fw-bold text-secondary">
                        <li className="list-item one"><p>Cross-Platform - Develop applications that work seamlessly across devices.</p></li>
                        <li className="list-item two"><p>API Integration - Connect your app with various services and platforms.</p></li>
                        <li className="list-item three"><p>Continuous Support - Ensure smooth operations with ongoing maintenance.</p></li>
                    </ul>
                </div>
            </div>

            {/* New Section for ERP and Other Systems */}


            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={erp} alt="ERP Solutions" />
                        <Card.Body>
                            <Card.Title>ERP Solutions</Card.Title>
                            <Card.Text>
                                Streamline operations with a comprehensive ERP system tailored to your business's unique needs. Integrate processes seamlessly, from procurement and inventory management to HR and finance, fostering efficiency at every turn.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={hms} alt="Health Management Systems" />
                        <Card.Body>
                            <Card.Title>Health Management Systems</Card.Title>
                            <Card.Text>
                                Empower healthcare providers with robust systems that manage patient data securely and streamline clinical workflows. Drive better patient outcomes with solutions that prioritize accuracy, accessibility, and patient-centric care.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={crm} alt="Customer Engagement Systems" />
                        <Card.Body>
                            <Card.Title>Customer Engagement Systems</Card.Title>
                            <Card.Text>
                                Elevate customer experiences with tailored systems that foster engagement, loyalty, and personalized interactions. Create meaningful connections with your audience through intuitive, data-driven solutions that anticipate their needs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={financial} alt="Finance Systems" />
                        <Card.Body>
                            <Card.Title>Finance Systems</Card.Title>
                            <Card.Text>
                                Empower financial decision-making with systems that offer real-time insights, compliance, and secure financial management. Optimize financial processes and ensure transparency, efficiency, and accuracy in all financial operations.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ApplicationDevelopment;
