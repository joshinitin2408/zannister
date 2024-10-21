import React from 'react';
import '../App.css';
import website_dev from '../assests/img/GCS-Responsive-Web-Design.png';
import ai_bot from '../assests/img/Generative-ai-bot.avif';
import cc from '../assests/img/cloud-computing.png';
import ca from '../assests/img/Custom-Application-Development.jpg';
import appdev from '../assests/img/app-development.webp';
import si from '../assests/img/integration-system.jpg';
import dm from '../assests/img/Data-Migration.png';
import dw from '../assests/img/data-warehouse.png';
import { Button, Nav } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="my-2 px-2">
            <h2 className='fw-bold text-center text-uppercas p-3'>
                Our goal is to swiftly launch your product or services online to drive immediate business growth.
            </h2>
            <div className="d-flex flex-column justify-content-center align-items-center bg-light p-5">
                <div className='d-flex justify-content-center align-items-center fdc'>
                    <div className='leftSection'>
                        <img className='sectionimage img-fluid' src={website_dev} alt="Responsive Website" />
                    </div>
                    <div className='rightSection d-flex flex-column justify-content-center'>
                        <h2 className='fw-bold'>Responsive Website</h2>
                        <h5 className='fw-bold'>Build a responsive business website that adapts to all devices, ensuring a seamless user experience.</h5>
                        <ul className="list fw-bold text-secondary">
                            <li className="list-item one"><p>SEO Optimization - Enhance visibility with targeted SEO strategies.</p></li>
                            <li className="list-item two"><p>Email Integration - Seamlessly connect with your audience via email marketing tools.</p></li>
                            <li className="list-item three"><p>Secure Hosting - Reliable and secure hosting to maintain consistent performance.</p></li>
                        </ul>
                        <div>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/responsive-website"><Button>Read More</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <div className='d-flex justify-content-center align-items-center fdc'>
                    <div className='rightSection d-flex flex-column justify-content-center'>
                        <h2 className='fw-bold'>AI Bot Development</h2>
                        <h5 className='fw-bold'>Create intelligent AI bots to streamline operations and enhance customer engagement.</h5>
                        <ul className="list fw-bold text-secondary">
                            <li class="list-item one"><p>Natural Language Processing - Enable conversational AI for real-time communication.</p></li>
                            <li class="list-item two"><p>Multichannel Support - Integrate AI bots across various platforms.</p></li>
                            <li class="list-item three"><p>Data Analytics - Leverage insights for continuous improvement.</p></li>
                        </ul>
                        <div>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/ai-bot-development"><Button>Read More</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className='leftSection'>
                        <img className='sectionimage img-fluid' src={ai_bot} alt="AI Bot Development" />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center bg-light p-5">
                <div className='d-flex justify-content-center align-items-center fdc'>
                    <div className='leftSection'>
                        <img className='sectionimage img-fluid' src={cc} alt="Cloud Computing" style={{ width: '80%' }} />
                    </div>
                    <div className='rightSection d-flex flex-column justify-content-center'>
                        <h2 className='fw-bold'>Cloud Computing</h2>
                        <h5 className='fw-bold'>Scale your business with flexible, cost-effective cloud computing solutions.</h5>
                        <ul className="list fw-bold text-secondary">
                            <li class="list-item one"><p>Cloud Storage - Secure and scalable data storage options.</p></li>
                            <li class="list-item two"><p>Infrastructure as a Service - Deploy and manage scalable infrastructure.</p></li>
                            <li class="list-item three"><p>Disaster Recovery - Ensure business continuity with robust backup solutions.</p></li>
                        </ul>
                        <div>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/cloud-computing"><Button>Read More</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <div className='d-flex justify-content-center align-items-center fdc'>
                    <div className='rightSection d-flex flex-column justify-content-center'>
                        <h2 className='fw-bold'>Custom Application Development</h2>
                        <h5 className='fw-bold'>Design and build custom applications tailored to your business needs.</h5>
                        <ul className="list fw-bold text-secondary">
                            <li className="list-item one"><p>Cross-Platform - Develop applications that work seamlessly across devices.</p></li>
                            <li className="list-item two"><p>API Integration - Connect your app with various services and platforms.</p></li>
                            <li className="list-item three"><p>Continuous Support - Ensure smooth operations with ongoing maintenance.</p></li>
                        </ul>
                        <div>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/custom-application-development"><Button>Read More</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className='leftSection'>
                        <img className='sectionimage img-fluid' src={ca} alt="Application Development" />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center bg-light p-5">
                <div className='d-flex justify-content-center align-items-center fdc'>
                    <div className='leftSection'>
                        <img className='sectionimage img-fluid' src={appdev} alt="Mobile App Development" style={{ width: '90%' }} />
                    </div>
                    <div className='rightSection d-flex flex-column justify-content-center'>
                        <h2 className='fw-bold'>Mobile App Development</h2>
                        <h5 className='fw-bold'>Empower your business with innovative mobile app solutions.</h5>
                        <ul className="list fw-bold text-secondary">
                            <li class="list-item one"><p>Native and Hybrid Apps - Develop apps for both Android and iOS.</p></li>
                            <li class="list-item two"><p>App Store Optimization - Boost your app’s visibility and downloads.</p></li>
                            <li class="list-item three"><p>Performance Monitoring - Ensure optimal app performance with regular updates.</p></li>
                        </ul>
                        <div>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/mobile-app-development"><Button>Read More</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <div className='d-flex justify-content-center align-items-center fdc'>
                    <div className='rightSection d-flex flex-column justify-content-center'>
                        <h2 className='fw-bold'>System Integration</h2>
                        <h5 className='fw-bold'>Unify and streamline your business systems for seamless operations.</h5>
                        <ul className="list fw-bold text-secondary">
                            <li class="list-item one"><p>Data Synchronization - Achieve consistent data across all platforms.</p></li>
                            <li class="list-item two"><p>Custom APIs - Integrate systems with tailor-made API solutions.</p></li>
                            <li class="list-item three"><p>Automation - Automate business processes to enhance productivity.</p></li>
                        </ul>
                        <div>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/system-integration"><Button>Read More</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className='leftSection'>
                        <img className='sectionimage img-fluid' src={si} alt="System Integration" style={{ width: '80%' }} />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center bg-light p-5">
                <div className='d-flex justify-content-center align-items-center fdc'>
                    <div className='leftSection'>
                        <img className='sectionimage img-fluid' src={dm} alt="Data Migration" style={{ width: '80%' }} />
                    </div>
                    <div className='rightSection d-flex flex-column justify-content-center'>
                        <h2 className='fw-bold'>Data Migration</h2>
                        <h5 className='fw-bold'>Secure and seamless data migration to modernize your business operations.</h5>
                        <ul className="list fw-bold text-secondary">
                            <li class="list-item one"><p>Zero Downtime - Migrate without disrupting your business operations.</p></li>
                            <li class="list-item two"><p>Data Integrity - Ensure complete data accuracy and integrity during migration.</p></li>
                            <li class="list-item three"><p>Scalability - Future-proof your data infrastructure for growth.</p></li>
                        </ul>
                        <div>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/data-migration"><Button>Read More</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <div className='d-flex justify-content-center align-items-center fdc'>
                    <div className='rightSection d-flex flex-column justify-content-center'>
                        <h2 className='fw-bold'>Data Warehouse</h2>
                        <h5 className='fw-bold'>Centralize your data with secure and scalable data warehousing solutions.</h5>
                        <ul className="list fw-bold text-secondary">
                            <li class="list-item one"><p>Data Consolidation - Unify data from multiple sources for better insights.</p></li>
                            <li class="list-item two"><p>Scalable Architecture - Build a warehouse that grows with your business.</p></li>
                            <li class="list-item three"><p>Advanced Analytics - Leverage data for strategic decision-making.</p></li>
                        </ul>
                        <div>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="/data-warehouse"><Button>Read More</Button></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className='leftSection'>
                        <img className='sectionimage img-fluid' src={dw} alt="Data Warehouse" style={{ width: '70%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
