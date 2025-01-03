/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import styles from './activity.module.scss'
import book_filled from '../../../../../../public/icons/book_filled.png'
import courses_filled from '../../../../../../public/icons/courses_filled.png'
import tick_filled from '../../../../../../public/icons/tick_filled.png'


const Card = ({ img, count, name }) => {
    return (
        <>
            <div className='col-sm-4 mt-sm-0 mt-3'>
                <div className='d-flex gap-3 align-items-center'>
                    <img src={img} alt={img} />
                    <div>
                        <h6>{count}</h6>
                        <h6>{name}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

function Activity() {

    const currentUser = useSelector((state) => state.set_up_user)

    const current_courses = currentUser.current_courses

    const completed_courses = currentUser.completed_courses

    return (
        <>
            <section className={`${styles.activity} my-4`}>
                <div className='row'>
                    <Card img={book_filled} count={current_courses.length} name={"Enrolled"} />
                    <Card img={courses_filled} count={completed_courses.length + current_courses.length} name={"Total"} />
                    <Card img={tick_filled} count={completed_courses.length} name={"Completed"} />
                </div>
            </section>
        </>
    )
}

export default Activity