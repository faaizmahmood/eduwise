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

const CacdItem = ({ title, description }) => {

  return (
    <>
      <div className={`col-md-6 col-12 p-sm-2 `}>

        <div className={`${styles.card} `}>
          {/* <Icon icon={"money"} /> */}
          <h4 className='mt-3'>{title}</h4>
          <p>{description}</p>
        </div>

      </div>
    </>
  )

}

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
              <h6>Join Our Community of Expert Instructors</h6>
              <h2 className='mt-sm-2 mt-1'>Become an Instructor at Eduwise and Share Your Knowledge</h2>
              <p className='mt-sm-3 mt-0'>At Eduwise, we believe in the power of education and the value of sharing expertise. As an instructor, you’ll have the opportunity to inspire and guide learners from all over the world. With our platform, you can create and publish your courses, help students achieve their goals, and earn revenue from your content. Start your teaching journey with us today!</p>

              <div className='container'>

                <div className='row g-2'>



                  <CacdItem title={"Create Your Own Courses"} description={"Design and structure courses that reflect your expertise, making learning engaging and accessible for students worldwide."} />
                  <CacdItem title={"Reach a Global Audience"} description={"Educate learners from all corners of the world, expanding your impact and connecting with a diverse group of students."} />
                  {/* <CacdItem title={"Create Your Own Courses"} description={"Design and structure courses that reflect your expertise, making learning engaging and accessible for students worldwide."}/> */}

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
                    <h3>Empower Learners with Your Expertise</h3>
                    <p>Share your knowledge with a global audience by creating impactful courses on Eduwise. With our user-friendly platform, you can easily design and deliver high-quality educational content that makes a difference. Join us today and help shape the future of learning.</p>
                  </div>

                </div>

              </div>

            </section>


            <section className={`${styles.call_to_action} text-center mt-5`}>

              <h2>Become an Instructor Today</h2>

              <p>Join the instructor Community</p>

              <NavLink to='/auth/signup'><button>Start teaching today</button></NavLink>

            </section>

          </>
        )
      }
    </>
  )
}

export default Instructor