/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './about.module.scss'
import useAbout from './useAbout.js'
import { ClipLoader } from 'react-spinners'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'

const About = () => {

  const { loading } = useAbout()

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

            <div style={{ height: '50vh' }}>About Content Here...</div>
          </>
        )
      }

      <Footer />
    </>
  )
}

export default About