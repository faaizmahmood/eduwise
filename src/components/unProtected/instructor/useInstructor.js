import { useEffect } from "react"
import { useState } from "react"


const useInstructor = () => {

    const [loading, setLoading] = useState(true)


    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])


    return{
        loading
    }

}

export default useInstructor