import { useState } from "react"
import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const usePreference = () => {

    const [activeButtons, setActiveButtons] = useState([])

    const [loading, setLoading] = useState(false)

    const currentUser = useSelector((state) => state.set_up_user)

    // const navigate = useNavigate()

    const options = [
        "Artificial Intelligence & Machine Learning",
        "Game Development",
        "Cloud Computing",
        "Data Science & Big Data Analytics",
        "Cybersecurity",
        "Blockchain & Cryptocurrency",
        "Internet of Things (IoT)",
        "Web Development",
        "Mobile App Development",
        "DevOps & Automation",
        "Augmented Reality (AR) & Virtual Reality (VR)",
        "Quantum Computing",
        "Software Development & Microservices",
        "Generative AI & LLMs",
        "Digital Transformation",
        "E-commerce Platforms & Tools",
    ];


    const handleButtonClick = (text) => {

        if (activeButtons.length >= 5) {
            toast.error("Just 5 Catagories!")
            return
        }

        setActiveButtons((prevActiveButtons) => {

            if (prevActiveButtons.includes(text)) {

                return prevActiveButtons.filter((button) => button !== text)

            } else {
                return [...prevActiveButtons, text]
            }
        })

        if (!activeButtons) {
            toast.warn("One Item Selected Selected")
            return
        }

        // setActiveButtons(text)

    }


    const submitPreference = async () => {


        if (activeButtons.length === 0) {
            toast.error("Select one Category!")
            return
        }

        const paylaod = {
            user_id: currentUser?._id,
            action: "update_preference",
            data: {
                preference: activeButtons
            }
        }

        setLoading(true)

        try {
            const res = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/user/update-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paylaod)
            })

            if (res.status === 400) {
                setLoading(false)
                toast.error("Should Be Less Than 5")
            }

            if (res.ok) {
                const course_res = await res.json()

                const updatedUser = course_res.updatedUser;
                localStorage.removeItem('currentUser')
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));

                setLoading(false)
                toast.success("Updated Successfully")

                location.reload()
            }
        } catch (error) {
            setLoading(false)
            console.error('Network error:', error);
            toast.error('Internal Server Error.');
        }


        // alert("submitted")
        console.log("activeButtons", activeButtons)

        setLoading(false)


        // navigate(`/sub-category`, { state: { activeButtons } })

    }

    return {
        activeButtons,
        handleButtonClick,
        submitPreference,
        options,
        loading
    }
}


export default usePreference