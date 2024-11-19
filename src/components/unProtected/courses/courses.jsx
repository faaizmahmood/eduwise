/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './courses.module.scss'
import { ClipLoader } from 'react-spinners'
import useCourses from './useCourses'
import PageLoading from '../../../containers/pageLoading/outerPageLoading/pageLoading';
import { useNavigate } from 'react-router-dom';


const Courses = () => {

  const { loading, courses, handelInput, filteredCourses, input } = useCourses()

  console.log("data.courses || []", filteredCourses)

  const navigate = useNavigate()

  const bg = {
    background: 'url(./images/courses_hero_bg.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const renderButton = (ele) => {
    if (ele.level === "All Levels") {
      return <button disabled style={{ backgroundColor: '#DCF4F6', color: '#44D9E1' }}>{ele.level}</button>;
    } else if (ele.level === "Beginners") {
      return <button style={{ backgroundColor: '#E7E8FF', color: '#7A75FE' }}>{ele.level}</button>;
    } else if (ele.level === "Intermediate") {
      return <button style={{ backgroundColor: '#E9F5EC', color: '#93C795' }}>{ele.level}</button>;
    } else if (ele.level === "Advanced") {
      return <button style={{ backgroundColor: '#FFE0B2', color: '#FF9800' }}>{ele.level}</button>;
    } else {
      return <button>{ele.level}</button>;
    }
  };


  return (
    <>
      {
        loading ? (
          <>
            <PageLoading />
          </>
        ) : (
          <>
            <section className={`${styles.hero}`} style={bg}>
              <h1>Courses</h1>
              <input type={'text'} className='mt-4' value={input} onInput={handelInput} placeholder='What do you want to learn?' />
            </section>

            <section className='mb-5'>

              <div className={`container mt-5 ${styles.courses_content}`}>
                <h6>We found <b>{filteredCourses.length}</b> courses available for you</h6>
              </div>

              <div className={`container ${styles.courses_list}`}>



                {
                  loading ? (
                    <div className={styles['course-loading']}>
                      <ClipLoader color="#0071DC" />
                    </div>
                  ) : (
                    <>
                      {
                        filteredCourses.length !== 0 ? (
                          filteredCourses.map((ele, ind) => {
                            return (
                              <>
                                <div className={styles['course-card']} key={ind} onClick={() => navigate('/auth/signup')} style={{ cursor: 'pointer' }}>
                                  <div className={`position-relative ${styles.course_card_head}`}>
                                    <img src={`./images/course_thumbail_1.png`} alt='course_thumbail_1' className='img-fluid' />

                                  </div>
                                  <div className={`text-start ${styles.course_card_body}`}>

                                    <h3>{ele?.instructor?.name}</h3>
                                    <p>{ele?.ratings?.average_rating} Ratings</p>
                                    <h4>{ele?.description}</h4>
                                  </div>
                                </div>
                              </>
                            )
                          })
                        ) : (
                          <>
                            <div className={styles['course-not-available']}>
                              <h2>Courses not available</h2>
                              <img src='./images/not_found_image.png' alt='Not found image...' width={'300px'} />
                            </div>
                          </>
                        )
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

export default Courses