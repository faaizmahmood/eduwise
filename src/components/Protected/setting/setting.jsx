/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './setting.module.scss'
import useSetting from './useSetting'
import { PulseLoader } from 'react-spinners'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'

const Setting = () => {

    const { profilePic, handleFileChange, handleEditClick, fileInputRef, formik, settingLoading } = useSetting()

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000);

    }, [])

    return (
        <>

            {
                loading ? (
                    <>
                        <InnerPageLoading />
                    </>
                ) : (
                    <>
                        <main className={`${styles.setting}`}>

                            <form className='w-100 text-align-center' onSubmit={formik.handleSubmit}>

                                <div className='d-flex justify-content-center'>
                                    <div className={`${styles.pp_sec} `}>
                                        <img src={profilePic} alt='user profile image' width={"150px"} height={"150px"} />

                                        <i className="fa-sharp fa-regular fa-pen" onClick={handleEditClick}></i>

                                        <input
                                            type="file"
                                            accept="image/jpeg, image/png"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>

                                <div className='row gy-4 w-100 mt-4'>

                                    <div className={`col-sm-6 p-2`}>
                                        <div className={`${styles.input_group}`}>
                                            <input type='text' placeholder='First Name...' name='fName' value={formik.values.fName} onChange={formik.handleChange} />
                                            {formik.touched.fName && formik.errors.fName && (
                                                <div className={`${styles.error_message} mt-2 ms-2`}>
                                                    {formik.errors.fName}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className={`col-sm-6 p-2`}>
                                        <div className={`${styles.input_group}`}>
                                            <input type='text' placeholder='Last Name...' name='lName' value={formik.values.lName} onChange={formik.handleChange} />
                                            {formik.touched.lName && formik.errors.lName && (
                                                <div className={`${styles.error_message} mt-2 ms-2`}>
                                                    {formik.errors.lName}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className={`col-sm-6 p-2`}>
                                        <div className={`${styles.input_group}`}>
                                            <input disabled style={{ cursor: 'not-allowed' }} name='email' type='email' placeholder='E-Mail...' value={formik.values.email} onChange={formik.handleChange} />
                                        </div>
                                    </div>

                                    <div className={`col-sm-6 p-2`}>
                                        <div className={`${styles.input_group}`}>
                                            <input type='tel' placeholder='Phone Number' name='phone_number' value={formik.values.phone_number} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                            {formik.touched.phone_number && formik.errors.phone_number && (
                                                <div className={`${styles.error_message} mt-2 ms-2`}>
                                                    {formik.errors.phone_number}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className={`col-sm-6 p-2`}>
                                        <div className={`${styles.input_group}`}>
                                            <input disabled style={{ cursor: 'not-allowed' }} type='text' placeholder='User Name...' name='username' value={formik.values.username} onChange={formik.handleChange} />
                                        </div>
                                    </div>

                                    <div className={`col-sm-6 p-2`}>
                                        <div className={`${styles.input_group}`}>
                                            <input type='text' placeholder='Country...' name='country' value={formik.values.country} onChange={formik.handleChange} />
                                        </div>
                                    </div>

                                    {/* <div className={`col-sm-6 p-2`}>
                                        <div className={`${styles.input_group}`}>
                                            <input disabled style={{ cursor: 'not-allowed' }} name='role' type='text' placeholder='Role...' value={formik.values.role} onChange={formik.handleChange} />
                                        </div>
                                    </div> */}


                                    <div>
                                        <button type='submit'>{settingLoading ? <PulseLoader color="#ffffff" size={5} /> : "Submit"}</button>
                                    </div>

                                </div>

                            </form>
                        </main>
                    </>
                )
            }
        </>


    )
}

export default Setting