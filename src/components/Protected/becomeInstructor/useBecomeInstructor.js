import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const useBecomeInstructor = () => {

    const currentUser = useSelector((state) => state.set_up_user)

    const [step, setStep] = useState(1);

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        InstructorPic: "https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/dummy_img.webp",
        fName: "",
        lName: "",
        email: "",
        phone_number: "",
        degreeLevel: "",
        degreeTitle: "",
        institutionName: "",
        degreeYoP: "",
        yearsOfExperience: "",
        experienceYoP: "",
        teachingExperience: "",
        expertise: [],
        specialization: "",
        resume: "",
        contentType: "",
        audience: "",
        teachingMethdology: "",
        selectedEquipment: {
            "Desktop/Laptop": false,
            "Webcam": false,
            "Microphone": false,
            "Drawing Tablet": false,
            "Lighting Setup": false,
        },
        termsAccepted: false,
    });

    const personalInfoSchema = Yup.object({
        fName: Yup.string().required("First Name is required"),
        lName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        phone_number: Yup.string().required("Phone Number is required"),
    });

    const professionalBackgroundSchema = Yup.object({

        degreeLevel: Yup.string()
            .required("Degree level is required")
            .oneOf(["Bachelor's", "Master's", "PhD"], "Invalid degree level"),
        degreeTitle: Yup.string()
            .required("Degree title is required")
            .max(100, "Degree title cannot exceed 100 characters"),
        institutionName: Yup.string()
            .required("Institution name is required")
            .max(100, "Institution name cannot exceed 100 characters"),
        degreeYoP: Yup.number()
            .required("Year of passing is required")
            .min(1900, "Year of passing must be after 1900")
            .max(new Date().getFullYear(), "Year of passing cannot be in the future"),
        yearsOfExperience: Yup.number()
            .required("Years of experience are required")
            .min(0, "Years of experience cannot be negative")
            .max(50, "Years of experience cannot exceed 50"),
        experienceYoP: Yup.number()
            .required("Year of completion is required")
            .min(1900, "Year of completion must be after 1900")
            .max(new Date().getFullYear(), "Year of completion cannot be in the future"),
        teachingExperience: Yup.string()
            .required("Teaching experience description is required")
            .max(1000, "Description cannot exceed 1000 characters"),
        expertise: Yup.array()
            .of(Yup.string().max(50, "Each area of expertise cannot exceed 50 characters"))
            .min(1, "At least one area of expertise is required")
            .required("Areas of expertise are required"),
        specialization: Yup.string()
            .required("Specialization description is required")
            .max(1000, "Description cannot exceed 1000 characters"),
        resume: Yup.mixed()
            .required("Resume or CV is required")
        // .test(
        //     "fileFormat",
        //     "Only PDF, DOC, or DOCX files are allowed",
        //     (value) =>
        //         !value || ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value.type)
        // )
        // .test(
        //     "fileSize",
        //     "File size cannot exceed 5MB",
        //     (value) => !value || value.size <= 5 * 1024 * 1024
        // ),

    });


    const technicalReadinessSchema = Yup.object({
        contentType: Yup.array()
            .of(Yup.string().max(50, "Each area of content Type cannot exceed 50 characters"))
            .min(1, "At least one area of content Type is required")
            .required("Please select your areas of content Type"),
        audience: Yup.string()
            .required("Target audience selection is required")
            .oneOf(["Bachelor's", "Master's", "PhD", "Hobbyists"], "Invalid target audience"),
        teachingMethdology: Yup.string()
            .required("Teaching methodology description is required")
            .max(1000, "Description cannot exceed 1000 characters"),
        internetSpeed: Yup.mixed()
            .required("Internet speed test file is required")
        // .test(
        //     "fileFormat",
        //     "Only PNG, JPG, or JPEG files are allowed",
        //     (value) =>
        //         !value || ["image/png", "image/jpeg", "image/jpg"].includes(value.type)
        // )
        // .test(
        //     "fileSize",
        //     "File size cannot exceed 5MB",
        //     (value) => !value || value.size <= 5 * 1024 * 1024
        // ),
    });

    const validationSchemas = [personalInfoSchema, professionalBackgroundSchema, technicalReadinessSchema, 4];

    const validateCurrentStep = async () => {
        const currentSchema = validationSchemas[step - 1];
        try {
            await currentSchema.validate(formData, { abortEarly: false });
            return true;
        } catch (err) {
            const errors = {};
            err.inner.forEach((error) => {
                errors[error.path] = error.message;
            });
            console.error(errors); // Handle the errors (e.g., set in state to show in UI)


            Object.keys(errors).map((ele) => {
                toast.error(errors[ele])
            })

            return false;
        }
    };

    const handelStepNext = async () => {
        if (step === validationSchemas.length) return;

        const isValid = await validateCurrentStep();
        if (isValid) setStep(step + 1);
    };

    const handelStepBack = () => {
        if (step === 1) return;
        setStep(step - 1);
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };


    const handelSubmit = async (e) => {
        e.preventDefault();

        // You can replace the alert with actual submission logic
        console.log(formData, currentUser?._id);

        const payload = {
            userId: currentUser?._id,
            ...formData
        };

        try {
            // Sending the request to the backend using fetch (or you can use axios)
            const response = await fetch('https://eduwise-708c009023f3.herokuapp.com/api/instructor-requests/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            // Handle the response from the server
            const data = await response.json();

            if (response.ok) {
                // If the request was successful, show a success message
                toast.success("Form submitted successfully!");
                console.log(data); // You can also log the response from the backend
                navigate('/')
            } else {
                // If there was an error, display an error message

                if (response.status === 400) {
                    toast.error(`${response.message}`);
                    return
                }

                toast.error(`Error While Submitting`);
            }
        } catch (error) {
            // Handle any errors that occur during the fetch
            console.error('Error submitting the form:', error);
            toast.error('Internl Server Error');
        }
    };


    return {
        handelStepNext,
        step,
        handelStepBack,
        handleInputChange,
        formData,
        handelSubmit
    };
};

export default useBecomeInstructor;
