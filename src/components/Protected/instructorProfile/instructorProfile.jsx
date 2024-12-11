/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import pp from "../../../../public/images/PF_img_main.png";
import thumbnail from "../../../../public/images/course_thumbail_4.png";
import styles from './InstructorProfile.module.scss';

const InstructorProfile = () => {
    const [value, setValue] = useState(0); // State to handle the selected tab

    const handleChange = (event, newValue) => {
        setValue(newValue); // Update the selected tab index
    };

    return (
        <section className={`${styles.instructorProfile}`}>
            <div className={`${styles.instructorProfileImage}`}>
                <img src={pp} alt="EduWise" />
            </div>

            <h2 className="mt-3">Faaiz Mahmood</h2>

            <p>{"Good Experience Good Experience Good Experience Good Experience".slice(0, 100)}</p>

            <div className={`${styles.btn_group} d-flex gap-2 mt-2`}>

                <button>Graphic</button>
                <button>Graphic</button>
                <button>Graphic</button>

            </div>

            <p className="mb-2 mt-2">⭐⭐⭐⭐⭐</p>

            {/* MUI Tabs Section */}
            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="Instructor Profile Tabs">
                    <Tab label="About"
                        sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            '&.Mui-selected': {
                                color: '#0071DC', // Color for the selected tab
                            },
                            '&:hover': {
                                backgroundColor: '#F7FBFF', // Hover effect
                            },
                        }}
                    />
                    <Tab label="Courses"
                        sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            '&.Mui-selected': {
                                color: '#0071DC', // Color for the selected tab
                            },
                            '&:hover': {
                                backgroundColor: '#F7FBFF', // Hover effect
                            },
                        }}
                    />
                    <Tab label="Reviews"
                        sx={{
                            fontSize: '14px',
                            fontWeight: '600',
                            '&.Mui-selected': {
                                color: '#0071DC', // Color for the selected tab
                            },
                            '&:hover': {
                                backgroundColor: '#F7FBFF', // Hover effect
                            },
                        }}
                    />
                </Tabs>

                <hr className={`${styles.hr}`} />


                {/* Tab Panels */}
                <Box sx={{ py: 3 }}>

                    {/* ABOUT Start */}
                    {value === 0 && (
                        <div>
                            <p>Content for the About Me section goes here.</p>

                            <ul>
                                <li>Teaching Experience: <b>09 Years</b></li>
                                <li>Experties: <b>Graphic</b></li>
                                <li>Degree Level: <b>Bachelor&apos;s</b></li>
                            </ul>
                        </div>
                    )}
                    {/* ABOUT End */}


                    {/* COURSE Start */}
                    {value === 1 && (
                        <div>
                            <div className={`${styles.courses} row`}>

                                {
                                    [1, 2, 3, 4].map((ele, ind) => {
                                        return (
                                            <>
                                                <div className="col-4 p-2" key={ind}>
                                                    <div className={`${styles.courses_item}`}>
                                                        <img src={thumbnail} alt="EduWise" className="img-fluid" />

                                                        <div className={`${styles.course_item_body}`}>
                                                            <h3>Course Is Very Good</h3>
                                                            <h4>Faaiz Mahmood</h4>
                                                            {[...Array(5)].map((_, ind) => {
                                                                return (
                                                                    <i key={ind} className="fa-solid fa-star" style={{ color: '#FFD700' }}></i>
                                                                );
                                                            })}
                                                        </div>

                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    )}
                    {/* COURSE End */}


                    {/* REVIEWS Start */}
                    {value === 2 && (
                        <div>
                            <h3>Reviews</h3>
                            <p>Content for the reviews goes here.</p>
                            {/* You can render reviews and ratings here */}
                        </div>
                    )}
                    {/* REVIEWS End */}
                </Box>
            </Box>
        </section>
    );
};

export default InstructorProfile;
