import { useState } from "react"


const usePreference = () => {

    const [activeButtons, setActiveButtons] = useState([]) 

    const [showSubPreference, setShowSubPreference] = useState(false)

    const handleButtonClick = (text) => {
        setActiveButtons((prevActiveButtons) => {

            if (prevActiveButtons.includes(text)) {

                return prevActiveButtons.filter((button) => button !== text)

            } else {
                return [...prevActiveButtons, text]
            }
        })
    }


    const submitPreference = () => {

       alert("submitted")
        console.log(" activeButtons", activeButtons)
        

        setShowSubPreference(true)

    }

    return {
        activeButtons,
        handleButtonClick,
        submitPreference,
        showSubPreference
    }
}


export default usePreference