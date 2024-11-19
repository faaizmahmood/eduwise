/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './about.module.scss'
import useAbout from './useAbout.js'
import { BarLoader, ClipLoader } from 'react-spinners'
import PageLoading from '../../../containers/pageLoading/outerPageLoading/pageLoading';
import GlobalLearning from './sections/GlobalLearning/globalLearning.jsx';
import StatsOverview from './sections/StatsOverview/statsOverview.jsx';
import SpecialAboutUs from './sections/specialAboutUs/specialAboutUs.jsx';

const About = () => {

  const { loading } = useAbout()

  const bg = {
    background: 'url(./images/courses_hero_bg.png)',
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
              <h1>About <span>Us</span></h1>
              <input type={'text'} className='mt-4' placeholder='What do you want to learn?' />
            </section>

            <GlobalLearning />

            <StatsOverview/>

            <SpecialAboutUs/>
          </>
        )
      }

    </>
  )
}

export default About