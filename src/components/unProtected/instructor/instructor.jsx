/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './instructor.module.scss'
import { BarLoader, ClipLoader } from 'react-spinners'
import useInstructor from './useInstructor'
import Header from '../header/header'
import Footer from '../footer/footer';
import PageLoading from '../../../containers/pageLoading/outerPageLoading/pageLoading';
import Icon from '../../../containers/Icon'
import StatsOverview from './sections/statsOverview/statsOverview'
import HowToBecome from './sections/howToBecome/howToBecome'
import { NavLink } from 'react-router-dom'

const Instructor = () => {

  const { loading } = useInstructor()

  const bg = {
    background: 'url(./images/instructor_bg.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <>
      {
        loading ? (
          <>
            <PageLoading />
          </>
        ) : (
          <>

            <section className={`${styles.hero}`} style={bg}>
              <h1>Become an <span>Instructor</span></h1>
              <input type={'text'} className='mt-4' placeholder='What do you want to learn?' />
            </section>


            <div className={`${styles.discover} text-center my-5 w-75 mx-auto d-flex flex-column align-items-center`}>
              <h6>UNLEASHED</h6>
              <h2 className='mt-sm-2 mt-1'>Discover Your Potential</h2>
              <p className='mt-sm-3 mt-0'>Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>

              <div className='container'>

                <div className='row g-2'>

                  {
                    [1, 2, 3].map(() => {
                      return (
                        <>
                          <div className={`col-md-4 col-12 p-sm-2 `}>

                            <div className={`${styles.card} `}>
                              <Icon icon={"money"} />
                              <h4 className='mt-3'>Earn Money</h4>
                              <p>Earn money every time a student purchases your course. Get paid monthly through PayPal or Payoneer, it’s your choice.</p>
                            </div>

                          </div>
                        </>
                      )
                    })
                  }

                </div>

              </div>
            </div>

            <StatsOverview />

            <HowToBecome />

            <section className={`${styles.help}`}>

              <div className={`${styles.container} container p-lg-5 p-4`}>

                <div className='row'>

                  <div className='col-lg-6'>
                    <img src='/images/help_img.png' alt='help img' className='img-fluid' />
                  </div>

                  <div className='col-lg-6 pt-3 mt-lg-0 mt-4'>
                    <h3>We&apos;re here to help</h3>
                    <p>Our Instructor Support Team is here for you 24/7 to help you through your course creation needs. Use our Teaching Center, a resource center to help you through the process.This community group is always on, always there, and always helpful.</p>
                  </div>

                </div>

              </div>

            </section>


            <section className={`${styles.call_to_action} text-center mt-5`}>
                
                <h2>Become an Instructor Today</h2>

                <p>Join the world&apos;s largest online learning marketplace.</p>

                <NavLink to='/auth/signup'><button>Start teaching today</button></NavLink>

            </section>

          </>
        )
      }
    </>
  )
}

export default Instructor