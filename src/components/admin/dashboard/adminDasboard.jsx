/* eslint-disable react/prop-types */
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading';
import styles from './adminDasboard.module.scss'
import useAdminDashboard from './useAdminDasboard';


const AdminCard = ({ title, value }) => {
    return (
        <div className={`${styles.admin_cards_item}`}>
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    );
};

const AdminDasboard = () => {

    const { loading, dashboardData } = useAdminDashboard()



    return (
        <>

            {
                loading ? (
                    <>
                        <InnerPageLoading />
                    </>
                ) : (
                    <>

                    </>
                )
            }

            <main className={`${styles.adminDasboard}`}>


                <h2>Overview Statistics</h2>

                <div className={`${styles.admin_cards} mt-4`}>
                    {/* {stats.map((stat, index) => (
                        
                    ))} */}

                    <AdminCard title={"Total Users"} value={dashboardData?.totalUsers} />
                    <AdminCard title={"Total Courses"} value={dashboardData?.totalCourses} />
                    <AdminCard title={"Total Enrollments"} value={dashboardData?.totalEnrollments} />
                    <AdminCard title={"Revenue"} value={dashboardData?.totalUsers} />
                    <AdminCard title={"Completion Rate"} value={`${dashboardData?.completionRate} %`} />

                </div>


                <h2 className='mt-4'>Activity Logs</h2>

                <div className={`${styles.activity_logs}`}>

                    <div className={`row`}>

                        <div className='col-3'>
                            <h3>Date</h3>
                        </div>

                        <div className='col-6'>
                            <h3>Action</h3>
                        </div>

                        <div className='col-3'>
                            <h3> User/Admin</h3>
                        </div>

                    </div>

                    {
                        dashboardData?.activityLogs?.length === 0 ? (
                            <>

                            </>
                        ) : (
                            <>
                                {
                                    dashboardData?.activityLogs?.map((ele, ind) => {
                                        return (
                                            <div className={`row mt-3`} key={ind}>

                                                <div className='col-3'>
                                                    <h4>{ele?.date ? ele?.date : 'N/A'}</h4>
                                                </div>

                                                <div className='col-6'>
                                                    <h4>{ele?.action}</h4>
                                                </div>

                                                <div className='col-3'>
                                                    <h4>User</h4>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                    }



                </div>


                <h2 className='mt-4'>Latest Feedback and Reviews</h2>

                <div className={`${styles.reviews_admin}`}>

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



            </main>
        </>
    )
}

export default AdminDasboard