import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useInstructorDashboard = () => {
    
    const [loading, setLoading] = useState(false);

    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://eduwise-708c009023f3.herokuapp.com/api/instructor/instructor-dashboard/67545aa2863a6141b439d7e7');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setDashboardData(data);
            } catch (err) {
                console.error("Failed to fetch dashboard data:", err);
                toast.error('Error While Fetching Data')
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return {
        loading,
        dashboardData,
    };
};

export default useInstructorDashboard;
