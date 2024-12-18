/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useManageCourses = () => {

    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(false);

    const instructor = useSelector((state) => state.Instructor)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true); // Set loading to true before fetching data

                const response = await fetch(
                    `https://eduwise-708c009023f3.herokuapp.com/api/instructor/getinstructorcourses/${instructor._id}`
                );

                if (!response.ok) {
                    // Handle non-2xx HTTP responses
                    const { error } = await response.json();
                    throw new Error(error || "Failed to fetch courses");
                }

                const data = await response.json();
                setCourses(data.courses); // Set fetched courses

            } catch (error) {
                // Display error message using toast
                toast.error(error.message || "Something went wrong!");
            } finally {
                setLoading(false); // Ensure loading is set to false after the fetch completes
            }
        })();
    }, []); // Dependency array empty to run on component mount

    return {
        courses,
        loading,
    };
};

export default useManageCourses;
