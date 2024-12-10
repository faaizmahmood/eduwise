/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'
import useCourses from './useCourses'
import styles from './courses.module.scss'
import { SyncLoader } from 'react-spinners'
import Sidebar from '../dashboard/components/sidebar/sidebar'
import { NavLink, useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup'


const CourseCard = ({ id, name, total_lesson, completed_lesson, completion_percent, thumbnail }) => {

    const navigate = useNavigate()

    const navigateCourseDetailPage = (id, completion_percent) => {

        navigate(`/my-courses/${id}`, { state: { completion_percent: completion_percent } });

    }

    return (
        <>
            <div className={`${styles.course_item} mt-3`} onClick={() => navigateCourseDetailPage(id, completion_percent)} style={{ cursor: 'pointer' }}>

                <div className='row'>
                    <div className='col-4'>

                        <img src={thumbnail === "" ? "https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/img_dummy.jpg" : thumbnail} />
                        
                    </div>
                    <div className='col-8'>

                        <div className={`${styles.course_data}`}>
                            <h5>{name}</h5>

                            {/* <div className={`${styles.course_lesson_count}`}>
                        <p>Total Lessons: <span>{total_lesson}</span></p>
                        <p>Completed Lessons: <span>{completed_lesson} / {total_lesson}</span></p>
                    </div> */}

                            {/* <div className={`${styles.course_progress}`}>
                        <div className={`${styles.course_progress_bar}`}>
                            <div className={`${styles.course_progress_bar_percent}`} style={{ width: `${completion_percent}%` }}> </div>
                        </div>
                        <p className='mt-3'>{completion_percent} % Complete</p>
                    </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const Courses = () => {

    const { loading, showCourses, courseView, coursesLoading, filteredCourse } = useCourses()

    return (
        <>
            {
                loading ? (
                    <>
                        <InnerPageLoading />
                    </>
                ) : (
                    <main className={`${styles.courses} px-4 `}>
                        <div className='row'>
                            <div className={`${styles.courses_main_content} col-lg-9 col-12 px-4 pt-3`}>
                                <div className='d-flex justify-content-between'>
                                    <h4>Enrolled Courses</h4>
                                    <i className="fa-regular fa-arrows-rotate" onClick={() => {
                                        location.reload()
                                    }}></i>
                                </div>

                                <section className={`${styles.tabs} mt-4`}>
                                    <div className={`${styles.tab_item}`}>
                                        <button className={`${courseView === 1 ? styles.active : ""}`} onClick={() => showCourses(1)}>All Courses</button>
                                    </div>
                                    <div className={`${styles.tab_item}`}>
                                        <button className={`${courseView === 2 ? styles.active : ""}`} onClick={() => showCourses(2)}>Active Courses</button>
                                    </div>
                                    <div className={`${styles.tab_item}`}>
                                        <button className={`${courseView === 3 ? styles.active : ""}`} onClick={() => showCourses(3)}>Completed Courses</button>
                                    </div>
                                </section>


                                <section className={`${styles.courses_content} mt-4 ms-1`}>

                                    {
                                        coursesLoading ? (
                                            <>
                                                <section style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <SyncLoader color="#0071DC" size={10} />
                                                </section>
                                            </>
                                        ) : (
                                            <>
                                                <>
                                                    <div className={`${styles.course_container}`}>
                                                        {/* <CourseCard />
                                                        <CourseCard /> */}

                                                        {

                                                            filteredCourse.length === 0 ? (
                                                                <>
                                                                    <div className={`${styles.no_courses}`}>
                                                                        <h2>No course Right Now :{")"}</h2>
                                                                        <NavLink to="/explore-courses"><button className='mt-3'>Explore Courses</button></NavLink>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>

                                                                    {
                                                                        filteredCourse?.map((ele, inde) => {
                                                                            return (
                                                                                <>
                                                                                    <CourseCard
                                                                                        id={ele.course_id}
                                                                                        name={ele.title}
                                                                                        total_lesson={ele.totalLessons}
                                                                                        completed_lesson={ele.completedLessons}
                                                                                        completion_percent={ele.progress_percentage}
                                                                                        thumbnail={ele?.thumbnail ? ele?.thumbnail : ""}
                                                                                    />
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </>
                                                            )


                                                        }
                                                    </div>
                                                </>
                                            </>
                                        )
                                    }

                                </section>
                            </div>
                            <div className='col-lg-3 d-lg-block d-none'>
                                <Sidebar />
                            </div>
                        </div>
                    </main>
                )
            }
        </>
    )
}

export default Courses