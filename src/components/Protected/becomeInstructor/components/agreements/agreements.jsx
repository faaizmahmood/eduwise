/* eslint-disable react/prop-types */
import styles from './agreements.module.scss'

const Agreements = ({ handleInputChange, formData }) => {

    return (
        <>
            <section className={`${styles.agreements}`}>

                <div className={`row h-75 ${styles.agreements_row}`}>
                    <div className={`${styles.agreements_wrapper} col-12`}>
                        <h2>Instructor Terms and Conditions</h2>
                        <p>Welcome to Eduwise! By becoming an instructor on our platform, you agree to the following terms and conditions. Please read them carefully.</p>


                        {/*  Course Publishing and Approval< */}
                        <h3>1. Course Publishing and Approval</h3>

                        <ul>
                            <li><b>Course Review and Approval:</b> All courses submitted to the Eduwise platform are subject to review. Your course will be reviewed for quality, relevance, and adherence to Eduwise guidelines before being published. Eduwise reserves the right to approve or reject any course at its discretion</li>
                            <li><b>Course Modifications:</b> Instructors have the ability to manage and update their courses on the platform. However, once a course is published, it cannot be removed. Please ensure that your course content remains up-to-date and relevant.</li>
                        </ul>

                        {/*  Course Publishing and Approval< */}


                        {/*  Course Content< */}
                        <h3>2. Course Content</h3>

                        <ul>
                            <li><b>Content Ownership:</b> As an instructor, you must upload only original content or content for which you have obtained the necessary rights or permissions. You may reuse content, but it is your responsibility to ensure you have the appropriate rights to share it.</li>
                            <li><b>Intellectual Property:</b> Eduwise respects intellectual property rights and expects instructors to do the same. Uploading copyrighted or infringing material may result in termination of your account without prior notice.</li>
                        </ul>

                        {/*  Course Content< */}


                        {/*  3. Revenue and Payment */}
                        <h3>3. Revenue and Payment</h3>

                        <ul>
                            <li><b>Course Pricing:</b> All courses on Eduwise are free to students. As such, there is no payment structure for instructors related to course sales or student enrollments.</li>
                            <li><b>Payment:</b> Currently, there are no financial transactions between the platform and instructors, as the courses are offered for free.</li>
                        </ul>

                        {/*  3. Revenue and Payment */}


                        {/*  4. Instructor Responsibilities and Engagement */}
                        <h3>4. Instructor Responsibilities and Engagement</h3>

                        <ul>
                            <li><b>Instructor Support:</b> Eduwise provides support to instructors in the form of platform-related technical assistance, content creation tools, and marketing efforts. However, instructors are expected to independently manage and create their course content.</li>
                            <li><b>No Direct Interaction:</b> At this time, Eduwise does not facilitate direct communication between students and instructors. Students may leave reviews, but instructors are not required to respond directly to students.</li>
                        </ul>

                        {/*  4. Instructor Responsibilities and Engagement */}


                        {/*  5. Account Termination and Violations */}
                        <h3>5. Account Termination and Violations</h3>

                        <ul>
                            <li><b>Violation of Platform Policies:</b> Your account may be terminated immediately for violating platform policies, such as uploading unauthorized content, inactivity, or failing to adhere to Eduwise&apos;s guidelines. There will be no prior warning before termination.</li>
                            <li><b>Inactivity:</b> If you do not publish or manage courses for an extended period, your account may be deemed inactive and terminated.</li>
                        </ul>

                        {/*  Account Termination and Violation */}


                        {/*  6. Student Reviews and Feedback */}
                        <h3>6. Student Reviews and Feedback</h3>

                        <ul>
                            <li><b>Student Reviews:</b> Students are able to leave reviews and ratings for courses. These reviews are visible to all users of the platform. Instructors may manage and view reviews but are not required to respond.</li>
                        </ul>

                        {/*  6. Student Reviews and Feedbacknt */}


                        {/*  7. Platform Responsibilities */}
                        <h3>7. Platform Responsibilities</h3>

                        <ul>
                            <li><b>Marketing:</b> Eduwise is responsible for marketing and promoting your courses to a wider audience through various promotional channels. This includes email campaigns, social media promotion, and other marketing efforts.</li>
                            <li><b>Technical Issues and Outages:</b> Eduwise is responsible for ensuring that the platform is functional and that courses are accessible. In the event of any technical issues or outages, Eduwise will take reasonable measures to restore service promptly. However, Eduwise will not be held responsible for issues outside of its control, such as internet connectivity problems or issues related to third-party services.</li>
                        </ul>

                        {/*  7. Platform Responsibilities */}


                        {/*  8. Code of Conduct */}
                        <h3>8. Code of Conduct</h3>

                        <ul>
                            <li><b>Professionalism and Respect:</b> As an instructor on Eduwise, you are expected to conduct yourself professionally. This includes treating students with respect, being courteous in your course materials, and maintaining a high standard of integrity in all aspects of your work.</li>
                            <li><b>No Harassment:</b> Any form of harassment, including abusive language or behavior, will not be tolerated. Violations of this policy may result in immediate account suspension or termination.</li>
                        </ul>

                        {/*  8. Code of Conduct */}


                        {/*  9. Privacy and Data Protection */}
                        <h3>9. Privacy and Data Protection</h3>

                        <ul>
                            <li><b>Instructor Information:</b> Eduwise takes your privacy seriously. Your personal information will be handled and protected in accordance with our privacy policy. It will not be shared with third parties without your consent.</li>
                            <li><b>Student Data:</b> Instructors do not have access to student data. Eduwise ensures that all student information is protected and does not allow instructors to view or store student data.</li>
                        </ul>

                        {/*  9. Privacy and Data Protection */}


                        {/*  10. Dispute Resolution*/}
                        <h3>10. Dispute Resolution</h3>

                        <ul>
                            <li><b>Dispute Handling:</b> In case of a dispute (e.g., regarding course content or feedback), Eduwise will attempt to resolve the issue in a fair and reasonable manner. We encourage instructors to contact support if they believe their rights have been violated.</li>
                            <li><b>Mediation:</b> If the dispute cannot be resolved, Eduwise may recommend mediation or arbitration before legal action is pursued.</li>
                        </ul>

                        {/*  10. Dispute Resolution */}

                        <hr />

                        <h3>Changes to the Terms</h3>

                        <p>Eduwise reserves the right to modify or update these terms and conditions at any time. All changes will be posted on this page with an updated effective date. It is your responsibility to review these terms periodically.</p>


                    </div>
                </div>

                <div className='mt-4 '>
                    <input
                        type="checkbox"
                        id="Desktop/Laptop"
                        name="Desktop/Laptop"
                        checked={formData.termsAccepted}
                        onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                    />
                    <label htmlFor="Desktop/Laptop" className='ms-2'> Aggree Terms and Conditions</label><br />

                </div>

            </section>
        </>
    )
}

export default Agreements