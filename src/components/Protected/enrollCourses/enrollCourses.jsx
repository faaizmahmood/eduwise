/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './enrollCourses.module.scss'
import { useSelector } from 'react-redux'
import useEnrollCourses from './useEnrollCourses'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'
import { NavLink } from 'react-router-dom'
import img from '../../../../public/images/course_thumbail_6.png'
import instructorImg from '../../../../public/images/profileImg.png'
import { PulseLoader } from 'react-spinners'

const EnrollCourses = () => {

    const { loading, alreadyEnrolledOrCompleted, course, handelEnroll, enrollLoading } = useEnrollCourses()

    return (

        <>
            {
                loading ? (
                    <>
                        <InnerPageLoading />
                    </>
                ) : (
                    <>
                        {
                            alreadyEnrolledOrCompleted ? (
                                <>
                                    <section className={`${styles.already_enrolled}`}>
                                        <h2>You&apos;ve Already Enrolled In This Course</h2>
                                        <NavLink to="/my-courses"><button className='mt-3'>Go To Your Courses</button></NavLink>
                                    </section>
                                </>
                            ) : (
                                <>
                                    <main className={`${styles.enrollCourses}`}>
                                        <div className='row w-100'>

                                            <div className={`${styles.enroll_content} col-6`}>
                                                <h1>{course?.title}</h1>

                                                <p>{course?.description}</p>

                                                <button className='mt-2' onClick={handelEnroll}>{enrollLoading ? <PulseLoader color="#ffffff" size={5}
                                                /> : "Enroll For Free"}</button>

                                                <div className={`${styles.tags} mt-4`}>
                                                    {
                                                        course?.tags?.map((ele, ind) => {
                                                            return (
                                                                <>
                                                                    <button key={ind}>{ele}</button>
                                                                </>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                            <div className={`${styles.enroll_img} col-6`}>
                                                <img src={img} alt='Enroll Course Image - Eduwise' />
                                            </div>

                                        </div>


                                        <div className={`${styles.about_instructor} mt-5`}>
                                            <button>About Instructor</button>

                                            <div className='mt-4 d-flex gap-3 align-items-center'>
                                                <img src={instructorImg} alt='Instructor Image' className='imf-fluid' />
                                                <div className={`${styles.instructor_metedata} mt-3`}>
                                                    <h6>{course?.instructor?.name}</h6>
                                                    <p>{course?.instructor?.bio}</p>
                                                </div>
                                            </div>

                                            <p>{course?.instructor?.name} is an experienced software developer and educator with a passion for teaching. With over 8 years of experience in the tech industry, John has worked with major companies to develop innovative software solutions. His areas of expertise include JavaScript, Python, and web development. John is known for his engaging teaching style, breaking down complex topics into simple, easy-to-understand lessons. He strives to help students not only understand programming concepts but also apply them in real-world projects.</p>
                                        </div>
                                        <div className={`${styles.course_review} mt-3`}>
                                            <button>Reviews</button>

                                            {
                                                course?.ratings?.reviews?.map((ele, ind) => {

                                                    const rating_num = Math.floor(ele?.rating)

                                                    return (
                                                        <>
                                                            <div className={`${styles.review_item} mt-3`} key={ind}>
                                                                <div className='d-flex gap-2'>

                                                                    {[...Array(rating_num > 0 ? rating_num : 0)].map((_, ind) => {
                                                                        return (
                                                                            <i key={ind} className="fa-solid fa-star" style={{ color: '#FFD700' }}></i>
                                                                        );
                                                                    })}
                                                                </div>

                                                                <h6 className='mt-3 text-white'>{ele?.comment}</h6>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }



                                        </div>
                                    </main>
                                </>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default EnrollCourses