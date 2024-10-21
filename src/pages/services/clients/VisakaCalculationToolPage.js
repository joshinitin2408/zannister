import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import landingScreen from '../assets/img/pro/visaka_landing_screen.png';
// import sampleInputs from '../assets/img/pro/visaka_sample_inputs.png';
// import sampleCalculation from '../assets/img/pro/visaka_sample_calculation.png';
import landingScreen from '../../../assests/img/Data-Migration.png';
import sampleInputs from '../../../assests/img/Data-Migration.png';
import sampleCalculation from '../../../assests/img/Data-Migration.png';

const VisakaCalculationToolPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Visaka Calculation Tool</h2>
            <p className="text-center">
                We developed an estimation tool for Visaka Industries to calculate material requirements for customers.
                The tool is used by the marketing and engineering teams to estimate the material cost for floors, rooftops,
                walls, etc., based on given dimensions. Users can choose from a range of sheet options available.
            </p>
            <p className="text-center">
                It incorporates complex calculations involving trigonometry, wastage estimation, unit conversions, and
                cart maintenance, ensuring accurate material and cost estimations.
            </p>
            <p className="text-center">
                <a href="http://constructionnext.in/calculation-tool" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={landingScreen} alt="Visaka Landing Screen" />
                        <Card.Body>
                            <Card.Title>Visaka Landing Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={sampleInputs} alt="Sample Inputs" />
                        <Card.Body>
                            <Card.Title>Sample Inputs</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={sampleCalculation} alt="Sample Calculation" />
                        <Card.Body>
                            <Card.Title>Sample Calculation</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default VisakaCalculationToolPage;
