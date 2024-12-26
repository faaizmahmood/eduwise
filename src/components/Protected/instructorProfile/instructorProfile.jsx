/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import pp from "../../../../public/images/PF_img_main.png";
import thumbnail from "../../../../public/images/course_thumbail_4.png";
import styles from './instructorProfile.module.scss';
import useInstructorProfile from "./useInstructorProfile";
import InnerPageLoading from "../../../containers/pageLoading/InnerPageLoading/innerPageLoading";

const InstructorProfile = () => {

    const [value, setValue] = useState(0); // State to handle the selected tab

    const handleChange = (event, newValue) => {
        setValue(newValue); // Update the selected tab index
    };

    const { loading, instructor, courses } = useInstructorProfile()

    return (

        <>

            {
                loading ? (
                    <>
                        <InnerPageLoading />
                    </>
                ) : (
                    <>
                        <section className={`${styles.instructorProfile}`}>

                            <div className={`${styles.instructorProfileImage}`}>
                                <img src={instructor?.InstructorPic ? instructor?.InstructorPic : pp} alt="EduWise" />
                            </div>

                            <h2 className="mt-3">{instructor?.fName} {instructor?.lName}</h2>

                            <p>{instructor?.specialization.slice(0, 100)}</p>

                            <div className={`${styles.btn_group} d-flex gap-2 mt-2`}>

                                {
                                    instructor?.contentType.map((ele, ind) => {
                                        return (
                                            <>
                                                <button key={ind}>{ele}</button>
                                            </>
                                        )
                                    })
                                }


                                {/* <button>Graphic</button>
                                <button>Graphic</button> */}

                            </div>

                            {/* <p className="mb-2 mt-2">⭐⭐⭐⭐⭐</p> */}

                            {/* MUI Tabs Section */}
                            <Box sx={{ width: '100%', marginTop: '10px' }}>
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
                                                <li>Teaching Experience: <b>{instructor?.yearsOfExperience} Years</b></li>
                                                Expertise: <b>{instructor?.expertise?.join(', ')}</b>
                                                <li>Degree Level: <b>{instructor?.degreeLevel}</b></li>
                                            </ul>
                                        </div>
                                    )}
                                    {/* ABOUT End */}


                                    {/* COURSE Start */}
                                    {value === 1 && (
                                        <div>
                                            <div className={`${styles.courses} row`}>

                                                {

                                                    courses?.length === 0 ? (
                                                        <>
                                                            <h2>No Courses Upload By Instructor</h2>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {
                                                                courses.slice().reverse()?.map((ele, ind) => {
                                                                    return (
                                                                        <>
                                                                            <div className="col-4 p-2" key={ind}>
                                                                                <div className={`${styles.courses_item}`}>
                                                                                    <img src={ele?.thumbnail} alt="EduWise" className="img-fluid" />

                                                                                    <div className={`${styles.course_item_body}`}>

                                                                                        <h3>{ele?.title ? ele?.title.slice(0, 80) : 'N/A'}</h3>

                                                                                        <h4>{ele?.instructor?.name ? ele?.instructor?.name : "N/A"}</h4>

                                                                                        {[...Array(Math.floor(ele?.ratings?.average_rating))].map((_, ind) => {
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
                                                        </>
                                                    )


                                                }

                                            </div>
                                        </div>
                                    )}
                                    {/* COURSE End */}


                                    {/* REVIEWS Start */}
                                    {value === 2 && (
                                        <div>
                                            <h3>Reviews</h3>

                                            {
                                                courses?.map((ele) => {
                                                    // Extract the first review if it exists
                                                    const firstReview = ele.ratings?.reviews?.[0];

                                                    const average_rating = Math.floor(ele.ratings?.average_rating);

                                                    if (!firstReview) return null;

                                                    return (
                                                        <div key={ele.id} className={`${styles.review}`}>
                                                            <div className={`${styles.review_item}`}>
                                                                {/* Render stars dynamically */}
                                                                <p className="mb-2 mt-2">
                                                                    {Array.from({ length: average_rating }, (_, index) => (
                                                                        <span key={index} style={{ fontSize: '16px' }}>⭐</span>
                                                                    ))}
                                                                </p>
                                                                {/* Render the review text or skip if no review */}
                                                                {firstReview && <p>{firstReview?.comment}</p>}
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }




                                        </div>
                                    )}
                                    {/* REVIEWS End */}
                                </Box>
                            </Box>
                        </section>
                    </>
                )
            }

        </>

    );
};

export default InstructorProfile;
