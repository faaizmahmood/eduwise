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
                    <div>{`${request?._id}`}</div>
                    <button onClick={() => handleRequestAction('approve')}>Approve</button>
                    <button
                        onClick={() => handleRequestAction('reject')}
                        style={{ backgroundColor: 'red' }}
                        className="ms-3"
                    >
                        Reject
                    </button>

                    {requestLoading && (
                        <div className={`${styles.loading}`}>
                            <PulseLoader color="#0071DC" />
                        </div>
                    )}
                </section>
            )}
        </>
    );
};

export default InstructorsRequestsDetails;
