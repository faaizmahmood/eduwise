import InnerPageLoading from "../../../../containers/pageLoading/InnerPageLoading/innerPageLoading"
import styles from './instructorDashboard.module.scss'
import Activity from "./components/activity/activity"
import Sidebar from "./components/sidebar/sidebar"
import Banner from './components/banner/banner'
import useInstructorDashboard from "./useInstructorDashboard"

const InstructorDashboard = () => {

    const { loading, dashboardData } = useInstructorDashboard()

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
                                    <Activity
                                        totalEnrollmets={dashboardData?.totalEnrollments}
                                        completionRate={dashboardData?.completionRate}
                                        totalCourses={dashboardData?.totalCourses}
                                    />
                                    {/* <Courses /> */}


                                    <div className={`${styles.side_card}`}>
                                        <h2>Latest Reviews</h2>

                                        {
                                            dashboardData?.latestReviews.length === 0 ? (
                                                <>
                                                    <p>No Review Right Now</p>
                                                </>
                                            ) : (
                                                <>

                                                    {
                                                        dashboardData?.latestReviews?.map((ele, ind) => {
                                                            return (
                                                                <>
                                                                    <div className={`${styles.review_item}`} key={ind}>
                                                                        <h6>{ele?.rating ? ele?.rating : "N/A"} stars Rating</h6>
                                                                        <p>{ele?.comment ? ele?.comment : "N/A"}</p>
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                    }

                                                </>
                                            )
                                        }

                                    </div>

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

export default InstructorDashboard