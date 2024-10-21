import React from 'react';
import { Card } from 'react-bootstrap';
import website_dev from '../../assests/img/responsivewebdesign.jpeg';
import google from '../../assests/img/google.jpeg';
import customer from '../../assests/img/customer.jpeg';
import googlecustomerreview from '../../assests/img/googlecustomerreview.png';
import analytics from '../../assests/img/analytics.jpeg';

const ResponsiveWebsite = () => {
    return (
        <div className="container-fluid px-4 fw-bold">
            <div className="text-center mb-5">
                <h2 className="mb-3">Responsive Website</h2>
                <p>Empowering Your Business: Tailored Designs for Every Device, Every Time.</p>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img className="img-fluid sectionimage" src={website_dev} alt="Responsive Web Design" />
                </div>
                <div className="col-md-6">
                    <ul className="list fw-bold text-secondary">
                        <li className="list-item one"><p>SEO Optimization - Enhance visibility with targeted SEO strategies.</p></li>
                        <li className="list-item two"><p>Email Integration - Seamlessly connect with your audience via email marketing tools.</p></li>
                        <li className="list-item three"><p>Secure Hosting - Reliable and secure hosting to maintain consistent performance.</p></li>
                    </ul>
                </div>
            </div>





            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={google} alt="Google Ranking" />
                        <Card.Body>
                            <Card.Title>Improve your Google search ranking</Card.Title>
                            <Card.Text>
                                In today's digital landscape, a higher Google search ranking is paramount to stand out from the competition and attract the right audience. Our specialized team at Zannister understands the nuances of search engine algorithms and can propel your website to the top of Google's search results.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={customer} alt="Customer Conversion" />
                        <Card.Body>
                            <Card.Title>Converting users into customers</Card.Title>
                            <Card.Text>
                                In the ever-evolving digital landscape, converting user traffic into paying customers is the true measure of success. At Zannister, we specialize in turning curious onlookers into devoted customers through a strategic approach that combines data-driven insights and compelling marketing tactics.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={googlecustomerreview} style={{ height: "12rem" }} alt="Google Reviews" />
                        <Card.Body>
                            <Card.Title>Improve your Google Reviews</Card.Title>
                            <Card.Text>
                                In today's digital marketplace, positive reviews are the lifeblood of success. At Zannister, we understand the pivotal role that Google reviews play in shaping consumer perceptions. We specialize in elevating your online presence by strategically managing and enhancing your Google reviews.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Card className="h-100">
                        <Card.Img className="imgroi" variant="top" src={analytics} alt="Visitor Analytics" />
                        <Card.Body>
                            <Card.Title>Analytics of website visitors</Card.Title>
                            <Card.Text>
                                Understanding your website visitors is the key to unlocking untapped potential and driving meaningful growth. At Zannister, we specialize in harnessing the power of visitor analytics to provide actionable insights that fuel strategic decisions and optimize your online performance.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ResponsiveWebsite;
