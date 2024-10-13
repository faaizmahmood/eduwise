/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './instructor.module.scss'
import { ClipLoader } from 'react-spinners'
import useInstructor from './useInstructor'
import Header from '../header/header'
import Footer from '../footer/footer';

const Instructor = () => {

  const { loading } = useInstructor()

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
            
            <div style={{height:'50vh'}}>Instructor Content Here...</div>
          </>
        )
      }
    </>
  )
}

export default Instructor