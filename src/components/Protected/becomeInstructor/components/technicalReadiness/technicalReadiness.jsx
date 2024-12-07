/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Autocomplete, Chip, TextField } from '@mui/material';
import styles from './technicalReadiness.module.scss'
import { useState } from 'react';
import uploadFile from '../../../../../../s3/uploadFile';
import { toast } from 'react-toastify';


const expertiseOptions = [
    "Web Development",
    "Data Science",
    "Mathematics",
    "Graphic Design",
    "Cybersecurity",
    "AI/ML",
];

const TechnicalReadiness = ({ handleInputChange, formData }) => {

    const resumeUpload = async (file) => {

        if (file) {

            try {

                const uploadedFileUrl = await uploadFile(file);

                if (uploadedFileUrl) {
                    toast.success("Image Uploaded")
                    handleInputChange("internetSpeed", uploadedFileUrl)
                }

            } catch (error) {
                toast.error('Error uploading file.');
                console.error('Error uploading file:', error);
            }
        }


    }

    const [selectedEquipment, setSelectedEquipment] = useState({
        "Desktop/Laptop": false,
        "Webcam": false,
        "Microphone": false,
        "Drawing Tablet": false,
        "Lighting Setup": false,
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;

        // Update the selected equipment in state
        setSelectedEquipment((prevState) => {
            const updatedState = { ...prevState, [name]: checked };
            handleInputChange("selectedEquipment", updatedState); // Update in formData
            return updatedState;
        });
    };


    const [expertise, setExpertise] = useState([]);

    return (
        <>

            <section className={`${styles.technicalReadiness}`}>

                <h2 className={`mt-4`}> Content Type You Provide on Plateform</h2>
                <div className="row ">
                    <div className="col-12">
                        <div className={`${styles.input_group}`}>
                            <Autocomplete
                                multiple
                                options={expertiseOptions}
                                freeSolo
                                value={expertise}
                                onChange={(event, newValue) => {
                                    setExpertise(newValue);
                                    handleInputChange("contentType", newValue);
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
                                        placeholder="Content Type You Provide on Plateform"
                                        InputProps={{
                                            ...params.InputProps,
                                            disableUnderline: true,
                                            sx: {
                                                border: "none",
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    border: "none",
                                                },
                                                padding: '0px'
                                            },
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <h2 className={`mt-4`}> Target Audience</h2>

                    <div className="col-sm-6 ">
                        <div className={`${styles.input_group}`}>
                            <select
                                value={formData.audience}
                                onChange={(e) => handleInputChange("audience", e.target.value)}
                                className=""
                                aria-label="Default select example"
                            >
                                <option value="" disabled>
                                    Target Audience
                                </option>
                                <option value="Bachelor's">High School Students</option>
                                <option value="Master's">Undergraduate Students</option>
                                <option value="PhD">Professionals</option>
                                <option value="PhD">Hobbyists</option>
                            </select>
                        </div>
                    </div>

                    <h2 className={`mt-4`}> Teaching Methodology</h2>

                    <div className="col-12">
                        <div className={`${styles.input_group}`}>
                            <textarea
                                value={formData.teachingMethdology}
                                onChange={(e) => handleInputChange("teachingMethdology", e.target.value)}
                                rows={5}
                                type="text"
                                placeholder="Describe Your Teaching Methodology"
                            />
                        </div>
                    </div>
                </div>

                <h2 className={`mt-3`}> Equipment Confirmation</h2>

                <input
                    type="checkbox"
                    id="Desktop/Laptop"
                    name="Desktop/Laptop"
                    checked={formData.selectedEquipment["Desktop/Laptop"]}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="Desktop/Laptop"> Desktop/Laptop</label><br />

                <input
                    type="checkbox"
                    id="Webcam"
                    name="Webcam"
                    checked={formData.selectedEquipment["Webcam"]}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="Webcam"> Webcam</label><br />

                <input
                    type="checkbox"
                    id="Microphone"
                    name="Microphone"
                    checked={formData.selectedEquipment["Microphone"]}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="Microphone"> Microphone</label><br />

                <input
                    type="checkbox"
                    id="Drawing-Tablet"
                    name="Drawing Tablet"
                    checked={formData.selectedEquipment["Drawing Tablet"]}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="Drawing-Tablet"> Drawing Tablet</label><br />

                <input
                    type="checkbox"
                    id="Lighting-Setup"
                    name="Lighting Setup"
                    checked={formData.selectedEquipment["Lighting Setup"]}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="Lighting-Setup"> Lighting Setup</label><br />


                <h2 className={`mt-4`}>  Internet Speed Test Results</h2>
                <div className="col-6">
                    <div className={``}>
                        <input
                            type="file"
                            accept=".png,.jpg,.jpeg"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    resumeUpload(file)
                                }
                            }}
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default TechnicalReadiness