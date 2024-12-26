import { useSelector } from 'react-redux'
import styles from './sidebar.module.scss'

const Sidebar = () => {

    // const currentUser = useSelector((state) => state.set_up_user)

    const instructor = useSelector((state) => state.Instructor)


    const getGreeting = () => {
        const hours = new Date().getHours();
        if (hours < 12) {
            return "Good Morning";
        } else if (hours < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    }

    return (
        <aside className={`${styles.side_overview} mt-5`}>

            <div className={`${styles.profile_overview} mt-3`}>
                <div className='text-center d-flex justify-content-center'>
                    <div className={`${styles.pf} my-3`}>
                        {/* <div className={`${styles.progress_count}`}>
                            {'32'}%
                        </div> */}
                        <div className={`${styles.progress_track}`}></div>
                        <img src={instructor?.InstructorPic || "https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/dummy_img.webp"} style={{ width: '120px', borderRadius: '50%', height: '120px' }} />
                    </div>
                </div>
                <div className='d-flex align-items-center flex-column mt-3'>
                    <h5>{getGreeting()} {instructor?.fName.slice(0, 5)}</h5>
                    <p className='w-75 text-center'>Keep up the great work—your courses are shaping the future!</p>
                </div>

                {/* <div className={`${styles.side_card}`}>

                </div> */}
            </div>

        </aside>
    )
}

export default Sidebar