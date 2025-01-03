import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { setUpUser } from "../../redux/actions";


const useOtp = () => {

    // const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const InputRef = useRef([])

    const [verificationLoading, setVerificationLoading] = useState(false)

    const location = useLocation()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const otp = location?.state?.otp || {}

    const [OtpValue, setOtpValue] = useState(otp)

    const { email, fName } = location?.state?.values || {}


    // const userData = location?.state?.values || {}

    const [time, setTime] = useState(61)

    const [resendingLoading, setResendingLoading] = useState(false)


    useEffect(() => {
        if (!location.state || !email || !otp) {
            toast.warning('No OTP or Email found, redirecting...');
            navigate('/');
        }
    }, [navigate, email, otp, location.state]);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {

        // if (time === 1) {
        //     toast.warning('OTP expired, request new.');
        //  }
        if (time === 0) return

        const timerId = setInterval(() => {
            setTime((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [time]);

    const handleInputChange = (e, index) => {
        const { value } = e.target;

        if (/^\d?$/.test(value)) {
            e.target.value = value;

            if (value && index < InputRef.current.length - 1) {
                InputRef.current[index + 1].focus();
            }

            if (index === InputRef.current.length - 1 && value) {
                const otpValues = InputRef.current.map(input => input.value).join('');


                setVerificationLoading(true)

                setTimeout(() => {
                    setVerificationLoading(false)
                    if (otpValues == OtpValue) {
                        toast.success("Email is verified");

                        // dispatch(setUpUser(userData))

                        navigate('/auth/signin')

                        setTime(0);
                    } else {
                        toast.error("Wrong OTP");
                    }
                }, 1500);

            }


        } else {
            e.target.value = '';
        }

        if (value === '' && index > 0) {
            InputRef.current[index - 1].focus();
        }

    };


    const reqAgainOtp = async () => {

        try {
            setResendingLoading(true)
            setTime(0)
            const response = await fetch('https://eduwise-708c009023f3.herokuapp.com/api/auth/req-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    firstName: fName
                })
            })

            if (response.ok) {
                toast.success("New OTP sent")
                setTime(59)
                setResendingLoading(false)


                const newOTP = await response.json()

                setOtpValue(newOTP.otp);

                console.log(OtpValue)

                return
            }




            if (!response.ok) {
                setResendingLoading(false)
                throw new Error(`Error: ${response.status}`);
            }



        } catch (error) {
            toast.error("error while requesting new OTP")
            console.log("error while requesting new OTP", error)
        }
    }

    return {
        loading,
        handleInputChange,
        InputRef,
        verificationLoading,
        time,
        setTime,
        reqAgainOtp,
        resendingLoading
    }

}

export default useOtp