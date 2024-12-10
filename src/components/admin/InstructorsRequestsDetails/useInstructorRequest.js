/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useInstructorRequest = (applicationID, currentUser) => {

    const [loading, setLoading] = useState(false);

    const [requestLoading, setRequestLoading] = useState(false);

    const [request, setRequest] = useState(null);

    const navigate = useNavigate()

    // Fetch instructor request details
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://eduwise-708c009023f3.herokuapp.com/api/instructor-requests/admin-single-requests/${applicationID}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                setRequest(data.request || null);

                if (data.request === null) {
                    toast.error('Request Not Found')
                    navigate('/instructors-application')
                }

            } catch (error) {
                console.error('Error fetching instructor requests:', error);
                toast.error('Internal Server Error');
            } finally {
                setLoading(false);
            }
        })();
    }, [applicationID]);

    // Handle approve/reject actions
    const handleRequestAction = async (action) => {
        setRequestLoading(true);
        try {
            const payload = {
                requestID: request?._id,
                userId: request?.userId,
                action,
            };

            const response = await fetch(
                'https://eduwise-708c009023f3.herokuapp.com/api/instructor-requests/admin-handle-request',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            toast.success(data.message);

            setRequestLoading(false)

        } catch (error) {

            setRequestLoading(false)

            console.error('Error handling request:', error);

            toast.error('Failed to process the request');

        } finally {
            setRequestLoading(false);
        }
    };

    return { loading, requestLoading, request, handleRequestAction };
};

export default useInstructorRequest;
