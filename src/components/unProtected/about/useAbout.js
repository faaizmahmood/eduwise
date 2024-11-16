import { useEffect } from "react"
import { useState } from "react"

const data = [{
        image: "src/components/unProtected/about/10008_26.png",
        heading: "15",
        paragraph: "Years of Language Education Experience"
    },
    {
        image: "src/components/unProtected/about/10009_26.png",
        heading: "10",
        paragraph: "Years of Online Teaching Experience"
    },
    {
        image: "src/components/unProtected/about/10010_26.png",
        heading: "8",
        paragraph: "Countries Represented"
    },
    {
        image: "src/components/unProtected/about/10011_26.png",
        heading: "5",
        paragraph: "Languages Offered"
    }
];
const useAbout = () => {

    const [loading, setLoading] = useState(false)


    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])


    return {
        loading
    }

}

export default useAbout