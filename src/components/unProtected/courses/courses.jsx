/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './courses.module.scss'
import { ClipLoader } from 'react-spinners'
import useCourses from './useCourses'
import PageLoading from '../../../containers/pageLoading/outerPageLoading/pageLoading';


const Courses = () => {

  const { loading, courses, handelInput, filteredCourses, input } = useCourses()


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
            <PageLoading/>
          </>
        ) : (
          <>
            <section className={`${styles.hero}`} style={bg}>
              <h1>Courses</h1>
              <input type={'text'} className='mt-4' value={input} onInput={handelInput} placeholder='What do you want to learn?' />
            </section>

            <section>

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
                                <div className={styles['course-card']} key={ind}>
                                  <div className={`position-relative ${styles.course_card_head}`}>
                                    <img src={`./images/${ele.image}`} alt='course_thumbail_1' className='img-fluid' />
                                    <div className={styles['courses_card_btns']}>
                                      {
                                        ele.isFeatured ? <button disabled className={styles['courses_card_btn']} style={{ backgroundColor: '#D31819' }}>FEATURED</button> : ""
                                      }
                                      {
                                        ele.isFree ? <button disabled className={styles['courses_card_btn']} style={{ backgroundColor: '#6CBD7E' }}>FREE</button> : ""
                                      }
                                      {
                                        ele.discount === 0 ? "" : <button disabled className={styles['courses_card_btn']} style={{ backgroundColor: '#0071DC' }}>-{ele.discount}%</button>
                                      }
                                    </div>

                                  </div>
                                  <div className={`text-start ${styles.course_card_body}`}>
                                    {
                                      renderButton(ele)
                                    }
                                    <h3>{ele.description}</h3>
                                    <h4>{ele.instructor}</h4>
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