/* eslint-disable no-unused-vars */
import { DataGrid } from "@mui/x-data-grid";
import styles from './instructors.module.scss'
import useInstructors from "./useInstructors";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";

const Instructor = () => {

    const {
        instructors,
        columns,
        deleteDialogOpen,
        deleteReason,
        setDeleteReason,
        handleCloseDeleteDialog,
        handleDeleteUser,
        deleteLoading
    } = useInstructors();

    return (
        <>
            <section className={`${styles.instructors}`}>
                <div style={{ height: 600, width: "100%" }}>
                    <h2>Instructor of EduWise</h2>
                    <DataGrid
                        rows={instructors}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10, 20, 50]}
                        // onCellClick={handleCellClick}
                        sx={{
                            cursor: 'pointer'
                        }}
                    />
                </div>

                {/* Delete Dialog */}
                <Dialog open={deleteDialogOpen} onClose={handleCloseDeleteDialog} fullWidth>
                    <DialogTitle>Delete Instructor</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Reason for Deletion"
                            multiline
                            rows={4}
                            value={deleteReason}
                            onChange={(e) => setDeleteReason(e.target.value)}
                            fullWidth
                        />


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDeleteDialog} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleDeleteUser} color="primary" disabled={!deleteReason.trim()}>
                            {deleteLoading ? "Deleteing..." : "Delete"}
                        </Button>
                    </DialogActions>
                </Dialog>

            </section>
        </>
    )
}

export default Instructor