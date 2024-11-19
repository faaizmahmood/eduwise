/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './preference.module.scss'
import usePreference from './usePreference'

const Preference = () => {

    const {handleButtonClick, activeButtons, submitPreference, showSubPreference} = usePreference()

    const options = [
        "Business Management",
        "Marketing & Advertising",
        "Entrepreneurship",
        "Science & Research",
        "Mathematics",
        "Engineering",
        "Technology & Innovation",
        "Programming & Software Development",
        "Social Sciences",
        "Psychology",
        "Education & Teaching",
        "Human Resources",
        "Media & Communications",
        "Photography & Film",
        "Architecture & Interior Design",
        "Music & Performing Arts",
        "Sports & Fitness",
        "Food & Nutrition",
        "Agriculture",
        "Project Management",
        "Sales & E-commerce"
    ]

    return (
        <>
            <main className={`${styles.preference} ${showSubPreference ? styles.hide : ""}`}>
                <div className={`${styles.wrapper}`}>

                {options.map((text, index) => (
                    <button
                        key={index}
                        className={`${styles.button} ${activeButtons.includes(text) ? styles.active : ''}`}
                        onClick={() => handleButtonClick(text)}
                    >
                        {text}
                    </button>
                ))}

                </div>

                <p className={`${styles.next_btn}`}>Skip</p>
                <p className={`${styles.skip_btn}`} onClick={submitPreference}>Next</p>
            </main>

            <main className={`${styles.sub_preference} ${showSubPreference ? styles.show_sub_preference : styles.hide_sub_preference}`}>
                sub category
            </main>
        </>
    )
}

export default Preference