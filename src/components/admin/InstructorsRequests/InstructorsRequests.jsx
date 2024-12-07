/* eslint-disable no-unused-vars */

import { NavLink } from 'react-router-dom'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'
import styles from './InstructorsRequests.module.scss'
import useInstructorsRequests from './useInstructorsRequests'

const InstructorsRequests = () => {

    const { loading, requests } = useInstructorsRequests()

    return (
        <>

            {
                loading ? (
                    <>
                        <InnerPageLoading />
                    </>
                ) : (
                    <>

                        {
                            requests?.length === 0 ? (
                                <>
                                    No Requests Right Now
                                </>
                            ) : (
                                <>
                                    <section className={`${styles.InstructorsRequests}`}>

                                        <div className='row'>

                                            {
                                                requests?.map((ele, ind) => {

                                                    return (
                                                        <>
                                                            <div className={`col-4 p-2`} key={ind}>
                                                                <div className={`${styles.requestCard}`}>

                                                                    <img src={ele?.InstructorPic} alt="EduWise" />

                                                                    <h2 className='mt-2'>{ele?.fName} {ele?.lName}</h2>
                                                                    <p>{ele?.email}</p>
                                                                    <p>{ele?.phone_number}</p>
                                                                    <p>{ele?.yearsOfExperience} Years Of Experience</p>

                                                                    <div className={`${styles.button_group} mt-3`}>
                                                                        {
                                                                            ele?.expertise?.map((ele, ind) => {
                                                                                return (
                                                                                    <>
                                                                                        <h6 key={ind}>{ele}</h6>
                                                                                    </>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>

                                                                    <div className={`${styles.date}`}>
                                                                        <h5>1 June</h5>
                                                                    </div>

                                                                    <NavLink to={`/instructors-application/${ele?._id}`}><button className='mt-3'>View Complete Requests</button></NavLink>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )

                                                })
                                            }

                                        </div>

                                    </section>
                                </>
                            )
                        }

                    </>
                )
            }

        </>
    )

}

export default InstructorsRequests