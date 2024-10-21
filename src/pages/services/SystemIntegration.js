import React from 'react';
import { Card } from 'react-bootstrap';
import systemIntegrationImage from '../../assests/img/integration-system.jpg';
import cost from '../../assests/img/cost.jpeg';
import colab from '../../assests/img/colab.png';
import scale from '../../assests/img/scale.png';

const SystemIntegration = () => {
    return (
        <div className="container-fluid px-4 fw-bold">
            <div className="text-center mb-5">
                <h2 className="mb-3">System Integration</h2>
                <p>Streamlining Operations Through Seamless Integration.</p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img className="img-fluid sectionimage" src={systemIntegrationImage} alt="System Integration" />
                </div>
                <div className="col-md-6">
                    <ul className="list fw-bold text-secondary">
                        <li className="list-item one"><p>Data Synchronization - Achieve consistent data across all platforms.</p></li>
                        <li className="list-item two"><p>Custom APIs - Integrate systems with tailor-made API solutions.</p></li>
                        <li className="list-item three"><p>Automation - Automate business processes to enhance productivity.</p></li>
                    </ul>
                </div>
            </div>



            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={colab} alt="Enhanced Collaboration" />
                        <Card.Body>
                            <Card.Title>Enhancing Collaboration</Card.Title>
                            <Card.Text>
                                Our system integration services facilitate collaboration among teams by providing seamless access to shared data and resources, enhancing productivity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 1 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={cost} alt="Reduced Operational Costs" />
                        <Card.Body>
                            <Card.Title>Reducing Operational Costs</Card.Title>
                            <Card.Text>
                                Through the integration of automated workflows and system synchronization, our services help in reducing manual efforts and operational costs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 2 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={scale} alt="Scalability" />
                        <Card.Body>
                            <Card.Title>Improving Scalability</Card.Title>
                            <Card.Text>
                                Our integration solutions ensure your systems can grow with your business, offering scalability and flexibility as your operations expand.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SystemIntegration;
