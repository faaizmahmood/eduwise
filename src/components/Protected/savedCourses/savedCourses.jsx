/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './savedCourses.module.scss'
import useSavedCourses from './useSavedCourses'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'
import { NavLink, useNavigate } from 'react-router-dom'

const SavedCourses = () => {

    const { loading, savedCourses, handleChange, searchTerm } = useSavedCourses()

    const navigate = useNavigate()

    return (

        <>
            {
                loading ? (
                    <>
                        <InnerPageLoading />
                    </>
                ) : (
                    <>
                        <section className={`${styles.saved_courses}`}>
                            <div className={`${styles.search_bar} my-3`}>

                                <input type='text' placeholder='Search Your Saved Courses...' value={searchTerm} onChange={handleChange} />

                            </div>

                            <div className='row'>

                                {
                                    savedCourses.length === 0 ? (
                                        <>
                                            <div className={`${styles.no_courses}`}>
                                                <h2>No Saved Courses :{")"}</h2>
                                                <NavLink to="/explore-courses"><button className='mt-3'>Explore Courses</button></NavLink>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {
                                                savedCourses?.map((ele, ind) => {
                                                    return (
                                                        <>
                                                            <div className={`col-lg-4 col-sm-6 col-12 p-2`} onClick={() => {
                                                                navigate(`/my-courses/${ele?.course_id}`)
                                                            }}>
                                                                <div className={`${styles.savedCourseCard}`}>
                                                                    <img src={ele?.course_thumbmail} alt='EduWise - Smart E-Learning Plate-Form' />

                                                                    <div className={`text-start ${styles.course_card_body}`}>

                                                                        <h3>{ele?.instuctor}</h3>
                                                                        <p>{ele?.avg_rating} Stars Rating</p>
                                                                        <h4>{ele?.course_title}</h4>
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
                        </section>
                    </>
                )
            }
        </>

    )
}

export default SavedCourses