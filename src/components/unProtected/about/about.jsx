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
            <div style="width: 100%; height: 100%; background: linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%)"></div>
          </>
        )
      }

      <Footer />
    </>
  )
}

export default About