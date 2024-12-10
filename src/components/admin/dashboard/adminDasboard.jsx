/* eslint-disable react/prop-types */
import styles from './adminDasboard.module.scss'


const AdminCard = ({ title, value }) => {
    return (
        <div className={`${styles.admin_cards_item}`}>
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    );
};

const AdminDasboard = () => {



    const stats = [
        { title: 'Total Users', value: '1,234' },
        { title: 'Total Courses', value: '67' },
        { title: 'Total Enrollments', value: '4,589' },
        { title: 'Revenue', value: '$10,500' },
        { title: 'Pending Approvals', value: '23' }
    ];


    return (
        <>
            <main className={`${styles.adminDasboard}`}>


                <h2>Overview Statistics</h2>

                <div className={`${styles.admin_cards} mt-4`}>
                    {stats.map((stat, index) => (
                        <AdminCard key={index} title={stat.title} value={stat.value} />
                    ))}
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

                    <div className={`row`}>

                        <div className='col-3'>
                            <h4>01/12/2024</h4>
                        </div>

                        <div className='col-6'>
                            <h4>Approved Instructor Request</h4>
                        </div>

                        <div className='col-3'>
                            <h4> Admin John</h4>
                        </div>

                    </div>

                </div>


                <h2 className='mt-4'>Feedback and Reviews</h2>

                <div className={`${styles.reviews_admin}`}>

                    <div className={`${styles.review_item}`} >
                        <h6>5 stars Rating</h6>
                        <p>Good</p>
                    </div>

                </div>



            </main>
        </>
    )
}

export default AdminDasboard