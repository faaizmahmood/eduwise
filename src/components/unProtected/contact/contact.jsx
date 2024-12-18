/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './contact.module.scss'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import PageLoading from '../../../containers/pageLoading/outerPageLoading/pageLoading';

const Contact = () => {


    const [loading, setLoading] = useState(true)


    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000);

    }, [])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_xpsq3fq', // EmailJS Service ID
                'template_axz0i14', // EmailJS Template ID
                formData, // This will send all form data to your email
                'JsWOv1v6YxFnssxUR' // EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' }); // Reset form
                    toast.success("Message Sent!")
                },
                (error) => {
                    console.error('FAILED...', error);
                    setStatus('Failed to send the message. Please try again later.');
                    toast.error("Error While Sending!")
                }
            );
    };


    const navigate = useNavigate()

    const bg = {
        background: 'url(./images/contact_bg.jpg)',
        backgroundPosition: 'center ',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }



    return (

        <>

            {
                loading ? (
                    <>
                        <PageLoading />
                    </>
                ) : (
                    <>
                        < main className={`${styles.contact}`}>

                            <section className={`${styles.hero}`} style={bg}>
                                <h1>Contact <span>Us</span></h1>
                                <input type={'text'} onChange={() => {
                                    navigate('/courses')
                                }} className='mt-4' placeholder='What do you want to learn?' />
                            </section>


                            <section className={`${styles.contact_form_container} mt-5 py-5`}>

                                <div className='container'>
                                    <div className='row g-5'>
                                        <div className={`${styles.contact_form_content} col-lg-6 pt-sm-5`}>
                                            <h2>Keep In Touch With Us.</h2>
                                            <p>We’re here to help! Whether you have questions, need support, or want to collaborate, reach out and our team will assist you.</p>

                                            <h3 className='mt-3'>Address</h3>
                                            <p>University of Engineering and Technology, Lahore, Narowal Campus</p>

                                            <h3 className='mt-3'>Phone</h3>
                                            <p>+92 302 7837990</p>

                                            <h3 className='mt-3'>Email</h3>
                                            <p>contact@eduwiseapp.tech</p>

                                        </div>
                                        <div className='col-lg-6'>
                                            <div className={`${styles.contact_form}`}>
                                                <h2>Send a Message</h2>

                                                <form onSubmit={handleSubmit}>

                                                    <div className={`${styles.input_item}`}>

                                                        <label form='name'>Name</label>
                                                        <input
                                                            name="name"
                                                            id="name"
                                                            type="text"
                                                            placeholder="Enter your name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                        />

                                                    </div>
                                                    <div className={`${styles.input_item}`}>

                                                        <label form='email'>Name</label>
                                                        <input
                                                            name="email"
                                                            id="email"
                                                            type="email"
                                                            placeholder="Enter your email address"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                        />

                                                    </div>
                                                    <div className={`${styles.input_item}`}>

                                                        <label form='message'>Messgae</label>
                                                        <textarea
                                                            rows={5}
                                                            name="message"
                                                            id="message"
                                                            placeholder="Message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            required
                                                        />

                                                    </div>


                                                    <button className='mt-3' type='submit'>Submit</button>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>


                            <section className={`${styles.map} mt-5`}>

                                <div className='container'>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6504.610587258835!2d74.76095220967773!3d32.096608235768194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391953f55817d0e1%3A0x95c765f70d155ed0!2sUniversity%20of%20Engineering%20and%20Technology%20(Narowal%20Sub-Campus)!5e0!3m2!1sen!2s!4v1732021946149!5m2!1sen!2s"
                                        width="100%"
                                        height="350"
                                        style={{ border: 0, borderRadius: '10px' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        aria-label="Google Maps location of University of Engineering and Technology, Narowal Sub-Campus"
                                    ></iframe>
                                </div>

                            </section>

                        </main >
                    </>

                )

            }

        </>

    )
}

export default Contact