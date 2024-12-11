import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useUsers from '../../useUsers';
import { useNavigate } from 'react-router-dom';

const useInstructors = () => {

    const [instructors, setInstructors] = useState([]);

    const navigate = useNavigate()

    // const [loading, setLoading] = useState(true);

    const { setLoading } = useUsers()

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchInstructors = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/admin/admin-instructors');

                if (!response.ok) {
                    throw new Error('Failed to fetch instructors');
                }

                const data = await response.json();

                setInstructors(data.instructors); // Assuming the data comes as `instructors`

                setLoading(false); // Stop loading once data is fetched

            } catch (err) {
                toast.error('Error fetching instructors');
                setLoading(false);
                console.log(err)
            }
        };

        fetchInstructors();
    }, []); // Empty dependency array means this runs only once after the initial render


    const columns = [
        { field: "id", headerName: "Instructor ID", width: 150 },
        { field: "fullName", headerName: "Full Name", width: 250 },
        { field: "email", headerName: "Email Address", width: 250 },
        {
            field: "totalCourses", headerName: "Total Courses Uploaded", width: 200, type: "number", headerAlign: "left",
            align: "left",
        },
        {
            field: "totalReviews", headerName: "Total Reviews Received", width: 200, type: "number", headerAlign: "left",
            align: "left",
        },
        {
            field: "averageRating", headerName: "Average Star Rating", width: 200, type: "number", headerAlign: "left",
            align: "left",
        },
    ];


    const handleCellClick = (param) => {

        navigate(`/instructor/profile/${param.row.id}`)

    }


    return {
        instructors,
        columns,
        handleCellClick
    };
};

export default useInstructors;
