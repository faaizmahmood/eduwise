/* eslint-disable no-unused-vars */

import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'
import styles from './manageCourses.module.scss'
import useManageCourses from './useManageCourses'


const ManageCourses = () => {

    const {
        courses,
        loading,
    } = useManageCourses()

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
                            <section className={`${styles.manageCourses}`}>

                                <div className='row g-3'>

                                    {
                                        courses?.length === 0 ? (
                                            <>
                                                <h2>No Course Upload Yet!</h2>
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    courses?.map((ele, ind) => {
                                                        return (
                                                            <>
                                                                <div className={`col-4 p-2`} key={ind}>
                                                                    <div className={`${styles.courseItem}`}>
                                                                        <img src={ele?.thumbnail} alt='img' />
                                                                        <div className={`${styles.itemBody} mt-2`}>

                                                                            <h2>{ele?.title.slice(0, 40)}...</h2>

                                                                            <div className='d-flex justify-content-between'>

                                                                                <div>
                                                                                    <p>{ele?.enrollment?.current_enrolled}</p>

                                                                                    <p><b>Enrolled</b></p>
                                                                                </div>

                                                                                <div>
                                                                                    <p>{ele?.ratings?.average_rating}</p>
                                                                                    <p><b>Rating</b></p>
                                                                                </div>

                                                                                <div>
                                                                                    <p>{ele?.ratings?.total_reviews}</p>
                                                                                    <p><b>Total Ratings</b></p>
                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    }

                                </div>

                            </section>
                        }
                    </>
                )
            }


        </>
    )
}

export default ManageCourses