import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import homePage from '../assests/img/pro/traders_market_home.png';
// import tradeCalls from '../assests/img/pro/traders_market_trade_calls.png';
// import marketNews from '../assests/img/pro/traders_market_news.png';
import homePage from '../../../assests/img/Data-Migration.png';
import tradeCalls from '../../../assests/img/Data-Migration.png';
import marketNews from '../../../assests/img/Data-Migration.png';

const TradersMarketPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Traders Market</h2>
            <p className="text-center">
                Traders Market is an interactive platform that connects traders, keeping them updated with the latest
                market news and technological advancements. It allows users to navigate through Analysts' pages,
                review their performance, and subscribe for updates. Traders Market provides real-time market news
                directly from experts, ensuring that traders stay informed and make better decisions.
            </p>
            <p className="text-center">
                <a href="http://www.tradersmarket.in" target="_blank" rel="noopener noreferrer">
                    Visit Website <FaExternalLinkAlt />
                </a>
            </p>

            <h4 className="text-center mt-4">Sample Screenshots</h4>
            <Row className="mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={homePage} alt="Traders Market Home Page" />
                        <Card.Body>
                            <Card.Title>Home Page</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={tradeCalls} alt="Trade Calls Page" />
                        <Card.Body>
                            <Card.Title>Trade Calls</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={marketNews} alt="Market News Page" />
                        <Card.Body>
                            <Card.Title>Market News</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TradersMarketPage;
