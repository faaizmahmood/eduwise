/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-toastify";


const useCourseDetailPage = () => {

    const currentUser = useSelector((state) => state.set_up_user)

    const [loading, setLoading] = useState(true)

    const [SavingLoading, setSavingLoading] = useState(false)

    const [isSaved, setIsSaved] = useState(false)

    const [currentTime, setCurrentTime] = useState(0);

    const [boom, setBoom] = useState(false);

    const [duration, setDuration] = useState(0);

    const [courseProgress, setCourseProgress] = useState();

    const [enableButton, setEnableButton] = useState(false)

    const [course, setCourse] = useState()

    const { courseID } = useParams();

    const location = useLocation()

    const videoProgress = location.state || {}

    console.log(videoProgress.completion_percent)

    const videoRef = useRef(null);

    console.log("Course ID:", courseID);

    const navigate = useNavigate()

    const alreadyEnrolledOrCompleted = currentUser?.current_courses?.some((ele) => ele?.course_id == courseID) || currentUser?.completed_courses?.some((ele) => ele?.course_id == courseID);

    useEffect(() => {

        if (!alreadyEnrolledOrCompleted) {
            toast.warning("Please Enroll First to Access!")
            navigate(`/explore-courses/enroll-course/${courseID}`)

        }

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

    }, []);


    useEffect(() => {
        if (videoProgress?.completion_percent !== undefined && videoProgress?.completion_percent !== null && videoRef.current) {
            const videoElement = videoRef.current;
            const seekVideo = () => {
                const percentageProgress = videoProgress?.completion_percent / 100;
                videoElement.currentTime = videoElement.duration * percentageProgress;
            };

            // Attach the seek function after metadata is loaded
            videoElement.addEventListener('loadedmetadata', seekVideo);

            return () => {
                videoElement.removeEventListener('loadedmetadata', seekVideo);
            };
        }
    }, [videoProgress?.completion_percent]);


    const boomFuncion = () => {

        setBoom(true)

        setTimeout(() => {
            setBoom(false)
        }, 2000)

    }

    const saveCourse = async (action) => {

        const paylaod = {
            user_id: currentUser?._id,
            action: action === "add" ? "save_course" : "unsave_course",
            data: {
                course_id: courseID,
                course_title: course?.title,
                course_thumbmail: "../../../public/images/course_thumbail_6.png",
                instuctor: "Michael Jordon",
                avg_rating: Math.floor(course?.ratings?.average_rating)
            }
        }

        try {

            setSavingLoading(true)

            const res = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/user/update-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paylaod)
            })

            if (res.status === 409) {
                setSavingLoading(false)
                toast.error("Already Unsaved")
            }

            if (res.ok) {
                const course_res = await res.json()

                action === "add" ? toast.success("Course Saved!") : toast.success("Course Un Saved!")

                setIsSaved(true)

                action === "add" ? setIsSaved(true) : setIsSaved(false)

                const updatedUser = course_res.updatedUser;
                localStorage.removeItem('currentUser')
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));

                setSavingLoading(false)
            }


        } catch (error) {
            setSavingLoading(false)
            console.log(error)
            toast.error("Internal Server Error")
        }

    }


    const handleTimeUpdate = (event) => {
        const time = Math.floor(event.target.currentTime);
        setCurrentTime(time);
        console.log("Current time:", time);

        const progress = (time / duration) * 100;

        if (progress) {
            setCourseProgress(Math.floor(progress));
        }

        if ((currentTime / duration) * 100 >= 75) {
            setEnableButton(true)
        }

        if (Math.floor(progress) === 100 && !boom) {
            boomFuncion();
        }

    };


    const handleLoadedMetadata = (event) => {
        console.log(event.target)
        const totalDuration = Math.floor(event.target.duration);
        setDuration(totalDuration);
        console.log("Total duration:", totalDuration);
    };


    return {
        handleTimeUpdate,
        currentTime,
        handleLoadedMetadata,
        duration,
        // courseDetails,
        courseProgress,
        boom,
        enableButton,
        course,
        loading,
        videoRef,
        courseID,
        saveCourse,
        SavingLoading,
        isSaved

    }
}

export default useCourseDetailPage