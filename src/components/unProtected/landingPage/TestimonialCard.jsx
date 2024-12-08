/* eslint-disable no-unused-vars */
import styles from './LandingPage.module.scss'

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({title, description, name, position, img}) => {
    return (
        <>
            <div className={styles['testimonial_item']}>
                <img src={img} alt='test_img_1' />
                {/* <h4 className='mt-4'>{title}</h4> */}
                <p className='mt-3'>{description}</p>
                <h5>{name}</h5>
                <h6>{position}</h6>
            </div>
        </>
    )
}

export default TestimonialCard