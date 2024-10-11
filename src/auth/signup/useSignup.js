import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import * as yup from 'yup'



const useSignup = () => {

    const [passwordVisibility, setPasswordVisibility] = useState({
        pass1: false,
        pass2: false
    })

    const [isChecked, setIsChecked] = useState(false);

    const [loading, setLoading] = useState(true)

   const [signupLoading, setSignupLoading] = useState(false)

    const [findUsername, setFindUseranme] = useState(false)

    const [isUserNameFind, setIsUserNameFind] = useState()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);

        return () => clearTimeout(timer);
    })

    const formik = useFormik({
        initialValues: {
            fName: '',
            lName: '',
            uName: '',
            email: '',
            password: '',
            cPassword: '',
            privacyPolicy: isChecked,
        },
        validationSchema: yup.object({
            fName: yup.string().required('First name is required'),
            lName: yup.string().required('Last name is required'),
            uName: yup.string().required('User name is required'),
            email: yup.string().required('Email is required').email("Enter a valid email address"),
            password: yup
                .string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters')
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                .matches(/[0-9]/, "Password must contain at least one number")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
            cPassword: yup.string().required('Confirm password is required')
                .oneOf([yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: async (value) => {

            if (isUserNameFind === false) {
               
                try {
                    setSignupLoading(true)
                    const response = await fetch('http://localhost:5000/auth/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: value.email,
                            fName: value.fName,
                            lName: value.lName,
                            password: value.password,
                            privacyPolicy: true,
                            username: value.uName
                        })
                    })

                    if(response.status === 409){
                        toast.error("email already exists!")
                        setSignupLoading(false)
                        return
                    }

                    if(response.status === 200){
                        toast.success("Sucessfully created account")
                        setSignupLoading(false)
                        formik.resetForm()
                        return
                    }

                } catch (error) {
                    setSignupLoading(false)
                    console.log(error)
                    toast.error("Internal Server Error")
                }
            }else{
                toast.warning("User name is not available")
            }
        }

    })

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    }

    // const checkUserName = () => {



    // }


    useEffect(() => {
        const usernameValue = formik.values.uName.trim().toLowerCase();

        (async () => {
            try {
                setFindUseranme(true)
                const reponse = await fetch("http://localhost:5000/auth/username", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: usernameValue
                    })

                })

                if (reponse.ok) {
                    setIsUserNameFind(true)
                    setFindUseranme(false)

                    return
                }
                if (reponse.status == 404) {
                    setIsUserNameFind(false);
                    setFindUseranme(false)
                    return
                }

            } catch (error) {
                setFindUseranme(false)
                console.log(error)
            }
        })()


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.uName])

    return {
        setPasswordVisibility,
        passwordVisibility,
        formik,
        toggleCheckbox,
        isChecked,
        loading,
        findUsername,
        isUserNameFind,
        signupLoading
    }

}


export default useSignup