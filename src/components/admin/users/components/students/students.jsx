/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from './students.module.scss'
import useStudent from "./useStudent";

const Students = () => {


    const {
        columns,
        students
    } = useStudent()

    // Render the DataGrid
    return (
        <>
            <section className={`${styles.users}`}>
                <div style={{ height: 600, width: "100%" }}>
                    <h2>Plate-Form Users</h2>
                    <DataGrid
                        rows={students}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10, 20, 50]}
                    // checkboxSelection
                    />
                </div>
            </section>
        </>
    );
};

export default Students;
