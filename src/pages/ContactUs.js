import React, { useState } from 'react'
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
    return (
        <div className='d-flex justify-content-center my-2'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <section className='contact-sec'>
                            <h2 className='fw-bold'>Address</h2>
                            <p className='fw-bold text-secondary'>
                                3rd Floor GIS Campus<br />
                                Beside Rajeev Gandhi Stadium<br />
                                Chhindwara,<br />
                                Madhya Pradesh-480441<br /><br />
                                Contact Number: +91 7829020210<br />
                                Email: contact.zannister@gmail.com
                            </p>
                            <div>
                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1944.5686948736775!2d77.673515!3d12.8988859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13411d0018b9%3A0xe19175f4134be851!2sOwners%20Court%20Layout%2C%20Kasavanahalli%2C%20Bengaluru%2C%20Karnataka%20560035!5e0!3m2!1sen!2sin!4v1700553223226!5m2!1sen!2sin"
                                    width="560"
                                    height="400"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe> */}
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d308.20816966572437!2d78.77643157843299!3d22.18979746030214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739778755083!5m2!1sen!2sin" width="560" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d727.5896358912205!2d78.77680616415351!3d22.189626716660623!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1739780544176!5m2!1sen!2sin" width="560" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs