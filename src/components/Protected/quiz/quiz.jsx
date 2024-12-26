/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import useQuiz from "./useQuiz";
import styles from './quiz.module.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import InnerPageLoading from "../../../containers/pageLoading/InnerPageLoading/innerPageLoading";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";

const Quiz = () => {
    const {
        quizData1, // Updated to use quizData1 from the API
        handleShowResults,
        isQuizFinished,
        currentQuestion,
        answers,
        handleOptionClick,
        handleNext,
        selectedOption,
        handleConfetti,
        courseID,
        alreadyAttempt
    } = useQuiz();

    const navigate = useNavigate()

    useEffect(() => {
        if (isQuizFinished) {
            const totalCorrectAnswers = answers.filter(
                (answer, index) =>
                    quizData1.questions[index]?.options.find(option => option.text === answer)?.is_correct
            ).length;

            if ((totalCorrectAnswers / quizData1.questions.length) * 100 >= 65) {
                handleConfetti();
                toast.success("Congratulations! You Passed.");
            } else {
                toast.error("Failed! You Failed.");
            }
        }
    }, [isQuizFinished, answers, quizData1, handleConfetti]);

    if (!quizData1 || !quizData1.questions) {
        return (
            <>
                <InnerPageLoading />
            </>
        );
    }

    const totalCorrectAnswers = answers.filter(
        (answer, index) =>
            quizData1.questions[index]?.options.find(option => option.text === answer)?.is_correct
    ).length;

    if (isQuizFinished) {
        return (
            <div className={styles.quiz_result}>
                <h2>Quiz Results</h2>
                <p>
                    You got {totalCorrectAnswers} out of {quizData1.questions.length} questions correct!
                </p>

                {
                    (totalCorrectAnswers / quizData1.questions.length) * 100 >= 75 ? (
                        <>
                            {/* Popup code can be enabled if needed */}
                            {/* <Popup trigger={<button>View Certificate</button>} modal>
                                <div
                                    className={`${styles.certificate_model} d-flex justify-content-center align-items-center`}
                                    style={{ height: '80vh', borderRadius: '20px' }}
                                >
                                    <img src="../../../../public/images/dummy_certificate.jpg" className="img-fluid" />
                                </div>
                            </Popup> */}
                            <button onClick={() => {
                                navigate(`/review-course/${courseID}`)
                            }}>Review the Course</button>
                        </>
                    ) : (
                        <button onClick={() => window.location.reload()}>Retake Quiz</button>
                    )
                }
            </div>
        );
    }

    const currentQuestionData = quizData1.questions[currentQuestion];

    if (!currentQuestionData || currentQuestionData.options.length === 0) {
        return (
            <div>No Data Available</div>
        );
    }

    return (

        <>
            {
                alreadyAttempt ? (
                    <>
                        <section className={`${styles.already_attempt}`}>
                            <h2>You Completed This Course In Past  :{")"}</h2>
                            <NavLink to="/my-courses"><button className='mt-3'>Go To Your Courses</button></NavLink>
                        </section>
                    </>
                ) : (
                    <>
                        <section className={styles.quiz}>
                            <div>
                                <h2>Quiz for Becoming Front-End Developer</h2>
                                <div>
                                    <h3 className="mt-4">{currentQuestionData?.question_text}</h3>
                                    <div className={styles.btn_group}>
                                        {currentQuestionData?.options.map((option, index) => (
                                            <div key={option._id}>
                                                <button
                                                    onClick={() => handleOptionClick(option.text, index)}
                                                    className={selectedOption === index ? styles.active_btn : ""}
                                                >
                                                    {option.text}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: "20px" }} className={`${styles.answer_submission} mt-5`}>
                                        {currentQuestion < quizData1.questions.length - 1 ? (
                                            <button
                                                onClick={handleNext}
                                                disabled={!answers[currentQuestion]}
                                                style={{ padding: "10px 20px" }}
                                            >
                                                Next <i className="fa-regular fa-arrow-right"></i>
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleShowResults}
                                                disabled={!answers[currentQuestion]}
                                                style={{ padding: "10px 20px" }}
                                            >
                                                Show Results
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </>

    );
};

export default Quiz;
