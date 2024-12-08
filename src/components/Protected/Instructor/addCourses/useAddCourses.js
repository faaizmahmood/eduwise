/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import { toast } from "react-toastify"
import uploadFile from "../../../../../s3/uploadFile"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useSelector } from "react-redux"

const useAddCourse = () => {

    const [uploadLoading, setUploadLoading] = useState(false)

    const [submitLoading, setSubmitLoading] = useState(false)

    const [uploadThumbnailLoading, setUploadThumbnailLoading] = useState(false)

    const [videoURL, setVideoURL] = useState(null)

    const [thumbnailURL, setThumbnailURL] = useState(null)

    const [tagVal, setTagVal] = useState("")

    const [tags, setTags] = useState([])

    const instructor = useSelector((state) => state.Instructor)

    const videoRef = useRef()

    const thumbnailRef = useRef()


    const initialValues = {
        video: '',
        thumbnail: '',
        title: '',
        description: '',
        category: '',
        tags: [],
        language: '',
        level: '',
        duration: '',
    }

    // Yup Validation Schema
    const validationSchema = Yup.object({
        video: Yup.string().required('Please Upload Video'),
        thumbnail: Yup.string().required('Please Upload Thumbnail'),
        title: Yup.string()
            .min(70, 'Course title must be at least 70 characters')
            .required('Course title is required'),
        description: Yup.string()
            .min(200, 'Course description must be at least 200 characters')
            .required('Course description is required'),
        tags: Yup.array()
            .of(Yup.string().required('Tag is required')) // Ensures each element in the array is a string
            .min(2, 'At least 2 tags are required') // Enforces a minimum of 2 elements in the array
            .required('Tags are required'), // Makes the array required
        category: Yup.string().required('Course category is required'),
        language: Yup.string().required('Language is required'),
        level: Yup.string().required('Course level is required'),
        duration: Yup.number().required('Course duration is required').positive().integer(),
    })


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            console.log('Form submitted:', values)

            const payload = {

                ...values,
                instructor: {
                    id: instructor?._id,
                    name: `${instructor?.fName} ${instructor?.lName}`,
                    profile_image: instructor?.InstructorPic,
                    bio: instructor?.teachingExperience
                }

            }

            setSubmitLoading(true)

            try {
                const response = await fetch('https://eduwise-708c009023f3.herokuapp.com/api/course/upload-course', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload),
                })

                if (response.ok) {
                    toast.success('Course Uploaded!');
                    setSubmitLoading(false)
                    formik.resetForm()
                    location.reload()
                }

                if (!response.ok) {
                    setSubmitLoading(false)
                    toast.error('Error While Uploadig')

                }

                setSubmitLoading(false)


            } catch (error) {
                setSubmitLoading(false)
                console.error('Network error:', error);
                toast.error('Internal Server Error');
            }

        },
    })

    const handelVideo = () => {
        videoRef.current.click() // Triggers the file input click
    }

    const handeThumbnail = () => {
        thumbnailRef.current.click() // Triggers the file input click
    }

    const handelVideoInput = async () => {
        const selectedFile = videoRef.current.files[0] // Access the selected file
        if (selectedFile) {
            console.log("Selected File:", selectedFile)

            if (selectedFile.type === "video/mp4") {
                console.log("Valid MP4 file selected")

                setUploadLoading(true)
                try {
                    // Pass the file to the upload function
                    const videoURL = await uploadFile(selectedFile)
                    if (videoURL) {
                        setVideoURL(videoURL)

                        toast.success("Video Uploaded!")

                        formik.setFieldValue('video', videoURL);

                    } else {
                        toast.error("Upload failed. Please try again.")
                    }
                } catch (error) {
                    console.error("Upload error:", error)
                    toast.error("An error occurred during the upload.")
                } finally {
                    setUploadLoading(false)
                }
            } else {
                toast.error("Invalid file type. Only MP4 is allowed.")
            }
        }
    }

    const handeThumbnailUpload = async () => {

        const selectedThumbnail = thumbnailRef.current.files[0]

        if (selectedThumbnail) {

            setUploadThumbnailLoading(true)

            try {

                const thumbnailURL = await uploadFile(selectedThumbnail)

                setThumbnailURL(thumbnailURL)

                toast.success("Thumbnail Uploaded!")

                formik.setFieldValue('thumbnail', thumbnailURL);

                setUploadThumbnailLoading(false)

            } catch (error) {
                setUploadThumbnailLoading(false)
                console.error("Upload error:", error)
                toast.error("An error occurred during the upload.")
            }

        }
    }


    const handleTagChange = (event) => {
        const tagValue = event.target.value;
        setTagVal(tagValue);
    };

    const addTag = () => {
        if (tagVal.trim() === "") {
            return;
        }
        const updatedTags = [...tags, tagVal]; // Update the tags state immediately
        setTags(updatedTags); // Update the state with the new array

        formik.setFieldValue('tags', updatedTags); // Use the updated array for Formik's field value
        setTagVal(""); // Clear the tag input field
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission behavior
            addTag();
        }
    };

    const removeTag = (val) => {
        const updatedTags = tags.filter((tag) => tag !== val); // Filter out the matching tag
        setTags(updatedTags); // Update the state with the new array
        formik.setFieldValue('tags', updatedTags)
    };


    return {
        handelVideo,
        videoRef,
        thumbnailRef,
        handelVideoInput,
        videoURL,
        uploadLoading,
        handeThumbnail,
        handeThumbnailUpload,
        thumbnailURL,
        uploadThumbnailLoading,
        formik,
        handleKeyPress,
        handleTagChange,
        tags,
        tagVal,
        removeTag,
        submitLoading
    }
}

export default useAddCourse
