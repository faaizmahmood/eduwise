/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './courses.module.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const CourseCard = ({title, progress, id}) => {

    const navigate = useNavigate()

    const openCourse=(id)=>{

        console.log(id)

        navigate(`/courses/${id}`)

    }

    return (
        <>
            <div className={`${styles.course_item} mb-3`} style={{cursor:'pointer'}} onClick={()=>openCourse(id)}>

                <img src='./images/course_thumbail_1.png' alt='course_thumbnail' />
                <p className='mt-2'>{title}</p>

                <div className={`${styles.course_progress_track}`}>
                    <div className={`${styles.course_progress}`} style={{width:`${progress}%`}}></div>
                </div>

            </div>
        </>
    )
}

const Courses = () => {

    const currentUser = useSelector((state)=> state.set_up_user)

    const current_courses = currentUser.current_courses

    console.log(current_courses)

    return (

        <section className={`${styles.courses} mt-4`}>
            <h5>Continue Watching</h5>
            <div className={`${styles.courses_container} my-4`}>
                {
                    current_courses.map((ele) => {
                        return (
                            <>
                                <CourseCard id={ele.course_id} title={ele.title} progress={ele.progress_percentage}/>
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Courses