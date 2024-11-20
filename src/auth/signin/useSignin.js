import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import * as yup from 'yup'
import { useDispatch } from "react-redux";
import { setUpUser } from "../../redux/actions"; //actions


const useSignin = () => {

    const dispatch = useDispatch()

    const [showHidePassVal, setShowHidePassVal] = useState(false)

    const [btnLoading, setBtnLoading] = useState(false)

    const [loading, setLoading] = useState(true)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .required("Email is required")
                .email("Enter a valid email address"),
            password: yup
                .string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters")
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                .matches(/[0-9]/, "Password must contain at least one number")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),

        }),
        onSubmit: async (values) => {

            setBtnLoading(true)

            try {
                const response = await fetch('https://eduwise-708c009023f3.herokuapp.com/api/auth/signin', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: values.email,
                        password: values.password
                    })
                })

                if (response.ok) {
                    toast.success("Sign in sucessfully")
                    console.log(values)
                    formik.resetForm()
                    const userData = await response.json()
                    dispatch(setUpUser(userData))
                }
                if (response.status === 401) {
                    toast.error("Password is incorrect")
                }
                if (response.status === 404) {
                    toast.error("User not found!")
                }

                setBtnLoading(false)

            } catch (error) {
                setBtnLoading(false)
                console.log(error)
                toast.error("Internal server error")
            }

            // setTimeout(() => {
            //     setBtnLoading(false)
            // }, 2000)

        }
    })

    const showHide = () => {
        setShowHidePassVal(!showHidePassVal)
    }

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    })

    return {
        formik,
        showHidePassVal,
        showHide,
        btnLoading,
        loading
    }

}

export default useSignin