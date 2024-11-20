/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from 'react-router-dom'
import { toast } from "react-toastify";


const useCourseDetailPage = () => {

    const [loading, setLoading] = useState(true)

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

   const saveCourse=(action)=>{

    if(action === "add"){
        // do add
    }

    if(action === "remove"){
        //
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
        saveCourse
    }

}

export default useCourseDetailPage