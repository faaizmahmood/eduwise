/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './becomeInstructor.module.scss'
import pp from '../../../../public/images/profileImg.png'
import PersonalInformation from './components/personalInformation/personalInformation'
import ProfessionalBackground from './components/professionalBackground/professionalBackground'
import useBecomeInstructor from './useBecomeInstructor'
import TechnicalReadiness from './components/technicalReadiness/technicalReadiness'
import Agreements from './components/agreements/agreements'

const BecomeInstructor = () => {

    const { handelStepNext, step, handelStepBack, handleInputChange, formData,  handelSubmit } = useBecomeInstructor();



    return (
        <>
            <section className={`${styles.becomeInstructor}`}>
                <div className={`${styles.form_wrapper} form-section p-0`}>

                    <aside className={`${styles.sidebar}`}>
                        <h1>Become An Instructor</h1>

                        <div className='mt-4'>

                            <div className={`${styles.tab} mt-3 ${step === 1 ? styles.activetab : ""}`} >
                                <h2>Step 1. Personal Information </h2>
                                <p>Provide your basic details to set up your instructor profile.</p>
                            </div>

                            <div className={`${styles.tab} mt-3 ${step === 2 ? styles.activetab : ""}`}>
                                <h2>Step 2. Professional Background </h2>
                                <p>Share your qualifications and experience to showcase your expertise.</p>
                            </div>

                            <div className={`${styles.tab} mt-3 ${step === 3 ? styles.activetab : ""}`}>
                                <h2>Step 3. Course and Technical Readiness </h2>
                                <p>Tell us about the courses you want to teach and your technical setup.</p>
                            </div>

                            <div className={`${styles.tab} mt-3 ${step === 4 ? styles.activetab : ""}`}>
                                <h2>Step 4. Legal and Final Agreements </h2>
                                <p>Review and agree to our terms before completing your application.</p>
                            </div>

                        </div>
                    </aside>

                    <div className={`${styles.form_section}`}>
                        <div>

                            {/* <form className='w-100 text-align-center' onSubmit={formik.handleSubmit}> */}
                            <form className='w-100 text-align-center' onSubmit={handelSubmit}> 


                                {
                                    step === 1 ? <PersonalInformation handleInputChange={handleInputChange} formData={formData} /> : (step === 2 ? <ProfessionalBackground handleInputChange={handleInputChange} formData={formData} /> : (step === 3 ? <TechnicalReadiness handleInputChange={handleInputChange} formData={formData} /> : <Agreements handleInputChange={handleInputChange} formData={formData} />))
                                }





                                {
                                    step === 4 ? (
                                        <>
                                            <div className='d-flex justify-content-between'>
                                                <p className={`${styles.next_btn} mt-4`} onClick={handelStepBack}>Back</p>
                                                <button type='submit' disabled={formData.termsAccepted ? false : true} style={{ cursor: formData.termsAccepted ? "pointer" : "not-allowed" }} className='mt-4'>submit</button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='d-flex justify-content-between'>
                                                <p className={`${styles.next_btn} mt-4`} onClick={handelStepBack}>Back</p>
                                                <p className={`${styles.next_btn} mt-4`} onClick={handelStepNext}>Next</p>
                                            </div>
                                        </>
                                    )
                                }


                            </form>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BecomeInstructor