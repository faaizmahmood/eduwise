import { useState } from "react"


const useUsers=()=>{

    const [loading, setLoading] = useState(false)

    return{
        setLoading,
        loading
    }
}


export default useUsers