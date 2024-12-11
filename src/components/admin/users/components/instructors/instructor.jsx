/* eslint-disable no-unused-vars */
import { DataGrid } from "@mui/x-data-grid";
import styles from './instructors.module.scss'
import useInstructors from "./useInstructors";

const Instructor = () => {

    const { instructors, columns, handleCellClick } = useInstructors()

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
                        onCellClick={handleCellClick}
                        sx={{
                            cursor: 'pointer'
                        }}
                    />
                </div>
            </section>
        </>
    )
}

export default Instructor