/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";




const useEnrollCourses = () => {

    const [loading, setLoading] = useState(true)

    const [enrollLoading, setEnrollLoading] = useState(false)

    const [course, setCourse] = useState()

    const currentUser = useSelector((state) => state.set_up_user)

    const { courseID } = useParams()

    const navigate = useNavigate()

    const alreadyEnrolledOrCompleted = currentUser?.current_courses?.some((ele) => ele?.course_id == courseID) || currentUser?.completed_courses?.some((ele) => ele?.course_id == courseID);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {

        (async () => {

            setLoading(true)

            try {
                const res = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/courses/singleCourse/${courseID}`)

                if (res.status === 404) {
                    setLoading(false)
                    toast.error("Course Not Found")
                }

                if (res.ok) {
                    const course_res = await res.json()
                    setCourse(course_res)
                }

                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
                toast.error("Internal Server Error")
            }

        })()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handelEnroll = async () => {


        try {

            setEnrollLoading(true)

            const payload = {
                user_id: currentUser?._id,
                action: "enroll_course",
                data: {
                    course_id: courseID,
                    title: course?.title,
                    thumbnail: course?.thumbnail ? course?.thumbnail : "https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/dummy_thumbnail.png"
                }
            }
            const response = await fetch('http://localhost:5000/api/user/update-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })


            if (response.state === 400) {
                setEnrollLoading(false)
                return toast.error('Invalid action specified.')
            }

            if (response.status === 409) {
                setEnrollLoading(false)
                return toast.error('Already Enrolled')
            }

            if (response.status === 404) {
                setEnrollLoading(false)
                return toast.error('Course Not Exists')
            }

            if (response.status === 200) {

                const data = await response.json()

                setEnrollLoading(false)

                toast.success("Enrolled Sucessfully!")

                const updatedUser = data.updatedUser;
                localStorage.removeItem('currentUser')
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));

                navigate('/my-courses')

                location.reload()

            }

        } catch (error) {
            setEnrollLoading(false)
            console.log(error)
            toast.error("Internal Server Error")
        }
    }

    return {
        loading,
        alreadyEnrolledOrCompleted,
        course,
        handelEnroll,
        enrollLoading
    }

}

export default useEnrollCourses