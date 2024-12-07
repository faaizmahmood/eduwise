/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./professionalBackground.module.scss";
import { Autocomplete, TextField, Chip } from "@mui/material";
import { toast } from "react-toastify";
import uploadFile from "../../../../../../s3/uploadFile";

const expertiseOptions = [
    "Web Development",
    "Data Science",
    "Mathematics",
    "Graphic Design",
    "Cybersecurity",
    "AI/ML",
];

const ProfessionalBackground = ({ handleInputChange, formData }) => {

    const resumeUpload = async (file) => {

        if (file) {

            try {

                const uploadedFileUrl = await uploadFile(file);

                if (uploadedFileUrl) {
                    toast.success("Resume Uploaded")
                    handleInputChange("resume", uploadedFileUrl)
                }

            } catch (error) {
                toast.error('Error uploading file.');
                console.error('Error uploading file:', error);
            }
        }


    }

    const [expertise, setExpertise] = useState([]);

    return (
        <>
            <section className={`${styles.professionalBackground}`}>
                <div className={`${styles.education}`}>

                    {/* Education */}
                    <h2>1. Educational Background</h2>

                    <div className="row mt-4">

                        <div className="col-sm-6">
                            <div className={`${styles.input_group}`}>
                                <select
                                    value={formData.degreeLevel}
                                    onChange={(e) => handleInputChange("degreeLevel", e.target.value)}
                                    className=""
                                    aria-label="Default select example"
                                >
                                    <option value="" disabled>
                                        Degree Level
                                    </option>
                                    <option value="Bachelor's">Bachelor&apos;s</option>
                                    <option value="Master's">Master&apos;s</option>
                                    <option value="PhD">PhD</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-6 mt-sm-0 mt-4">
                            <div className={`${styles.input_group}`}>
                                <input
                                    value={formData.degreeTitle}
                                    onChange={(e) => handleInputChange("degreeTitle", e.target.value)}
                                    type="text"
                                    placeholder="Degree Title"
                                />
                            </div>
                        </div>

                        <div className="col-sm-6 mt-4">
                            <div className={`${styles.input_group}`}>
                                <input
                                    value={formData.institutionName}
                                    onChange={(e) => handleInputChange("institutionName", e.target.value)}
                                    type="text"
                                    placeholder="Institution Name"
                                />
                            </div>
                        </div>

                        <div className="col-sm-6 mt-4">
                            <div className={`${styles.input_group}`}>
                                <input
                                    value={formData.degreeYoP}
                                    onChange={(e) => handleInputChange("degreeYoP", e.target.value)}
                                    type="number"
                                    placeholder="Year of Passing"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Teaching Experience */}
                    <h2 className="mt-4">2. Teaching Experience</h2>

                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <div className={`${styles.input_group}`}>
                                <input
                                    value={formData.yearsOfExperience}
                                    onChange={(e) => handleInputChange("yearsOfExperience", e.target.value)}
                                    type="number"
                                    placeholder="Years of Experience"
                                />
                            </div>
                        </div>

                        <div className="col-sm-6 mt-sm-0 mt-4">
                            <div className={`${styles.input_group}`}>
                                <input
                                    value={formData.experienceYoP}
                                    onChange={(e) => handleInputChange("experienceYoP", e.target.value)}
                                    type="number"
                                    placeholder="Year of Completion"
                                />
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className={`${styles.input_group}`}>
                                <textarea
                                    value={formData.teachingExperience}
                                    onChange={(e) => handleInputChange("teachingExperience", e.target.value)}
                                    rows={5}
                                    type="text"
                                    placeholder="Describe Your Teaching Experience"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Specialization/Expertise */}
                    <h2 className="mt-4">3. Specialization/Expertise</h2>

                    <div className="row mt-4">
                        <div className="col-12">
                            <div className={`${styles.input_group}`}>
                                <Autocomplete
                                    multiple
                                    options={expertiseOptions}
                                    freeSolo
                                    value={expertise}
                                    onChange={(event, newValue) => {
                                        setExpertise(newValue);
                                        handleInputChange("expertise", newValue);
                                    }}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                key={index}
                                                variant="outlined"
                                                label={option}
                                                {...getTagProps({ index })}
                                            />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="Areas of Expertise"
                                            InputProps={{
                                                ...params.InputProps,
                                                disableUnderline: true,
                                                sx: {
                                                    border: "none",
                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        border: "none",
                                                    },
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className={`${styles.input_group}`}>
                                <textarea
                                    value={formData.specialization}
                                    onChange={(e) => handleInputChange("specialization", e.target.value)}
                                    rows={5}
                                    type="text"
                                    placeholder="Describe Your Specialization/Expertise"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Resume or CV */}
                    <h2 className="mt-4">4. Resume or CV</h2>

                    <div className="row mt-4">
                        <div className="col-sm-6 ">
                            <div className={``}>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) =>
                                        resumeUpload(e.target.files[0])
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfessionalBackground;
