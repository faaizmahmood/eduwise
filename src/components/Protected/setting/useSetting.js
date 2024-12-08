/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import * as yup from 'yup'
import uploadFile from "../../../../s3/uploadFile";
import { toast } from "react-toastify";


const useSetting = () => {

    const currentUser = useSelector((state) => state.set_up_user)

    const [profilePic, setProfilePic] = useState(currentUser?.profile_image || "https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/dummy_img.webp");

    const fileInputRef = useRef(null);


    const [settingLoading, setSettingLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            fName: currentUser?.fName,
            lName: currentUser?.lName,
            email: `Email: ${currentUser?.email}`,
            phone_number: currentUser?.phone_number,
            username: `User Name: ${currentUser?.username}`,
            country: currentUser?.country,
            // role: `Role: ${currentUser?.role}`,
        },
        validationSchema: yup.object({
            fName: yup.string().required('First name is required'),
            lName: yup.string().required('Last name is required'),
            phone_number: yup.string()
                .required('Phone number is required')
                .matches(
                    /^[+]?[0-9]{10,15}$/,
                    'Phone number must be valid and contain 10-15 digits'
                ),
        }),
        onSubmit: async (values) => {

            setSettingLoading(true)

            try {

                const payload = {
                    user_id: currentUser?._id,
                    country: values.country,
                    fName: values.fName,
                    lName: values.lName,
                    phone_number: values.phone_number,
                    profile_image: profilePic
                }

                const response = await fetch('https://eduwise-708c009023f3.herokuapp.com/api/setting/update-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                })

                if (response.status === 404) {
                    toast.error('User not found')
                    setSettingLoading(false)
                    return
                }

                toast.success('Setting Saved!')

                const response_data = await response.json()

                const updatedUser = response_data.data;

                localStorage.removeItem('currentUser')
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));

                setSettingLoading(false)

                location.reload()


            } catch (error) {
                setSettingLoading(false)
                console.log(error)
            }

            // console.log(formik.errors)

            // console.log(values, profilePic)

        }
    })


    const handleEditClick = () => {
        fileInputRef.current.click();
    };

    // Handle file change (upload the file to S3)
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate file type (optional)
            const validImageTypes = ['image/jpeg', 'image/png'];
            if (!validImageTypes.includes(file.type)) {
                alert('Please select a valid image file (JPEG, PNG, etc.).');
                return;
            }

            // Call the uploadFile function to upload the image to S3
            try {
                const uploadedFileUrl = await uploadFile(file);

                if (uploadedFileUrl) {
                    toast.success("Image Uploaded!")
                    setProfilePic(uploadedFileUrl);
                    setProfilePic(uploadedFileUrl);
                }
            } catch (error) {
                toast.error('Error uploading file.');
                console.error('Error uploading file:', error);
            }
        } else {
            toast.error('Please select a valid image file.');
        }
    };

    return {
        handleEditClick,
        handleFileChange,
        fileInputRef,
        formik,
        profilePic,
        settingLoading
    }

}

export default useSetting