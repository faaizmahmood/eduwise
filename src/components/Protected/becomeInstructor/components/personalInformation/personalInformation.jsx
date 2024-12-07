/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './personalInformation.module.scss'
import pp from '../../../../../../public/images/profileImg.png'

const PersonalInformation = () => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className={`${styles.pp_sec} `}>
                    {/* <img src={profilePic} alt='user profile image' width={"150px"} height={"150px"} /> */}
                    <img src={pp} alt='user profile image' width={"150px"} height={"150px"} />

                    {/* <i className="fa-sharp fa-regular fa-pen" onClick={handleEditClick}></i> */}
                    <i className="fa-sharp fa-regular fa-pen" ></i>

                    <input
                        type="file"
                        accept="image/jpeg, image/png"
                        // ref={fileInputRef}
                        style={{ display: 'none' }}
                    // onChange={handleFileChange}
                    />
                </div>
            </div>

            <div className='row gy-4 w-100 mt-4'>

                <div className={`col-sm-6 p-2`}>
                    <div className={`${styles.input_group}`}>
                        {/* <input type='text' placeholder='First Name...' name='fName' value={formik.values.fName} onChange={formik.handleChange} /> */}
                        <input type='text' placeholder='First Name...' name='fName' />
                        {/* {formik.touched.fName && formik.errors.fName && (
                                                <div className={`${styles.error_message} mt-2 ms-2`}>
                                                    {formik.errors.fName}
                                                </div>
                                            )} */}
                    </div>
                </div>

                <div className={`col-sm-6 p-2`}>
                    <div className={`${styles.input_group}`}>
                        {/* <input type='text' placeholder='Last Name...' name='lName' value={formik.values.lName} onChange={formik.handleChange} /> */}
                        <input type='text' placeholder='Last Name...' name='lName' />
                        {/* {formik.touched.lName && formik.errors.lName && (
                                                <div className={`${styles.error_message} mt-2 ms-2`}>
                                                    {formik.errors.lName}
                                                </div>
                                            )} */}
                    </div>
                </div>

                <div className={`col-sm-6 p-2`}>
                    <div className={`${styles.input_group}`}>
                        {/* <input disabled style={{ cursor: 'not-allowed' }} name='email' type='email' placeholder='E-Mail...' value={formik.values.email} onChange={formik.handleChange} /> */}
                        <input disabled style={{ cursor: 'not-allowed' }} name='email' type='email' placeholder='E-Mail...' />
                    </div>
                </div>

                <div className={`col-sm-6 p-2`}>
                    <div className={`${styles.input_group}`}>
                        {/* <input type='tel' placeholder='Phone Number' name='phone_number' value={formik.values.phone_number} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                        <input type='tel' placeholder='Phone Number' name='phone_number' />
                        {/* {formik.touched.phone_number && formik.errors.phone_number && (
                                                <div className={`${styles.error_message} mt-2 ms-2`}>
                                                    {formik.errors.phone_number}
                                                </div>
                                            )} */}
                    </div>
                </div>



            </div>

        </>
    )
}

export default PersonalInformation