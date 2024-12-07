/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./professionalBackground.module.scss";

const ProfessionalBackground = () => {



    return (
        <>
            <section className={`${styles.professionalBackground}`}>
                <div className={`${styles.education}`}>
                    <h2>1. Educational Background</h2>

                    <div className="row mt-4">

                        <div className="col-6">
                            <div className={`${styles.input_group}`}>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className={`${styles.input_group}`}>
                                <input type="text" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfessionalBackground;
