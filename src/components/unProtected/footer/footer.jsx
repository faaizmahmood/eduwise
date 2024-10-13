/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './footer.module.scss'
import Icon from '../../../containers/Icon'

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className={`pb-2 pt-5 px-sm-0 px-2 ${styles.footer}`}>
                <div className='container pt-3'>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                            <h5>Logo Here</h5>
                            <p>ThemeMove deserves 5 star for themes features, design quality, flexibility and support service!</p>
                        </div>

                        <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled mt-3">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Courses</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Become an Instructor</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                            <h5>Social Media</h5>
                            <ul className="list-unstyled mt-3">
                                <li className='my-2'><a href="#"><Icon icon={'Twitter'} /> <span className='ms-2'>Twitter</span></a></li>
                                <li className='my-2'><a href="#"><Icon icon={'Youtube'} /> <span className='ms-2'>YouTube</span></a></li>
                                <li className='my-2'><a href="#"><Icon icon={'Linkedin'} /> <span className='ms-2'>LinkedIn</span></a></li>
                                <li className='my-2'><a href="#"><Icon icon={'Facebook'} /> <span className='ms-2'>Facebook</span></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li className='my-2'><a href="#"><Icon icon={'call'} /> <span className='ms-2'>(+88) 1990 6886</span></a></li>
                                <li className='my-2'><a href="#"><Icon icon={'mail'} /> <span className='ms-2'> agency@gmail.com</span></a></li>
                                <li className='my-2'><a href="#"><Icon icon={'address'} /> <span className='ms-2'> 5th Street, 21st Floor, New York, USA</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex flex-sm-row flex-column justify-content-sm-between text-md-start text-center'>
                        <p>Copyright 2024 All Rights Reserved</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </footer>
            {/* Footer */}

        </>
    )
}

export default Footer