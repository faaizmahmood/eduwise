/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './about.module.scss'
import useAbout from './useAbout.js'
import { ClipLoader } from 'react-spinners'

const About = () => {

  const { loading } = useAbout()

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

            <div style={{ height: '50vh' }}>About Content Here...</div>
          </>
        )
      }

    </>
  )
}

export default About