import styles from './signin.module.scss'
import useSignin from './useSignin'
import { BeatLoader } from 'react-spinners'

const Signin = () => {

    const { formik, showHide, showHidePassVal, btnLoading } = useSignin()

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['wrapper']}>

                    <form onSubmit={formik.handleSubmit}>
                        <h3>Sign in </h3>

                        <div className={styles['form-group']}>
                            <input type='email' name='email' value={formik.values.email} onChange={formik.handleChange} placeholder='Enter your email' />
                        </div>

                        {formik.touched.email && formik.errors.email && (
                            <p className={styles['error']}>{formik.errors.email}</p>
                        )}

                        <div className={`${styles.form_group_2} d-flex align-items-center`}>
                            <input type={`${showHidePassVal ? "text" : "password"}`} name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='Enter your password' />
                            <i className={`${showHidePassVal ? "fa-eye" : "fa-eye-slash"} fa-solid me-2`} onClick={showHide} style={{cursor:'pointer'}}></i>
                            {/* <i className="fa-sharp fa-solid fa-eye-slash me-2" style={{cursor:'pointer'}}></i> */}
                        </div>

                        {formik.touched.password && formik.errors.password && (
                            <p className={styles['error']}>{formik.errors.password}</p>
                        )}

                        <div className={styles['submit-btn']}>
                            <button type='submit'>{btnLoading ? <BeatLoader/> : "Sign in"}</button>
                        </div>

                        <p style={{ marginTop: '20px' }}>Not have an account yet? <span style={{color:'blue', cursor:'pointer', textDecoration:'underline'}}>Signup</span></p>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Signin