import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"


const useCourses = () => {

    const [loading, setLoading] = useState(true)

    const [input, setInput] = useState()

    const location = useLocation()

    const [courses, setCourses] = useState([]);

    const searchInput = location?.state?.input || ""
    
    const [filteredCourses, setFilteredCourses] = useState(courses)

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
                    setFilteredCourses(data.courses || [])
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


    const filterCourses = (value) => {
        if (value === '') {
            setFilteredCourses(courses);
            return;
        }

        const newFilteredCourses = courses.filter((ele) =>
            ele.description.toLowerCase().includes(value.toLowerCase()) ||  ele.title.toLowerCase().includes(value.toLowerCase()) || ele?.instructor?.name.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredCourses(newFilteredCourses);
    };

    useEffect(() => {

        setInput(searchInput)
        filterCourses(searchInput)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput])



    const handelInput = (e) => {
        const { value } = e.target

        setInput(value)

        filterCourses(value)

    }



    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])


    return {
        loading,
        courses,
        handelInput,
        // input,
        filteredCourses,
        input,
    }

}

export default useCourses