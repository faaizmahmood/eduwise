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
                      filteredCourses.map((ele, ind) => (
                        <div
                          className={`${styles.course_item}`}
                          onClick={() => openCourse(ele)}
                          key={ele._id}
                        >
                          <div className={styles['course-card']}>
                            <div className={`position-relative ${styles.course_card_head}`}>
                              <img
                                src={`./images/course_thumbail_1.png`}
                                alt="course_thumbnail"
                                className="img-fluid"
                              />
                            </div>
                            <div className={`text-start ${styles.course_card_body}`}>
                              <h3>{ele.title}</h3>
                              <h4>{ele.description}</h4>
                            </div>
                          </div>
                        </div>
                      ))
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