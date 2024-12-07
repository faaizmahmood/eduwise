/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './error.module.scss'
import { NavLink } from 'react-router-dom'
import notFoundImage from '../../../../public/images/not_found_image.png'

const Error = () => {
    return (
        <section className={`${styles.error}`}>

            <img src={notFoundImage} className='' />
            <h2>This Page Not Exists</h2>
            <NavLink to="/"><button className='mt-3'>Go To DashBoard</button></NavLink>

        </section>
    )
}

export default Error