import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useExploreCourses = () => {

    const [loading, setLoading] = useState(true);

    const [course, setCourses] = useState([]); // Initialize as an empty array

    const [filteredCourses, setFilteredCourses] = useState();

    const searchTerm = useSelector((state) => state.handle_search_input);

    const currentUser = useSelector((state) => state.set_up_user);

    const Instructor = useSelector((state) => state.Instructor);

    const navigate = useNavigate();

    // Fetch courses on component mount
    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);

            try {
                const res = await fetch(`https://eduwiseapp.awaisamjad.engineer/api/course_recommendations/${currentUser._id}`);
                if (res.status === 404) {
                    toast.warn("Courses Not Found");
                } else if (res.ok) {
                    const data = await res.json();
                    if (data.Courses_recommendations.length === 0) {
                        // If no courses found, hit the fallback API
                        const fallbackRes = await fetch("https://eduwise-708c009023f3.herokuapp.com/api/courses/getcourses");
                        if (fallbackRes.ok) {
                            const fallbackData = await fallbackRes.json();

                            const filterCourses = fallbackData?.courses.filter((ele) => {
                                return ele?.instructor?.id === Instructor?._id
                            })



                            setCourses(filterCourses || []);

                        } else {
                            toast.error("Failed to fetch fallback courses");
                        }
                    } else {
                        setCourses(data.Courses_recommendations.reverse() || []);
                    }
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
    }, [currentUser._id]);

    // Navigate to a specific course
    const openCourse = (course) => {
        navigate(`/explore-courses/enroll-course/${course.course_id}`);
    };

    // Filter courses when searchTerm or course list changes
    useEffect(() => {
        if (!searchTerm) {
            setFilteredCourses(course);
        } else {
            const filterData = course.filter((ele) =>
                ele.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCourses(filterData);
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
