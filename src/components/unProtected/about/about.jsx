/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './about.module.scss'
import useAbout from './useAbout.js'
import { BarLoader, ClipLoader } from 'react-spinners'
import PageLoading from '../../../containers/pageLoading/outerPageLoading/pageLoading';

const About = () => {

  const { loading } = useAbout()

  return (
    <>
      {
        loading ? (
          <>
            <PageLoading/>
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