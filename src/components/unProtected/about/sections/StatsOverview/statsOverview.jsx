/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './statsOverview.module.scss'
import Icon from '../../../../../containers/Icon'


const StateCard = ({icon, title, count}) => {
    return (
        <>
            <div className={`${styles.stateCard} col-lg-3 col-sm-6 col-12 text-center`}>
                <Icon icon={icon} />
                <h3 className='mt-3'>{count}</h3>
                <p>{title}</p>
            </div>
        </>
    )
}

const StatsOverview = () => {

    const bg = {
        background: 'url(./images/statsOverviewBG.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <>
            <div className={`${styles.statsOverview} py-5`} style={bg}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <StateCard icon={"globe"} title={"15 Years of Service"} count={"02 +"}/>
                        <StateCard icon={"mind"} title={"Learners Enrolled in our Courses"} count={"2000 +"}/>
                        <StateCard icon={"users"} title={"Instructors"} count={"1000 +"}/>
                        <StateCard icon={"course_degree"} title={"Total Courses for you"} count={"5000 +"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsOverview