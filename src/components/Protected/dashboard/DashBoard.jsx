/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'
import Banner from './components/banner/banner'
import Sidebar from './components/sidebar/sidebar'
import styles from './Dashboard.module.scss'
import Activity from './components/activity/activity'
import Courses from './components/courses/courses'

const DashBoard = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })


  return (
    <>
      {
        loading ? (
          <>
            <InnerPageLoading />
          </>
        ) : (
          <>
            <main className={`${styles.dashboard} p-lg-0 p-3`}>
              <div className='row'>

                <div className={`col-lg-9 ${styles.main_content}`}>
                  <Banner />
                  <Activity />
                  <Courses />
                </div>
                <div className='col-3 d-lg-block d-none'>

                  <Sidebar />
                </div>

              </div>
            </main>
          </>
        )
      }
    </>



  )
}

export default DashBoard