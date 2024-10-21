import React from 'react';
import { Card } from 'react-bootstrap';
import dataMigrationImage from '../../assests/img/Data-Migration.png';
import secure from '../../assests/img/secure-data-management.jpg';
import cost from '../../assests/img/cost.jpeg';
import boost from '../../assests/img/boost.webp';

const DataMigration = () => {
    return (
        <div className="container-fluid px-4 fw-bold">
            <div className="text-center mb-5">
                <h2 className="mb-3">Data Migration</h2>
                <p>Securely Moving Your Data to the Cloud.</p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img className="img-fluid sectionimage" src={dataMigrationImage} alt="Data Migration" />
                </div>
                <div className="col-md-6">
                    <ul className="list fw-bold text-secondary">
                        <li className="list-item one"><p>Zero Downtime - Migrate without disrupting your business operations.</p></li>
                        <li className="list-item two"><p>Data Integrity - Ensure complete data accuracy and integrity during migration.</p></li>
                        <li className="list-item three"><p>Scalability - Future-proof your data infrastructure for growth.</p></li>
                    </ul>
                </div>
            </div>



            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={cost} alt="Cost Savings" />
                        <Card.Body>
                            <Card.Title>Achieving Cost Savings</Card.Title>
                            <Card.Text>
                                Our data migration services streamline your data management, reducing costs associated with data storage and access, leading to overall savings.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 1 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={secure} alt="Improved Security" />
                        <Card.Body>
                            <Card.Title>Enhancing Data Security</Card.Title>
                            <Card.Text>
                                By migrating to the cloud, we ensure that your data is protected with the latest security protocols, providing enhanced data safety and compliance.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 2 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={boost} alt="Performance" />
                        <Card.Body>
                            <Card.Title>Boosting System Performance</Card.Title>
                            <Card.Text>
                                With cloud migration, your systems experience improved speed and reliability, enhancing performance and productivity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DataMigration;
