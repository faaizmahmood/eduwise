/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"


const useReviewCourses = () => {

    const [loading, setLoading] = useState(true)

    const [reviewLoading, setReviewLoading] = useState(false)

    const { courseID } = useParams()

    const [course, setCourse] = useState([])

    const navigate = useNavigate()

    const [steps, setSteps] = useState(1)

    const [stepsLoading, setStepsLoading] = useState(false)

    const currentUser = useSelector((state) => state.set_up_user)

    const [starInput, setstarInput] = useState({
        star1: "",
        star2: "",
        star3: "",
        star4: "",
    })

    const [reviewText, setReviewText] = useState("")

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])


    useEffect(() => {

        (async () => {

            try {
                setLoading(true)

                const res = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/courses/singleCourse/${courseID}`)

                if (res.status === 404) {
                    setLoading(false)
                    alert("hi")
                    navigate("/explore-courses")
                    return
                }

                if (res.ok) {
                    const course_res = await res.json()

                    setCourse(course_res)
                    setLoading(false)
                    return
                }

            } catch (error) {
                setLoading(false)
                console.log(error)
                toast.error("Intrnal Server Error")
            }

        })()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handelStep = () => {

        setStepsLoading(true)
        setTimeout(() => {
            setStepsLoading(false)
        }, 2000);

        if (steps === 5) return

        setSteps(steps + 1)
    }

    const handelBackStep = () => {
        setStepsLoading(true)
        setTimeout(() => {
            setStepsLoading(false)
        }, 2000);

        if (steps === 1) return

        setSteps(steps - 1)
    }


    const getStarInput = (starId) => {

        setstarInput((prevState) => ({
            ...prevState,
            [`star${steps}`]: starId + 1,
        }));

    }

    const handelComment = (value) => {
        setReviewText(value)
    }


    const handelSubmit = async () => {

        const AvgRating = ((starInput.star1 + starInput.star2 + starInput.star3 + starInput.star4) / 20) * 5

        const payload = {
            student_id: currentUser?._id,
            rating: AvgRating,
            comment: reviewText
        }

        setReviewLoading(true)

        try {
            const res = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/courses/review-course/${courseID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            const data = await res.json();

            if (res.status === 404) {
                navigate('/explore-courses')
                setReviewLoading(false)
                return
            }

            if (res.status === 400) {
                setReviewLoading(false)
                toast.error('Already Submitted Review');
            } else {
                // Success message
                console.log('Review submitted:', data);
                toast.success('Review submitted successfully!');

                const updatedUser = data.userDetails;
                localStorage.removeItem('currentUser')
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));

                setReviewLoading(false)

                navigate('/my-courses', { replace: true });

            }
        } catch (error) {
            setReviewLoading(false)
            console.error('Network error:', error);
            toast.error('An error occurred while submitting the review.');
        }

    }

    return {
        loading,
        course,
        steps,
        handelStep,
        stepsLoading,
        handelBackStep,
        getStarInput,
        starInput,
        handelComment,
        reviewText,
        handelSubmit,
        reviewLoading
    }
}

export default useReviewCourses