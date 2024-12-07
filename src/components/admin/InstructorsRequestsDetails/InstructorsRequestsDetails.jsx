/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styles from './InstructorsRequestsDetails.module.scss';
import { toast } from 'react-toastify';
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';

const InstructorsRequestsDetails = () => {

    const [loading, setLoading] = useState(false);

    const [requestLoading, setRequestLoading] = useState(false);

    const [request, setRequest] = useState();

    const { applicationID } = useParams();

    const currentUser = useSelector((state) => state.set_up_user);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);

                const response = await fetch(`http://localhost:5000/api/instructor-requests/admin-single-requests/${applicationID}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setRequest(data.request || []);
            } catch (error) {
                console.error('Error fetching instructor requests:', error);
                toast.error("Internal Server Error");
            } finally {
                setLoading(false);
            }
        })();
    }, [applicationID]);

    const handelRequest = async (action) => {
        setRequestLoading(true)
        try {
            const payload = {
                requestID: request?._id,
                userId: currentUser?._id,
                action: action
            };

            const response = await fetch('http://localhost:5000/api/instructor-requests/admin-handle-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {

                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            toast.success(data.message);
            setRequestLoading(false)
        } catch (error) {
            setRequestLoading(false)
            console.error('Error handling request:', error);
            toast.error("Failed to process the request");
        }
    };

    return (
        <>
            {loading ? (
                <InnerPageLoading />
            ) : (
                <section className={`${styles.InstructorsRequestsDetails}`}>
                    <div>{`${request?._id}`}</div>
                    <button onClick={() => handelRequest('approve')}>Approve</button>
                    <button onClick={() => handelRequest('reject')} style={{ backgroundColor: 'red' }} className='ms-3'>
                        Reject
                    </button>

                    {
                        requestLoading ? (
                            <>
                                <div className={`${styles.loading}`}>
                                    <PulseLoader color='#0071DC' />
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
