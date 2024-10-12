/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './instructor.module.scss'
import { ClipLoader } from 'react-spinners'
import useInstructor from './useInstructor'
import Header from '../header/header'

const Instructor = () => {

  const { loading } = useInstructor()

  return (
    <>
    <Header />
      {
        loading ? (
          <>
            <div className={styles['page-loading']}>
              <ClipLoader color="#0071DC" />
            </div>
          </>
        ) : (
          <>
            
            <div>Instructor</div>
          </>
        )
      }
    </>
  )
}

export default Instructor