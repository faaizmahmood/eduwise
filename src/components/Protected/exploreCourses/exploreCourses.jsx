/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './exploreCourses.module.scss'
import useExploreCourses from './useExploreCourses'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'

const ExploreCourses = () => {

  const { loading, course, openCourse, filteredCourses } = useExploreCourses()


  console.log("again courses", filteredCourses)

  return (
    <>
      {
        loading ? (
          <>
            <InnerPageLoading />
          </>
        ) : (
          <>

            <main className={`${styles.explore_courses}`}>
              {
                console.log("Filtered Courses in JSX:", filteredCourses)
              }
              {

                filteredCourses.length === 0 ? (
                  <>
                    <section className={`${styles.no_course_available}`}>
                      <h2>No Course Find Related to Your Search</h2>
                    </section>
                  </>
                ) : (
                  <>
                    {


                      filteredCourses.slice().reverse().map((ele, ind) => {

                        const rating_num = Math.floor(ele?.ratings?.average_rating)

                        return (
                          <>
                            <div
                              className={`${styles.course_item} mt-3`}
                              onClick={() => openCourse(ele)}
                              key={ele._id}
                            >
                              <div className={styles['course-card']}>
                                <div className={`position-relative ${styles.course_card_head}`}>
                                  <img
                                    src={ele?.thumbnail ? ele?.thumbnail :  `./images/course_thumbail_1.png`}
                                    alt="course_thumbnail"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className={`text-start ${styles.course_card_body}`}>
                                  <h3>{ele?.title.slice(0, 40)}...</h3>
                                  <h4>{ele?.instructor?.name}</h4>
                                  <div className='d-flex gap-2 align-items-center'>
                                    {[...Array(rating_num > 0 ? rating_num : 0)].map((_, ind) => {
                                      return (
                                        <i key={ind} className="fa-solid fa-star" style={{ color: '#FFD700' }}></i>
                                      );
                                    })}

                                    <p className=''>{`(${rating_num} stars)`}</p>
                                  </div>
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
            </main>
          </>
        )
      }
    </>
  )
}

export default ExploreCourses