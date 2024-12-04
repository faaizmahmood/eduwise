/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./personalInformation.module.scss";
import usePersonalInformation from "./usePersonalInformation";

const PersonalInformation = ({ handleInputChange, formData }) => {

    const { handleFileChange, fileInputRef, handleEditClick, profilePic } = usePersonalInformation();



    return (
        <>
            <div className="d-flex justify-content-center">
                <div className={`${styles.pp_sec}`}>
                    <img src={formData.InstructorPic} alt="user profile image" width={"150px"} height={"150px"} />
                    <i className="fa-sharp fa-regular fa-pen" onClick={handleEditClick}></i>
                    <input
                        type="file"
                        accept="image/jpeg, image/png"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={() => {
                            handleFileChange(event)
                            handleInputChange("InstructorPic", profilePic)
                        }}
                    />
                </div>
            </div>

            <div className="row gy-4 w-100 mt-4">
                <div className={`col-sm-6 p-2`}>
                    <div className={`${styles.input_group}`}>
                        <input
                            type="text"
                            placeholder="First Name..."
                            name="fName"
                            value={formData.fName}
                            onChange={(e) => handleInputChange("fName", e.target.value)}
                        />
                    </div>
                </div>

                <div className={`col-sm-6 p-2`}>
                    <div className={`${styles.input_group}`}>
                        <input
                            type="text"
                            placeholder="Last Name..."
                            name="lName"
                            value={formData.lName}
                            onChange={(e) => handleInputChange("lName", e.target.value)}
                        />
                    </div>
                </div>

                <div className={`col-sm-6 p-2`}>
                    <div className={`${styles.input_group}`}>
                        <input
                            name="email"
                            type="email"
                            placeholder="E-Mail..."
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                    </div>
                </div>

                <div className={`col-sm-6 p-2`}>
                    <div className={`${styles.input_group}`}>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={(e) => handleInputChange("phone_number", e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalInformation;
