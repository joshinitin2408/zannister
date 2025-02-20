import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaExternalLinkAlt, FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import gamls from '../assests/img/pro/gamls.png';
import merit_campus from '../assests/img/pro/merit_campus.jpg';
import mykinhealth from '../assests/img/pro/mykinhealth.png';
import traders from '../assests/img/pro/traders-market.png';
import adzshopHome from '../assests/img/pro/adzshopHome.png';
import bikes from '../assests/img/pro/listing_bikes_screen.png';
import visaka from '../assests/img/pro/visaka-landing-screen.jpg';
import samashti from '../assests/img/pro/samashti.png';
import Zeninsights from '../assests/img/pro/Zeninsights.png';
import riskwatch from '../assests/img/pro/riskwatch-home.png';
import dwatch from '../assests/img/pro/dashboardDHours.png';
import ondelDashboard from '../assests/img/pro/ondelDashboard.png';
import glad from '../assests/img/pro/glad.jpg';
import sahadev from '../assests/img/pro/sahadev-sweets-home-page.jpg';
import cfaa from '../assests/img/pro/cfaa-condo-app-home-screen.jpg';

const projects = [
    {
        name: 'Merit Campus',
        description: `Merit Campus is a one-stop portal for learning Java Topics, practicing Java Questions, 
                  and competing for Merit Certificates. It has 350+ topics, 2000+ MCQs, and 600+ Java programs.`,
        moreInfo: 'More Info',
        visit: 'http://java.meritcampus.com/',
        image: merit_campus,
    },
    {
        name: 'MyKinHealth',
        description: `MyKinHealth brings premium healthcare support through renowned medical experts in the USA, 
                  providing 24/7 healthcare monitoring and preventive care.`,
        moreInfo: 'More Info',
        visit: 'https://www.mykinhealth.com/',
        image: mykinhealth,
    },
    {
        name: 'Traders Market',
        description: `Traders Market is a platform where traders share knowledge, build networks, and explore 
                  algorithmic trading. It offers a space for recognition and reputation building.`,
        moreInfo: 'More Info',
        visit: 'https://www.tradersmarket.in/',
        image: traders,
    },
    {
        name: 'Adzshop',
        description: `Adzshop is an advertisement marketplace where ad space owners can post idle spaces, 
                  and corporates or individuals can rent them for advertising purposes.`,
        moreInfo: 'More Info',
        visit: 'http://www.adzshop.co/',
        image: adzshopHome,
    },
    {
        name: 'Visaka Estimation Tool',
        description: `Visaka Estimation Tool calculates material requirements for customers of Visaka Industries. 
                  The tool is used by marketing and engineering teams to estimate costs based on floor, rooftop, 
                  and wall dimensions.`,
        moreInfo: 'More Info',
        visit: 'https://VisakaCalculation.in/',
        image: visaka,
    },
    {
        name: 'Samshti',
        description: `Samshti is group of school, providing holistic education with a focus on culture, 
                  innovation, and overall student development on a 10-acre campus.`,
        moreInfo: 'More Info',
        visit: 'https://samashti-group.in/',
        image: samashti,
    },
    {
        name: 'Zen Insights',
        description: `Zen Insights helps enterprises adapt to market transitions driven by consumer, technology, and 
                  business model innovations.`,
        moreInfo: 'More Info',
        visit: 'http://www.zeninsights.co/',
        image: Zeninsights
    },
    {
        name: 'Risk Watch',
        description: `RiskWatch provides risk assessment solutions globally. It focuses on security and compliance, 
                  offering advanced risk assessment against evolving threats.`,
        moreInfo: 'More Info',
        visit: '#',
        image: riskwatch,
    },
    {
        name: 'D\'Hours',
        description: `D'Hours uses your location to display the best deals nearby and notifies you of discounts 
                  in your neighborhood.`,
        moreInfo: 'More Info',
        visit: 'http://www.dhours.com/',
        image: dwatch,
    },
    {
        name: 'OneDel',
        description: `OneDel is a logistics service that provides reliable delivery solutions for businesses and 
                  individuals.`,
        moreInfo: 'More Info',
        visit: 'http://zestone.co/',
        image: ondelDashboard,
    },
    {
        name: 'GLAD',
        description: `Good Lunch At Desk (GLAD) is a web portal that consolidates lunch orders from corporate offices 
                  and delivers them via local restaurants.`,
        moreInfo: 'More Info',
        visit: 'http://www.goodlunchatdesk.com/',
        image: glad,
    },
    {
        name: 'Sahadev Reddy Sweets',
        description: `Sahadev Reddy Sweets is a renowned sweets and snacks provider, offering online ordering 
                  capabilities and delivering to customers' doorsteps.`,
        moreInfo: 'More Info',
        visit: '#',
        image: sahadev,
    },
    {
        name: 'CFAA Condo App',
        description: `The CFAA Condo App is an Android app for condo residents in Singapore, offering various services 
                  such as booking common facilities, managing visitors, and receiving notifications.`,
        moreInfo: 'More Info',
        visit: '#',
        image: cfaa,
    }, {
        name: 'getbike',
        description: `getbike is a bike-share company designed for the Indian audience, offering affordable and 
                  convenient transportation for people who rely on public transport.`,
        moreInfo: 'More Info',
        visit: 'http://www.getbike.co.in/',
        image: bikes,
    },
];


const ClientsPage = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Our Clients</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index} md={6} lg={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={project.image} alt={project.name} />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <a href={project.visit} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" className="me-2">
                                        {project.moreInfo} <FaExternalLinkAlt />
                                    </Button>
                                </a>
                                {project.appStore && (
                                    <Button variant="outline-secondary" className="me-2">
                                        <FaApple /> {project.appStore}
                                    </Button>
                                )}
                                {project.playStore && (
                                    <Button variant="outline-secondary">
                                        <FaGooglePlay /> {project.playStore}
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ClientsPage;
