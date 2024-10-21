import React, { useState } from 'react'
// import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [userData, setUserData] = useState([])
    const [submitbtn, setSubBtn] = useState(false);

    const onChange = (value) => {
        setSubBtn(true);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value, }));
    }
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        setTimeout(() => {
            alert("Your request has been submitted");
        }, 2000); // 2000 milliseconds = 2 seconds
    }


    console.log({ userData })
    return (
        <div><section className="contact-sec box-shaddow w-100">
            <h2 className='fw-bold text-center'>Contact Us</h2>
            <p className="text-center fw-bold mb-5 text-secondary">
                Do you have any questions ? Please do not hesitate to contact us directly. Our team will come back to you.
            </p>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <form id="contact-form" name="contact-form" onSubmit={handleSubmit} className="w-100 mx-auto px-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <label htmlFor="fullName" className="">Full name <span className='mandatory'>*</span></label>
                                <input type="text" id="fullName" name="fullName" className="form-control mb-3" onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <label htmlFor="phone" className="">Phone No.<span className='mandatory'>*</span></label>
                                <input type="text" id="phone" name="phone" className="form-control mb-3" onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <label htmlFor="email" className="">Your email<span className='mandatory'>*</span></label>
                                <input type="text" id="email" name="email" className="form-control mb-3" onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form">
                                <label htmlFor="message" className="">Your message<span className='mandatory'>*</span></label>
                                <textarea type="text" id="message" name="message" rows="3" className="form-control md-textarea mb-3" onChange={handleChange} required></textarea>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <ReCAPTCHA
                            sitekey="6LeSaCEoAAAAAEkdPfGy0us_6kTD3HNzAjVM3HI2"
                            name="captcha"
                            onChange={onChange}
                            className='mb-3'
                        />
                    </div> */}
                    <div className="text-center text-md-left">
                        <button className="btn btn-primary" type="submit"
                        // disabled={!submitbtn}
                        >Submit</button>
                    </div>
                </form>
            </div>
        </section></div>
    )
}

export default ContactForm