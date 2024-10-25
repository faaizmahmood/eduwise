/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './instructor.module.scss'
import { BarLoader, ClipLoader } from 'react-spinners'
import useInstructor from './useInstructor'
import Header from '../header/header'
import Footer from '../footer/footer';
import PageLoading from '../../../containers/pageLoading/outerPageLoading/pageLoading';

const Instructor = () => {

  const { loading } = useInstructor()

  return (
    <>
      {
        loading ? (
          <>
            <PageLoading/>
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