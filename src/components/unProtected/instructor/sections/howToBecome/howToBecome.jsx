/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './howToBecome.module.scss';
import { SyncLoader } from 'react-spinners';


const Loading = () => {
    return (
        <div className={`${styles.loading}`}>
            <SyncLoader color="#0071DC" />
        </div>
    )
}

const HowToBecome = () => {
    const [tabsVisibility, setTabsVisibility] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
    });

    const [loading, setLoading] = useState(false); // State to manage loading

    // Function to handle tab toggle
    const toggleTabs = (id) => {
        setLoading(true); // Set loading to true when switching tabs
        setTabsVisibility({
            tab1: id === 1,
            tab2: id === 2,
            tab3: id === 3,
        });
    };

    // Simulate a loading delay when tab is changed
    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false); // Set loading to false after 2 seconds
            }, 2000);

            return () => clearTimeout(timer); // Cleanup the timer when the component unmounts or loading state changes
        }
    }, [loading]);

    return (
        <section className={`${styles.howToBecome} my-5`}>
            <div className="container">
                <h2 className="text-center">How to Become an Instructor</h2>

                <div className={`${styles.tabs} d-flex justify-content-center gap-4 my-4`}>
                    <button
                        className={`${tabsVisibility.tab1 ? styles.active : ''}`}
                        onClick={() => toggleTabs(1)}
                    >
                        Become an Instructor
                    </button>
                    <button
                        className={`${tabsVisibility.tab2 ? styles.active : ''}`}
                        onClick={() => toggleTabs(2)}
                    >
                        Instructor Rules
                    </button>
                    <button
                        className={`${tabsVisibility.tab3 ? styles.active : ''}`}
                        onClick={() => toggleTabs(3)}
                    >
                        Start With Courses
                    </button>
                </div>

                <div
                    className={`${styles.tab_content_1} ${styles.tab_content}`}
                    style={{ display: tabsVisibility.tab1 ? 'block' : 'none' }}
                >
                    {loading ? (
                        <>
                            <Loading />
                        </>
                    ) : (
                        <>
                            <div className={`row mt-5 pt-4 ${styles.tab_body}`}>
                                <div className="col-lg-6 h-100 d-flex flex-column justify-content-center">
                                    <h3>Become an Instructor</h3>
                                    <h4 className="mt-4">Plan your course</h4>
                                    <p>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctor...</p>

                                    <h4 className="mt-4">How we help you</h4>
                                    <p>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctor...</p>
                                </div>

                                <div className="col-lg-6 text-lg-start text-center">
                                    <img src="/images/tab_img_1.png" alt="tab image 1" className="img-fluid" />
                                </div>
                            </div>
                        </>
                    )

                    }
                </div>
                <div
                    className={`${styles.tab_content_2} ${styles.tab_content}`}
                    style={{ display: tabsVisibility.tab2 ? 'block' : 'none' }}
                >
                    {loading ? (
                        <>
                            <Loading />
                        </>
                    ) : (
                        <>
                            <div className={`row mt-5 pt-4 ${styles.tab_body}`}>

                                <div className="col-lg-6 text-lg-start text-center">
                                    <img src="/images/tab_img_1.png" alt="tab image 1" className="img-fluid" />
                                </div>

                                <div className="col-lg-6 h-100 d-flex flex-column justify-content-center">
                                    <h3 className='mb-3'> Instructor Rules</h3>

                                    <h5 className="mt-2"><i className="fa-sharp fa-regular fa-circle-check"></i> Content Quality</h5>
                                    <h5 className="mt-2"><i className="fa-sharp fa-regular fa-circle-check"></i> Originality</h5>
                                    <h5 className="mt-2"><i className="fa-sharp fa-regular fa-circle-check"></i> Engagement</h5>
                                    <h5 className="mt-2"><i className="fa-sharp fa-regular fa-circle-check"></i> Ethics</h5>
                                    <h5 className="mt-2"><i className="fa-sharp fa-regular fa-circle-check"></i> Transparency</h5>
                                    <h5 className="mt-2"><i className="fa-sharp fa-regular fa-circle-check"></i> Professional Development</h5>

                                </div>

                            </div>
                        </>
                    )

                    }
                </div>
                <div
                    className={`${styles.tab_content_3} ${styles.tab_content}`}
                    style={{ display: tabsVisibility.tab3 ? 'block' : 'none' }}
                >
                    {loading ? (
                        <>
                            <Loading />
                        </>
                    ) : (
                        <>
                            <div className={`row mt-5 pt-4 ${styles.tab_body}`}>
                                <div className="col-lg-6 h-100 d-flex flex-column justify-content-center">
                                    <h3>Become an Instructor</h3>
                                    <h4 className="mt-4">Plan your course</h4>
                                    <p>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctor...</p>

                                    <h4 className="mt-4">How we help you</h4>
                                    <p>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctor...</p>
                                </div>

                                <div className="col-lg-6 text-lg-start text-center">
                                    <img src="/images/tab_img_1.png" alt="tab image 1" className="img-fluid" />
                                </div>
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
        </section>
    );
};

export default HowToBecome;
