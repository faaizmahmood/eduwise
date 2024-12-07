/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './preference.module.scss'
import usePreference from './usePreference'
import { PulseLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const Preference = () => {

    const { handleButtonClick, activeButtons, submitPreference, showSubPreference, options, loading } = usePreference()



    return (
        <>
            <main className={`${styles.preference}`}>
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

                <p className={`${styles.next_btn}`} onClick={() => {
                    toast.warning("Please Select Your Interest:)")
                }}>Skip</p>
                <p className={`${styles.skip_btn}`} onClick={submitPreference}>{loading ? "Updating..." : "Go To DashBoard"}</p>
            </main>

        </>
    )
}

export default Preference