import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useAdminDashboard = () => {

    const [dashboardData, setDashboardData] = useState(null);

    const [loading, setLoading] = useState(true);



    useEffect(() => {
        // Fetch data from the server
        const fetchDashboardData = async () => {
            try {

                const response = await fetch("https://eduwise-708c009023f3.herokuapp.com/api/admin/admin-dashboard"); // Adjust the endpoint as needed

                if (!response.ok) {
                    throw new Error("Failed to fetch dashboard data");
                }

                const data = await response.json();

                setDashboardData(data); // Store the fetched data

                setLoading(false); // Set loading to false once data is fetched

            } catch (err) {
                console.log(err)
                toast.error("Internal Server Error")
                setLoading(false); // Set loading to false in case of error
            }
        };

        fetchDashboardData(); // Call the function to fetch data

    }, []); // Empty dependency array to run this effect once when component mounts

    return { dashboardData, loading };
};

export default useAdminDashboard;
