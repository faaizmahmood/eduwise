/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './courseDetailPage.module.scss'
import video from '../../../../public/videos/API_Video.mp4'
import useCourseDetailPage from './useCourseDetailPage'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import thumbnail from '../../../../public/images/course_thumbail_1.png'
import pf from '../../../../public/images/profileImg.png'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'
import { useNavigate } from 'react-router-dom';


const CourseDetailPage = () => {

    const colors = ['#0071dc', '#262626', '#a6a6a6', '#a6a6a6'];

    const { loading, currentTime, handleTimeUpdate, handleLoadedMetadata, duration, courseProgress, boom, enableButton, course, videoRef, courseID } = useCourseDetailPage()

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

                        <main className={`${styles.course_detail_page}`}>
                            <div className='row'>

                                <div className='col-8'>
                                    <video
                                        ref={videoRef}
                                        controls="controls"
                                        onTimeUpdate={handleTimeUpdate}
                                        onLoadedMetadata={handleLoadedMetadata}
                                        poster={thumbnail}
                                    >
                                        <source src={video} type="video/mp4" />
                                    </video>
                                    <div className={`${styles.course_meta_data} d-flex justify-content-between align-items-center`}>
                                        <h3 className='mt-3'>{course?.title}</h3>
                                        {enableButton ? <button onClick={() => {
                                            navigate(`/quiz/${courseID}/?source=course&course_title=${course?.title}`, {state : {course_source: "course"}})
                                        }}>Got To Quiz</button> : ""}
                                    </div>

                                    <div className={`${styles.instructor_detail} mt-4`}>

                                        <div className='row align-items-center'>
                                            <div className='col-6 d-flex gap-4 align-items-center'>
                                                <img src={pf} alt='...' className='img-fluid' />
                                                <div className='mt-2'>
                                                    <h4>Ayesha Khan</h4>
                                                    <p>Mentor - Web Developer at Google</p>
                                                </div>
                                            </div>
                                            <div className='col-6 d-flex gap-3 justify-content-end'>
                                                <i className="fa-light fa-bookmark"></i>

                                                <Popup trigger={<i className="fa-regular fa-share-nodes"></i>} modal >
                                                    <div className={`${styles.share_model} d-flex justify-content-center align-items-center`} style={{ height: '30vh', borderRadius: '20px' }}>
                                                        <div className={`${styles.content}`}>
                                                            <p>Share this link via</p>
                                                            <ul className={`${styles.icons}`}>
                                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                                                                <a href="#"><i className="fab fa-telegram-plane"></i></a>
                                                            </ul>
                                                            <p>Or copy link</p>
                                                            <div className={`${styles.field}`}>
                                                                <i className="url-icon uil uil-link"></i>
                                                                <input type="text" value="https://codepen.io/coding_dev_" />
                                                                <button>Copy</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Popup>
                                            </div>
                                        </div>

                                    </div>




                                    {/* <p>Time: {currentTime}</p>
                <p>duration: {duration}</p> */}

                                    {/* {
                            boom ? (
                                <ReactConfetti/>
                            ) : null
                        } */}
                                </div>

                                <div className='col-4'>
                                    <div className={`${styles.course_progress}`}>
                                        <h3>Your Study Progress <span className='ms-1'>{courseProgress ? courseProgress : "0"}%</span></h3>

                                        <div className={`${styles.progress_bar} mt-3`}>
                                            <div className={`${styles.progress_points} ${styles.progress_points_1} ${courseProgress >= 25 ? styles.active : ""}`} style={{ width: courseProgress >= 25 ? "28%" : "" }}></div>
                                            <div className={`${styles.progress_points} ${styles.progress_points_2} ${courseProgress >= 50 ? styles.active : ""}`} style={{ width: courseProgress >= 50 ? "30%" : "" }}></div>
                                            <div className={`${styles.progress_points} ${styles.progress_points_3} ${courseProgress >= 75 ? styles.active : ""}`} style={{ width: courseProgress >= 75 ? "30%" : "" }}></div>
                                            <div className={`${styles.progress_points} ${styles.progress_points_4} ${courseProgress >= 100 ? styles.active : ""}`} style={{ width: courseProgress >= 100 ? "30%" : "" }}></div>
                                            <div className={`${styles.progress_points} ${styles.progress_points_5}`}></div>
                                        </div>

                                        <div className={`${styles.messgae_for_user} mt-4`}>
                                            <p>Graet Job!🎉 You&apos;re on the path to getting a certified of {course?.title}. Your dedication to learning is impreseive. Finish Strong!</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </main>


                    </>
                )
            }



        </>
    )
}

export default CourseDetailPage