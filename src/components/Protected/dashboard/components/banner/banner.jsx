
import styles from './banner.module.scss'
import Icon from '../../../../../containers/Icon'

function Banner() {
    return (
        <section className={`${styles.banner}`}>
            <h6>ONLINE COURSE</h6>

            <h3>Sharpen Your Skills with Professional Online Courses</h3>

            <div className={`${styles.bannerBtn} d-flex align-items-center gap-2`}>
                <h5 className='mt-2'>Join Now</h5>
                <Icon icon={"nextIcon"}/>
            </div>
        </section>
    )
}

export default Banner
