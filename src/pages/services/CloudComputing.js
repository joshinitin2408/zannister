import React from 'react';
import { Card } from 'react-bootstrap';
import cloudComputingImage from '../../assests/img/cloud-computing.png';
import cost from '../../assests/img/cost saving.avif';
import integration from '../../assests/img/integration-system.jpg';
import oprational from '../../assests/img/operational-efficiency.png';

const CloudComputing = () => {
    return (
        <div className="container-fluid px-4 fw-bold">
            <div className="text-center mb-5">
                <h2 className="mb-3">Cloud Computing</h2>
                <p>Empowering Businesses with Scalable Cloud Solutions.</p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img className="img-fluid sectionimage" src={cloudComputingImage} alt="Cloud Computing" />
                </div>
                <div className="col-md-6">
                    <ul className="list fw-bold text-secondary">
                        <li className="list-item one"><p>Scalability - Quickly scale your infrastructure to meet demand.</p></li>
                        <li className="list-item two"><p>Cost Optimization - Reduce capital expenses with flexible cloud solutions.</p></li>
                        <li className="list-item three"><p>High Availability - Ensure business continuity with reliable cloud services.</p></li>
                    </ul>
                </div>
            </div>



            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={oprational} alt="Operational Efficiency" />
                        <Card.Body>
                            <Card.Title>Improving Operational Efficiency</Card.Title>
                            <Card.Text>
                                Our cloud computing solutions streamline your operations, providing the flexibility and resources you need to run your business more efficiently.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 1 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={cost} alt="Cost Savings" />
                        <Card.Body>
                            <Card.Title>Achieving Cost Savings</Card.Title>
                            <Card.Text>
                                With pay-as-you-go models, businesses only pay for the cloud services they use, eliminating unnecessary expenses and driving cost efficiency.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 2 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={integration} alt="Business Agility" />
                        <Card.Body>
                            <Card.Title>Enhancing Business Agility</Card.Title>
                            <Card.Text>
                                By leveraging cloud computing, your business can quickly adapt to changing market conditions, deploying new applications and scaling as needed.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CloudComputing;
