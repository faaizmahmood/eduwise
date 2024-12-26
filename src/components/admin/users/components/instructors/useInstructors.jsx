/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useUsers from '../../useUsers';
import { useNavigate } from 'react-router-dom';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { useSelector } from 'react-redux';

const useInstructors = () => {

    const [instructors, setInstructors] = useState([]);

    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null);

    const [selectedRow, setSelectedRow] = useState(null);

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const [deleteReason, setDeleteReason] = useState("");

    const [deleteLoading, setDeleteLoading] = useState(false);

    const currentUser = useSelector((state) => state.set_up_user)

    const currentInstructor = useSelector((state) => state.Instructor)

    const handleClick = (event, row) => {
        console.log("Selected Row:", row); // Debugging
        setAnchorEl(event.currentTarget);
        setSelectedRow(row); // Ensure the row is valid
    };


    const handleClose = () => {
        setAnchorEl(null);
        // setSelectedRow(null);
    };


    const handleNavigate = (id) => {
        navigate(`/instructor/profile/${id}`);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        // setSelectedRow(null);
    };

    const handleOpenDeleteDialog = () => {
        setDeleteDialogOpen(true);
        handleCloseMenu();
    };

    const handleCloseDeleteDialog = () => {
        setDeleteDialogOpen(false);
        setDeleteReason("");
    };

    const handleDeleteUser = async () => {

        console.log("selectedRow insde handelDelereUser", selectedRow)

        if (!selectedRow) {
            toast.error('No instructor selected for deletion');
            return;
        }

        const { id, fullName, email } = selectedRow;

        if (!id) {
            toast.error('Invalid instructor selected for deletion');
            return;
        }

        console.log("Deleting user:", id, "Reason:", deleteReason);

        const payload = {
            full_name: fullName,
            account_type: "Instructor",
            suspension_reason: deleteReason,
            email: email,
            admin_in_charge: `${currentUser?.fName} ${currentUser?.lName}`,
        };

        try {

            setDeleteLoading(true)

            const response = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/delete/delete-user/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                toast.success('Instructor deleted successfully');
                setInstructors(prev => prev.filter(inst => inst.id !== id));
                setDeleteLoading(false)
            } else {
                setDeleteLoading(false)
                throw new Error('Failed to delete instructor');
            }
        } catch (error) {
            setDeleteLoading(false)
            toast.error('Error deleting instructor');
            console.error(error);
        }

        handleCloseDeleteDialog();
    };



    // const [loading, setLoading] = useState(true);

    const { setLoading } = useUsers()

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchInstructors = async () => {
            try {
                const response = await fetch('https://eduwise-708c009023f3.herokuapp.com/api/admin/admin-instructors');

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
        {
            field: "actions",
            headerName: "Actions",
            width: 100,
            renderCell: (params) => (
                <>
                    <IconButton
                        aria-controls={Boolean(anchorEl) ? "menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={Boolean(anchorEl) ? "true" : undefined}
                        onClick={(e) => handleClick(e, params.row)} // Pass params.row
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleNavigate(params.row.id)}>View</MenuItem>
                        <MenuItem onClick={handleOpenDeleteDialog}>Delete</MenuItem>
                    </Menu>
                </>
            ),
        }

    ];


    return {
        instructors,
        columns,
        deleteDialogOpen,
        deleteReason,
        setDeleteReason,
        handleCloseDeleteDialog,
        handleDeleteUser,
        deleteLoading
    };
};

export default useInstructors;
