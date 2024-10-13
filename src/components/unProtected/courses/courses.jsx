/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './courses.module.scss'
import { ClipLoader } from 'react-spinners'
import useCourses from './useCourses'


const Courses = () => {

  const { loading } = useCourses()

  return (
    <>
      {
        loading ? (
          <>
            <div className={styles['page-loading']}>
              <ClipLoader color="#0071DC" />
            </div>
          </>
        ) : (
          <>
            <div style={{ height: '50vh' }}>Courses Content Here...</div>
          </>
        )
      }

    </>
  )
}

export default Courses