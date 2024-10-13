import { NavLink } from 'react-router-dom'
import styles from './signin.module.scss'
import useSignin from './useSignin'
import { BeatLoader, ClipLoader } from 'react-spinners'

const Signin = () => {


    const { formik, showHide, showHidePassVal, btnLoading, loading } = useSignin()

    return (
        <>
            {
                loading ? (
                    <>
                        <div className={styles['page-loading']}>
                            <ClipLoader color="#0071DC" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`${styles.container} container`}>
                            <div className={styles['wrapper']}>

                                <div className='row g-0'>

                                    <div className={`${styles.side_img} col-lg-6 d-lg-block d-none`} >
                                        <div>
                                        <h5>
                                            {'"'}Online learning is not the next big thing; it is the now big thing.{'"'}
                                        </h5>
                                        <img src='../../../public/images/side_img.png' alt='...' />
                                        </div>
                                    </div>

                                    <div className={`${styles.form} col-lg-6 text-center`}>
                                        <form onSubmit={formik.handleSubmit}>
                                            <h3>Login</h3>
                                            <div className='text-start'>

                                                <div className={styles['form-group']}>
                                                    <label>Email</label>
                                                    <input type='email' name='email' value={formik.values.email} onChange={formik.handleChange} placeholder='Enter your email' />
                                                </div>

                                                {formik.touched.email && formik.errors.email && (
                                                    <p className={styles['error']}>{formik.errors.email}</p>
                                                )}

                                                <label className='mt-3'>Password</label>
                                                <div className={`${styles.form_group_2} d-flex align-items-center`}>
                                                    <input type={`${showHidePassVal ? "text" : "password"}`} name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='Enter your password' />
                                                    <i className={`${showHidePassVal ? "fa-eye" : "fa-eye-slash"} fa-solid me-2`} onClick={showHide} style={{ cursor: 'pointer', color: '#A6A6A6' }}></i>
                                                    {/* <i className="fa-sharp fa-solid fa-eye-slash me-2" style={{cursor:'pointer'}}></i> */}
                                                </div>

                                                <h6 className={`text-end mt-3 ${styles.forget_password}`}> ForgetPassword?</h6>

                                                {formik.touched.password && formik.errors.password && (
                                                    <p className={styles['error']}>{formik.errors.password}</p>
                                                )}
                                            </div>

                                            <div className={styles['submit-btn']}>
                                                <button type='submit'>{btnLoading ? <BeatLoader color='#fff' size={6}/> : "Log In"}</button>
                                            </div>

                                            <p style={{ marginTop: '20px' }}>Don’t have an account yet?  <span style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}><NavLink to='/auth/signup'>Sign up for free</NavLink></span></p>
                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Signin