/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import Icon from '../../../../../containers/Icon'
import styles from './activity.module.scss'


const Card=({img, count, name})=>{
    return (
        <>
            <div className='col-4'>
                <div className='d-flex gap-3 align-items-center'>
                    <Icon icon={img} />
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

    const currentUser = useSelector((state)=> state.set_up_user)

    const current_courses = currentUser.current_courses

    const completed_courses = currentUser.completed_courses

    return (
        <>
            <section className={`${styles.activity} my-4`}>
                <div className='row'>
                    <Card img={"book_filled"} count={current_courses.length} name={"Enrolled Coursese"}/>
                    <Card img={"tick_filled"} count={completed_courses.length + current_courses.length} name={"Total Coursese"}/>
                    <Card img={"tick_filled"} count={completed_courses.length} name={"Completed Coursese"}/>
                </div>
            </section>
        </>
    )
}

export default Activity