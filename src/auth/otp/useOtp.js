import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";


const useOtp = () => {

    const [loading, setLoading] = useState(true)

    const InputRef = useRef([])

    const [verificationLoading, setVerificationLoading] = useState(false)

    const location = useLocation()

    const  otp = location.state?.otp || {}

    const [time, setTime] = useState(61)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {

        if (time === 0) return;
    
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
                    otpValues == otp ? toast.success("Email is verified") && setTime(0) : toast.error("Wrong OTP")
                }, 1500);

            }


        } else {
            e.target.value = '';
        }

        if (value === '' && index > 0) {
            InputRef.current[index - 1].focus();
        }

    };

    return {
        loading,
        handleInputChange,
        InputRef,
        verificationLoading,
        time,
        setTime
    }

}

export default useOtp