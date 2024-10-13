
import { NavLink } from 'react-router-dom'
import styles from './signup.module.scss'
import useSignup from './useSignup'
import { ClipLoader, PulseLoader } from 'react-spinners'
// import Header from '../../components/unProtected/header/header'
// import Footer from '../../components/unProtected/footer/footer'

const Signup = () => {


    const { passwordVisibility, setPasswordVisibility, formik, toggleCheckbox, isChecked, loading, findUsername, isUserNameFind, signupLoading } = useSignup()

    return (

        <>

        {/* <Header/> */}
            {
                loading ? (
                    <>
                        <div className={styles['page-loading']}>
                            <ClipLoader color="#0071DC" />
                        </div>
                    </>
                ) : (
                    <>
                        <main className={`${styles.signup}`}>

                            <div className={`container ${styles.signup_container}`}>
                                <div className='row g-0' style={{ height: '100%' }}>
                                    <div className={`col-lg-6 d-lg-block d-none ${styles.signup_img}`}>
                                        <div>
                                            <h5>
                                                {'"'}The beautiful thing about learning is that nobody can take it away from you.{'"'}
                                            </h5>
                                            <img src='../../../images/side_img.png' alt='SignUp image' />
                                        </div>
                                    </div>
                                    <div className={`col-lg-6 ${styles.signup_form}`}>
                                        <h3>Sign Up</h3>

                                        <form className={`${styles.register_form}`} onSubmit={formik.handleSubmit}>

                                            <div className='row'>
                                                <div className={`${styles.signup_input_group} ${styles.sigiup_simple_fields} col-sm-6`}>
                                                    <label>First Name</label>
                                                    <input type='text' placeholder='Enter your first name' name='fName' value={formik.values.fName} onChange={formik.handleChange} />
                                                    {
                                                        formik.touched.fName && formik.errors.fName && (
                                                            <p className={`${styles.error_msg} mt-2 ms-1`}>{formik.errors.fName}</p>
                                                        )
                                                    }
                                                </div>


                                                <div className={`${styles.signup_input_group} ${styles.sigiup_simple_fields} col-sm-6`}>
                                                    <label>Last name</label>
                                                    <input type='text' placeholder='Enter your last name' name='lName' value={formik.values.lName} onChange={formik.handleChange} />

                                                    {
                                                        formik.touched.lName && formik.errors.lName && (
                                                            <p className={`${styles.error_msg} mt-2 ms-1`}>{formik.errors.lName}</p>
                                                        )
                                                    }
                                                </div>
                                            </div>

                                            <div className={`${styles.signup_input_group} ${styles.sigiup_simple_fields}`}>
                                                <label>User name</label>
                                                <input type='text' placeholder='Enter user name' name='uName' value={formik.values.uName}
                                                    onChange={(e) => {
                                                        formik.handleChange(e)
                                                    }}

                                                />
                                                {
                                                    formik.touched.uName && formik.errors.uName && (
                                                        <p className={`${styles.error_msg} mt-2 ms-1`}>{formik.errors.uName}</p>
                                                    )
                                                }
                                                {
                                                    formik.values.uName && (
                                                        findUsername ? (
                                                            <PulseLoader color="#0071DC" size={5} />
                                                        ) : (
                                                            <p className={`${styles.found_text} mt-2`} style={{ color: isUserNameFind ? 'red' : isUserNameFind === false ? "green" : "#FFA500" }}>
                                                                {
                                                                    isUserNameFind
                                                                        ? "✗ Username is taken!"
                                                                        : isUserNameFind === false
                                                                            ? "✓ Username is ok"
                                                                            : "Error while fetching"
                                                                }
                                                            </p>
                                                        )
                                                    )
                                                }

                                            </div>
                                            <div className={`${styles.signup_input_group} ${styles.sigiup_simple_fields}`}>
                                                <label>Email</label>
                                                <input type='email' placeholder='Enter your email' name='email' value={formik.values.email} onChange={formik.handleChange} />
                                                {
                                                    formik.touched.email && formik.errors.email && (
                                                        <p className={`${styles.error_msg} mt-2 ms-1`}>{formik.errors.email}</p>
                                                    )
                                                }
                                            </div>
                                            <div className={`${styles.signup_input_group} `}>
                                                <label>Password</label>
                                                <div className={`${styles.siginup_pass_group}`}>
                                                    <input type={passwordVisibility.pass1 ? 'text' : 'password'} placeholder='Enter your password' name='password' value={formik.values.password} onChange={formik.handleChange} />
                                                    <i className={`${passwordVisibility.pass2 ? 'fa-eye' : "fa-eye-slash"} fa-solid me-2`} style={{ cursor: 'pointer', color: '#A6A6A6' }} onClick={() => setPasswordVisibility(pre => ({
                                                        ...pre,
                                                        pass1: !passwordVisibility.pass1
                                                    }))}></i>


                                                </div>
                                                {
                                                    formik.touched.password && formik.errors.password && (
                                                        <p className={`${styles.error_msg} mt-2 ms-1`}>{formik.errors.password}</p>
                                                    )
                                                }
                                            </div>
                                            <div className={`${styles.signup_input_group}`}>
                                                <label>Re-enter password</label>
                                                <div className={`${styles.siginup_pass_group}`}>
                                                    <input type={passwordVisibility.pass2 ? 'text' : 'password'} placeholder='Enter your password' name='cPassword' value={formik.values.cPassword} onChange={formik.handleChange} />
                                                    <i className={`${passwordVisibility.pass2 ? 'fa-eye' : "fa-eye-slash"} fa-solid me-2`} style={{ cursor: 'pointer', color: '#A6A6A6' }} onClick={() => setPasswordVisibility(pre => ({
                                                        ...pre,
                                                        pass2: !passwordVisibility.pass2
                                                    }))}></i>

                                                </div>
                                                {
                                                    formik.touched.cPassword && formik.errors.cPassword && (
                                                        <p className={`${styles.error_msg} mt-2 ms-1`}>{formik.errors.cPassword}</p>
                                                    )
                                                }
                                            </div>

                                            <div className={`${styles.signup_chechbox_group} mt-4 d-flex `}>
                                                <div className={`${styles.checkbox}`} onClick={toggleCheckbox}>
                                                    <i className="fa-duotone fa-solid fa-check" style={{ display: isChecked ? "block" : "none" }}></i>
                                                    <input type='checkbox' name='privacyPolicy' checked={isChecked} onChange={e => formik.setFieldValue('privacyPolicy', e.target.checked)} style={{ display: 'none' }} />
                                                </div>
                                                <p className='ms-2'>Accept the <a href='https://www.freeprivacypolicy.com/live/5c42cc9c-f01d-4f69-b222-64ce87647ba2' target='_blank'>Term</a> and <a href='https://www.freeprivacypolicy.com/live/84062085-d77e-4042-a8f4-c30d4af6d0c9' target='_blank'>Privacy Policy</a></p>
                                            </div>

                                            <button type='submit' className={`mt-2 ${isChecked ? "" : styles.disabled_btn}`} disabled={!isChecked}>{signupLoading ? <PulseLoader color="#fff" size={6} /> : "Register"}</button>

                                            <h6 className='mt-2'>Already have an account? <NavLink to='/auth/signin'>Log in</NavLink></h6>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </main>
                    </>
                )
            }

            {/* <Footer/> */}
        </>

    )
}

export default Signup