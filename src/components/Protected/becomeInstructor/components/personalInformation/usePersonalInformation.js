import { useRef, useState } from "react"
import uploadFile from "../../../../../../s3/uploadFile"
import { toast } from "react-toastify"



const usePersonalInformation = () => {

    const fileInputRef = useRef()

    const [profilePic, setProfilePic] = useState("https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/dummy_img.webp")


    const handleFileChange = async (event) => {

        const file = event.target.files[0];

        if (file) {

            const validImageTypes = ['image/jpeg', 'image/png'];
            if (!validImageTypes.includes(file.type)) {
                alert('Please select a valid image file (JPEG, PNG, etc.).');
                return;
            }

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
        }

    }

    const handleEditClick = () => {

        fileInputRef.current.click()

    }

    return {
        handleFileChange,
        fileInputRef,
        handleEditClick,
        profilePic
    }

}

export default usePersonalInformation