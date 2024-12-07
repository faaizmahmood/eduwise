/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useExploreCourses = () => {

    const [loading, setLoading] = useState(true);

    const [course, setCourses] = useState([]); // Initialize as an empty array

    // const [searchTerm, setSearchTerm] = useState("");

    const [filteredCourses, setFilteredCourses] = useState();

    const searchTerm = useSelector((state) => state.handle_search_input);

    const navigate = useNavigate();

    // Fetch courses on component mount
    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://eduwise-708c009023f3.herokuapp.com/api/courses/getcourses");

                if (res.status === 404) {
                    toast.warn("Courses Not Found");
                } else if (res.ok) {
                    const data = await res.json();
                    setCourses(data.courses || []);
                } else {
                    toast.error("Failed to fetch courses");
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
                toast.error("Internal Server Error");
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // Navigate to a specific course
    const openCourse = (course) => {
        navigate(`/explore-courses/enroll-course/${course._id}`);
    };

    // Handle search term updates
    // const handleSearchTerm = (value) => {
    //     console.log(searchTerm)
    // };

    // Filter courses when searchTerm or course list changes
    useEffect(() => {
        if (!searchTerm) {
            setFilteredCourses(course);
        } else {
            console.log("enter....")
            const filterData = course.filter((ele) =>
                ele.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCourses(filterData);

            console.log(filteredCourses)
        }
    }, [searchTerm, course]); // Trigger when either `searchTerm` or `course` changes

    return {
        loading,
        course,
        openCourse,
        filteredCourses,
    };
};

export default useExploreCourses;
