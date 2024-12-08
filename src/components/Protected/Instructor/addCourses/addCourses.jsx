import styles from './addCourses.module.scss'
import useAddCourse from './useAddCourses'
import { PacmanLoader, PulseLoader } from 'react-spinners'

const AddCourses = () => {
    const {
        handelVideo,
        videoRef,
        thumbnailRef,
        handelVideoInput,
        uploadLoading,
        videoURL,
        handeThumbnail,
        handeThumbnailUpload,
        uploadThumbnailLoading,
        thumbnailURL,
        formik,
        handleTagChange,
        tags,
        handleKeyPress,
        tagVal,
        removeTag,
        submitLoading
    } = useAddCourse()

    return (
        <>
            <section className={`${styles.addCourses}`}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row g-2">
                        <div className={`col-6`}>
                            {videoURL ? (
                                <>
                                    <div className={`${styles.video}`}>
                                        <video controls="controls" poster={thumbnailURL ? thumbnailURL : ""}>
                                            <source src={videoURL} type="video/mp4" />
                                        </video>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={`${styles.video}`} onClick={handelVideo}>
                                        {uploadLoading ? (
                                            <PacmanLoader color="#0071DC" size={15} />
                                        ) : (
                                            <>
                                                <i className="fa-solid fa-plus"></i>
                                                <h6 className="mt-2">Upload Video</h6>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            accept="video/mp4"
                                            style={{ display: 'none' }}
                                            onChange={handelVideoInput}
                                            ref={videoRef}
                                        />
                                    </div>
                                </>
                            )}

                            {formik.errors.video && (
                                <div className={`${styles.error}`}>Please Upload Video</div>
                            )}
                        </div>

                        <div className="col-6">
                            {thumbnailURL ? (
                                <>
                                    <div className={`${styles.thumbnail}`}>
                                        <img src={thumbnailURL} alt="thumbnail" className={`${styles.thumbnail_img}`} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={`${styles.thumbnail}`} onClick={handeThumbnail}>
                                        {uploadThumbnailLoading ? (
                                            <PacmanLoader color="#0071DC" size={15} />
                                        ) : (
                                            <>
                                                <i className="fa-solid fa-plus"></i>
                                                <h6 className="mt-2">Upload Thumbnail</h6>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            accept=".png,.jpg,.jpeg"
                                            style={{ display: 'none' }}
                                            ref={thumbnailRef}
                                            onChange={handeThumbnailUpload}
                                        />
                                    </div>
                                </>
                            )}

                            {formik.errors.thumbnail && (
                                <div className={`${styles.error}`}>Please Upload Thumbnail</div>
                            )}
                        </div>

                        <div className="col-12 mt-4">
                            <div className={`${styles.input_group}`}>
                                <input
                                    type="text"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    placeholder="Course Title..."
                                    name="title"
                                />
                                {formik.errors.title && formik.touched.title && (
                                    <div className={`${styles.error}`}>{formik.errors.title}</div>
                                )}
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className={`${styles.input_group}`}>
                                <textarea
                                    rows={5}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    name="description"
                                    placeholder="Enter the Course Description here..."
                                />
                                {formik.errors.description && formik.touched.description && (
                                    <div className={`${styles.error}`}>{formik.errors.description}</div>
                                )}
                            </div>
                        </div>

                        <div className="col-6 mt-4">
                            <div className={`${styles.input_group}`}>
                                <input
                                    type="text"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    placeholder="Category (eg: Education, Tech)"
                                    name="category"
                                />
                                {formik.errors.category && formik.touched.category && (
                                    <div className={`${styles.error}`}>{formik.errors.category}</div>
                                )}
                            </div>
                        </div>

                        <div className="col-6 mt-4">
                            <div className={`${styles.input_group}`}>
                                <input
                                    type="text"
                                    value={tagVal}
                                    onChange={handleTagChange}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Tags and Press Enter to Save"
                                    name="course_title"
                                    className="mb-2"
                                />
                                <div>
                                    {tags?.map((ele, index) => (
                                        <span key={index} className={`${styles.tag}`} onClick={() => removeTag(ele)}>
                                            {ele}
                                        </span>
                                    ))}
                                </div>

                                {formik.errors.tags && (
                                    <div className={`${styles.error}`}>{formik.errors.tags}</div>
                                )}
                            </div>
                        </div>

                        <div className="col-6 mt-4">
                            <div className={`${styles.input_group}`}>
                                <select
                                    aria-label="Default select example"
                                    value={formik.values.language}
                                    onChange={formik.handleChange}
                                    name="language"
                                >
                                    <option value="" disabled>
                                        Language
                                    </option>
                                    <option value="english">English</option>
                                    <option value="mandarin">Mandarin Chinese</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="french">French</option>
                                    <option value="arabic">Arabic</option>
                                    <option value="bengali">Bengali</option>
                                    <option value="russian">Russian</option>
                                    <option value="portuguese">Portuguese</option>
                                    <option value="urdu">Urdu</option>
                                </select>
                                {formik.errors.language && formik.touched.language && (
                                    <div className={`${styles.error}`}>{formik.errors.language}</div>
                                )}
                            </div>
                        </div>

                        <div className="col-6 mt-4">
                            <div className={`${styles.input_group}`}>
                                <select
                                    aria-label="Default select example"
                                    value={formik.values.level}
                                    onChange={formik.handleChange}
                                    name="level"
                                >
                                    <option value="" disabled>
                                        Level
                                    </option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                                {formik.errors.level && formik.touched.level && (
                                    <div className={`${styles.error}`}>{formik.errors.level}</div>
                                )}
                            </div>
                        </div>

                        <div className="col-6 mt-4">
                            <div className={`${styles.input_group}`}>
                                <input
                                    type="number"
                                    value={formik.values.duration}
                                    onChange={formik.handleChange}
                                    placeholder="Course Duration"
                                    name="duration"
                                />
                                {formik.errors.duration && formik.touched.duration && (
                                    <div className={`${styles.error}`}>{formik.errors.duration}</div>
                                )}
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <button type="submit">{submitLoading ? <PulseLoader color="#ffffff" size={5} /> : "Upload"}</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddCourses
