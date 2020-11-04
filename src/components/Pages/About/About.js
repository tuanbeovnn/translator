import React, { Component } from 'react';
import './../../../App.css';

class About extends Component {
    render() {
        return (
            <div>
                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <span>About Us</span>
                            <h2>About Us</h2>
                            <p>We are studying in Vaasa City</p>
                        </div>

                        <div className="row">
                            <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
                            <div className="col-lg-8 d-flex flex-column align-items-stretch">
                                <div className="content pl-lg-4 d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="icofont-rounded-right"></i> <strong>Name:</strong> Tuan Nguyen - Severino Flórez - Ernesto Ibañez</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.tuannguyen.com.vn</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +358 465464028</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Vaasa, Finland</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="icofont-rounded-right"></i> <strong>Age:</strong>Hide</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Bachelor</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> tuanquangnguyen1710@gmail.com</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        );
    }
}

export default About;
