import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const useBecomeInstructor = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        InstructorPic: "https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/dummy_img.webp",
        fName: "",
        lName: "",
        email: "",
        phone_number: "",
        degreeLevel: "",
        degreeTitle: "",
        institutionName: "",
        yearsOfExperience: "",
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
            .test(
                "fileFormat",
                "Only PDF, DOC, or DOCX files are allowed",
                (value) =>
                    !value || ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value.type)
            )
            .test(
                "fileSize",
                "File size cannot exceed 5MB",
                (value) => !value || value.size <= 5 * 1024 * 1024
            ),

    });

    const validationSchemas = [personalInfoSchema, professionalBackgroundSchema, 3, 4];

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

    return {
        handelStepNext,
        step,
        handelStepBack,
        handleInputChange,
        formData,
    };
};

export default useBecomeInstructor;
