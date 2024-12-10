/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading';
import useInstructorRequest from './useInstructorRequest';
import styles from './InstructorsRequestsDetails.module.scss';

const InstructorsRequestsDetails = () => {

    const { applicationID } = useParams();

    const currentUser = useSelector((state) => state.set_up_user);

    const { loading, requestLoading, request, handleRequestAction } = useInstructorRequest(applicationID, currentUser);

    return (
        <>
            {loading ? (
                <InnerPageLoading />
            ) : (
                <section className={`${styles.InstructorsRequestsDetails}`}>

                    <div className={`${styles.img_Sec}`}>
                        <img src={request?.InstructorPic} alt='EduWise' />
                    </div>

                    <div className='row mt-4'>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Name: <span>{request?.fName ? request?.fName : "N/A"} {request?.fName ? request?.lName : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>E-Mail: <span>{request?.email ? request?.email : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Phone Number: <span>{request?.phone_number ? request?.phone_number : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Audience: <span>{request?.audience ? request?.audience : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Content: </h4>
                                <span>{request?.contentType ? (
                                    <>
                                        {
                                            request?.contentType.map((ele, ind) => {
                                                return (
                                                    <>
                                                        <span key={ind} className={`${styles.tag}`}>{ele}</span>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                ) : "N/A"}</span>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Degree Level: <span>{request?.degreeLevel ? request?.degreeLevel : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Degree Title: <span>{request?.degreeTitle ? request?.degreeTitle : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Year of Passing: <span>{request?.degreeYoP ? request?.degreeYoP : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>experienceYoP: <span>{request?.experienceYoP ? request?.experienceYoP : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Expertise: </h4>
                                <span>{request?.expertise ? (
                                    <>
                                        {
                                            request?.expertise.map((ele, ind) => {
                                                return (
                                                    <>
                                                        <span key={ind} className={`${styles.tag}`}>{ele}</span>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                ) : "N/A"}</span>
                            </div>
                        </div>


                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Institution Name: <span>{request?.institutionName ? request?.institutionName : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Internet Speed File: <span> <a target='_blank' href={request?.internetSpeed}><i className="fa-regular fa-arrow-up-right-from-square"></i> </a></span></h4>
                            </div>
                        </div>

                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Resume: <span> <a target='_blank' href={request?.resume}><i className="fa-regular fa-arrow-up-right-from-square"></i> </a></span></h4>
                            </div>
                        </div>


                        <div className='col-lg-6 p-2 mt-3'>
                            <div className={`${styles.input_group}`}>
                                <h4>Years Of Experience: <span>{request?.yearsOfExperience ? request?.yearsOfExperience : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-12 p-2 mt-3'>
                            <div className={`${styles.input_text_area}`}>
                                <h4>Specialization: <span>{request?.specialization ? request?.specialization : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-12 p-2 mt-3'>
                            <div className={`${styles.input_text_area}`}>
                                <h4>Teaching Experience: <span>{request?.teachingExperience ? request?.teachingExperience : "N/A"}</span></h4>
                            </div>
                        </div>

                        <div className='col-12 p-2 mt-3'>
                            <div className={`${styles.input_text_area}`}>
                                <h4>Teaching Methdology: <span>{request?.teachingMethdology ? request?.teachingMethdology : "N/A"}</span></h4>
                            </div>
                        </div>

                    </div>

                    {/* <div>{`${request?._id}`}</div> */}
                    <button onClick={() => handleRequestAction('approve')} className='mt-4'> Approve</button>
                    <button
                        onClick={() => handleRequestAction('reject')}
                        style={{ backgroundColor: 'red' }}
                        className="ms-3 mt-4"
                    >
                        Reject
                    </button>

                    {requestLoading ? (
                        <>
                            <div className={`${styles.loading}`}>
                                <PulseLoader color="#0071DC" />
                            </div>
                        </>
                    ) : ""
                    }
                </section>
            )}
        </>
    );
};

export default InstructorsRequestsDetails;
