/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './reviewCourse.module.scss'
import useReviewCourses from './useReviewCourse'
import InnerPageLoading from '../../../containers/pageLoading/InnerPageLoading/innerPageLoading'
import { PulseLoader, SyncLoader } from 'react-spinners'

// Reusable Loading Component
const LoadingEffect = () => (
    <div className={`${styles.loading}`}>
        <SyncLoader color="#0071DC" size={8} />
    </div>
);

const ReviewCourse = () => {
    const { loading, course, handelStep, steps, stepsLoading, handelBackStep, getStarInput, starInput, handelComment, reviewText, handelSubmit, reviewLoading } = useReviewCourses();

    // Step 1 and 2 Question Components
    const renderRatingQuestion = () => {
        if (stepsLoading) return <LoadingEffect />;

        const questions = [
            "How would you rate the quality and relevance of the course content?",
            "How would you rate the clarity and engagement of the instructor?",
            "How would you rate the overall learning experience?",
            "How would you rate the usability of the platform?"
        ];

        
        return (
            <div className={`${styles.review_item}`}>
                <p>{questions[steps - 1]}</p>
                <div className="d-flex gap-2">
                    {[...Array(5)].map((_, index) => (
                        <i key={index} onClick={() => getStarInput(index)} className={`fa-star ${starInput[`star${steps}`] > index ? "fa-solid" : "fa-regular"}`}></i>
                    ))}
                </div>
            </div>
        );
    };

    const renderCommentInput = () => (
        stepsLoading ? (
            <LoadingEffect />
        ) : (
            <div className={`${styles.review_item}`}>
                <p>Please provide any additional comments or feedback:</p>
                <textarea
                    className={`${styles.comment_input}`}
                    rows={5}
                    value={reviewText}
                    onChange={(e) => handelComment(e.target.value)}
                    placeholder="Type your comments here..."
                />
            </div>
        )
    );

    return (
        <>
            {loading ? (
                <InnerPageLoading />
            ) : (
                <section className={`${styles.reviewCourse} mt-lg-0 mt-5`}>
                    <h2 className="text-center">Review this Course &quot;{course?.title}&quot;</h2>
                    <div className={`${styles.review_wrapper} mt-lg-0 mt-4`}>
                        <div className={`${styles.review_star_inner_wrapper} text-center`}>
                            <div className={`${styles.review_box}`}>
                                {steps === 5 ? renderCommentInput() : renderRatingQuestion()}
                            </div>
                            <div className="d-flex gap-2 justify-content-center">
                                {steps > 1 && (
                                    <button className="mt-4" onClick={handelBackStep}>
                                        <i className="fa-regular fa-arrow-left me-1"></i> Back
                                    </button>
                                )}
                                {
                                    steps === 5 ? (
                                        <>
                                            <button className="mt-4" onClick={handelSubmit}> {reviewLoading ? <PulseLoader color="#ffffff" size={5}/> : "Submit" } </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="mt-4" onClick={handelStep}>
                                                Next <i className="fa-regular fa-arrow-right ms-1"></i>
                                            </button>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default ReviewCourse;
