import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useInstructorsRequests = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define a function to fetch data
        const fetchRequests = async () => {
            try {
                setLoading(true); // Set loading to true before the fetch

                // Fetch data from the server
                const response = await fetch('https://eduwise-708c009023f3.herokuapp.com/api/instructor-requests/admin-requests');

                if (!response.ok) {
                    // Handle HTTP errors
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Update requests state with the fetched data
                setRequests(data.instructors || []); // Safeguard in case instructors is undefined
            } catch (error) {
                console.error('Error fetching instructor requests:', error);
                toast.error("Internal Server Error");
            } finally {
                setLoading(false); // Set loading to false after the fetch
            }
        };

        // Immediately invoke the fetch function
        fetchRequests();
    }, []);


    return {
        requests,
        loading,
    };
};

export default useInstructorsRequests;
