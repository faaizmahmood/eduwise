import { ClipLoader, PulseLoader } from 'react-spinners'
import styles from './otp.module.scss'
import useOtp from './useOtp'
import { useLocation } from 'react-router-dom'

const Otp = () => {

    const { loading, handleInputChange, InputRef, verificationLoading, time, setTime } = useOtp()

    const location = useLocation()

    const  {email} = location.state.values || {}


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
                        <main className={`${styles.otp}`}>

                            <div className={`container ${styles.otp_container}`}>
                                <div className='row g-0' style={{ height: '100%' }}>
                                    <div className={`col-lg-6 d-lg-block d-none ${styles.otp_img}`}>
                                        <img src='../../../public/images/side_img.png' alt='SignUp image' />
                                    </div>
                                    <div className={`col-lg-6 ${styles.otp_form_container}`}>
                                        <h3>OTP Verification</h3>
                                        <p>Enter the OTP sent  to <span className='ms-2'>{email[0] + email[1] + '*****@gmail.com'}</span></p>

                                        <form className={`${styles.otp_form} mt-4`}>

                                            <div className={styles['otp_inputs']}>

                                                {
                                                    verificationLoading ? (
                                                        <>
                                                            <PulseLoader color="#0071DC" size={6} style={{margin:'0px auto'}}/>
                                                        </>
                                                    ) : (
                                                        Array(4).fill().map((_, ind) => {
                                                            return (
                                                                <>
                                                                    <input type='text' disabled={time === 0 ? true : false} className={`${time === 0 ? 'disabled_input' : ""}`} key={ind} maxLength={1} ref={(el) => (InputRef.current[ind] = el)} onChange={(e) => handleInputChange(e, ind)} autoFocus={ind === 0} />
                                                                </>
                                                            )
                                                        })
                                                    )

                                                }
                                            </div>

                                        </form>

                                        <p className={`${styles.timer_para} mt-5`}>
                                            <span className={`${styles.timer}`} >00:{time < 10 ? `0${time}` : time}</span>  Don’t receive the OTP? <span className={`${styles.send_again}`} onClick={()=> setTime(59)}>Send again</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </main>
                    </>
                )
            }
        </>

    )
}

export default Otp