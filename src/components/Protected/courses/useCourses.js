import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const useCourses = () => {

    const [loading, setLoading] = useState(true)

    const [coursesLoading, setCoursesLoading] = useState(false)

    const [courseView, setCourseView] = useState(1)

    const [filteredCourse, setFilteredCourse] = useState([]);
    
    const currentUser = useSelector((state)=> state.set_up_user)

    const current_courses = currentUser.current_courses

    const completed_courses = currentUser.completed_courses

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })



    useEffect(()=>{
        showCourses(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const showCourses = (id) => {
        setCoursesLoading(true)
        setCourseView(id)
        let updatedCourses = [];

        if (id === 1) {
            updatedCourses = [...current_courses, ...completed_courses]; 
        } else if (id === 2) {
            updatedCourses = current_courses
        } else if (id === 3) {
            updatedCourses = completed_courses
        }

        setFilteredCourse(updatedCourses);

        setTimeout(() => {
            setCoursesLoading(false)
        }, 2000)
    }



    return {
        loading,
        showCourses,
        courseView,
        coursesLoading,
        filteredCourse, 
    }
}


export default useCourses