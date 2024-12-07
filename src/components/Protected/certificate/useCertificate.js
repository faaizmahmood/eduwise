import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const useCertificate = () => {

    const [loading, setLoading] = useState(true);

    const currentUser = useSelector((state) => state.set_up_user)

    const [certificateItems, setCertificateItems] = useState([])

    useEffect(() => {
        setLoading(true);

        (async () => {
            try {
                // Add 'await' to wait for the fetch call to resolve
                const response = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/certificate/all-certificate/${currentUser?._id}`);

                // Check if the response status is 404
                if (response.status === 404) {
                    toast.error("Certificate not Found!");
                    setLoading(false);
                    return;
                }

                // Wait for the JSON response
                const certificate_res = await response.json();

                setCertificateItems(certificate_res.certificates);

                setLoading(false);

            } catch (error) {
                setLoading(false);

                console.error("Internal Server Error", error);

                toast.error('Internal Server Error');
            }
        })();

    }, [currentUser]);

    return {
        loading,
        certificateItems
    };
}

export default useCertificate;
