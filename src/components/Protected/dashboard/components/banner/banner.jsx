
import styles from './banner.module.scss'
import nextIcon from '../../../../../../public/icons/nextIcon.png'
import { NavLink } from 'react-router-dom'

function Banner() {
    return (
        <section className={`${styles.banner} d-sm-block d-none`}>
            <h6>ONLINE COURSE</h6>

            <h3>Sharpen Your Skills with Professional Online Courses</h3>

            <div className={`${styles.bannerBtn} d-flex align-items-center gap-2`}>
                <NavLink to="/explore-courses"><h5 className='mt-2'>Enroll Now</h5></NavLink>
                <img src={nextIcon} alt='nextIcon' />
            </div>
        </section>
    )
}

export default Banner
