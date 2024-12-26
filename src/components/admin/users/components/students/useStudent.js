import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useUsers from "../../useUsers";


const useStudent = () => {

    const { setLoading } = useUsers()

    const [students, setStudents] = useState([]);


    useEffect(() => {
        // Fetch students data from API
        const fetchStudents = async () => {
            try {
                const response = await fetch("https://eduwise-708c009023f3.herokuapp.com/api/admin/admin-users");
                if (!response.ok) {
                    throw new Error("Failed to fetch students data");
                }
                const data = await response.json();
                setStudents(data.data); // Assuming `data` has a `data` field with student information
                setLoading(false); // Stop loading
            } catch (error) {
                console.error("Error fetching students:", error);
                toast.error("Error fetching students:");
                setLoading(false); // Stop loading on error
            }
        };

        fetchStudents();
    }, []);


    // Define the columns for the DataGrid
    const columns = [
        { field: "id", headerName: "Student ID", width: 150 },
        { field: "fullName", headerName: "Full Name", width: 200 },
        { field: "email", headerName: "Email Address", width: 250 },
        { field: "phone", headerName: "Phone Number", width: 150 },
        { field: "userName", headerName: "User Name", width: 200 },
        {
            field: "totalEnrolledCourses",
            headerName: "Enrolled Courses",
            width: 200,
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "totalCompletedCourses",
            headerName: "Completed Courses",
            width: 200,
            type: "number",
            headerAlign: "left",
            align: "left",
        },
    ];

    return {
        columns,
        students
    }

}

export default useStudent