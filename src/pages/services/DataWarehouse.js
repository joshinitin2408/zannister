import React from 'react';
import { Card } from 'react-bootstrap';
import dataWarehouseImage from '../../assests/img/data-warehouse.png';
import cost from '../../assests/img/cost saving.avif';
import growth from '../../assests/img/growth.jpeg';
import data from '../../assests/img/data-driven.png';

const DataWarehouse = () => {
    return (
        <div className="container-fluid px-4 fw-bold">
            <div className="text-center mb-5">
                <h2 className="mb-3">Data Warehouse</h2>
                <p>Transforming Data into Insightful Information.</p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img className="img-fluid sectionimage" src={dataWarehouseImage} alt="Data Warehouse" style={{ width: '80%' }} />
                </div>
                <div className="col-md-6">
                    <ul className="list fw-bold text-secondary">
                        <li className="list-item one"><p>Data Consolidation - Unify data from multiple sources for better insights.</p></li>
                        <li className="list-item two"><p>Scalable Architecture - Build a warehouse that grows with your business.</p></li>
                        <li className="list-item three"><p>Advanced Analytics - Leverage data for strategic decision-making.</p></li>
                    </ul>
                </div>
            </div>



            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={growth} alt="Improved Decision Making" />
                        <Card.Body>
                            <Card.Title>Improving Decision Making</Card.Title>
                            <Card.Text>
                                Our data warehouse solutions provide businesses with the necessary tools to analyze data effectively, leading to better and faster decision-making.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 1 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={cost} alt="Cost Efficiency" />
                        <Card.Body>
                            <Card.Title>Increasing Cost Efficiency</Card.Title>
                            <Card.Text>
                                By consolidating data in a centralized warehouse, businesses can reduce redundancy and cut down on storage costs, improving overall cost efficiency.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* New Card 2 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={data} alt="Data Accessibility" />
                        <Card.Body>
                            <Card.Title>Enhancing Data Accessibility</Card.Title>
                            <Card.Text>
                                Our data warehouse solutions allow for quicker access to organized data, empowering teams to extract insights rapidly and improve decision-making processes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DataWarehouse;
