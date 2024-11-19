/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'
import useCourses from './useCourses'
import styles from './courses.module.scss'
import { SyncLoader } from 'react-spinners'
import Sidebar from '../dashboard/components/sidebar/sidebar'
import { useNavigate } from 'react-router-dom'


const CourseCard = ({ id, name, total_lesson, completed_lesson, completion_percent }) => {

    const navigate = useNavigate()

    const navigateCourseDetailPage=(id, completion_percent)=>{

        navigate(`/courses/${id}`, {state: {completion_percent: completion_percent}});

    }

    return (
        <>
            <div className={`${styles.course_item} mt-3`} onClick={()=>navigateCourseDetailPage(id, completion_percent)} style={{ cursor: 'pointer' }}>
                <img src='./images/course_thumbail_1.png' />
                <div className={`${styles.course_data}`}>
                    <h5>{name}</h5>

                    {/* <div className={`${styles.course_lesson_count}`}>
                        <p>Total Lessons: <span>{total_lesson}</span></p>
                        <p>Completed Lessons: <span>{completed_lesson} / {total_lesson}</span></p>
                    </div> */}

                    <div className={`${styles.course_progress}`}>
                        <div className={`${styles.course_progress_bar}`}>
                            <div className={`${styles.course_progress_bar_percent}`} style={{ width: `${completion_percent}%` }}> </div>
                        </div>
                        <p className='mt-3'>{completion_percent} % Complete</p>
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
                            <div className={`${styles.courses_main_content} col-9 px-4 pt-3`}>
                                <h4>Enrolled Courses</h4>

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
                                                                    No course Right Now
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
                            <div className='col-3'>
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