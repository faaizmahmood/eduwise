/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InnerPageLoading from "../../../../containers/pageLoading/InnerPageLoading/innerPageLoading";
import useAddQuiz from "./useAddQuiz";
import styles from "./addQuiz.module.scss";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

const AddQuiz = () => {

    const {
        loading,
        title,
        questions,
        currentQuestion,
        currentOption,
        isCorrect,
        maxQuestions,
        setCurrentOption,
        setIsCorrect,
        setCurrentQuestion,
        handleAddOption,
        handleAddQuestion,
        handleUploadQuiz,
        handleRemoveQuestion,
        uplodLoading
    } = useAddQuiz();

    return (
        <>
            {loading ? (
                <InnerPageLoading />
            ) : (
                <section className={`${styles.add_quiz} mt-4`}>
                    <h2>
                        Add Quiz for: <i>{title ? title : "Default Course"}</i>
                    </h2>

                    {/* Add MCQs Section */}
                    {questions.length < maxQuestions ? (
                        <div className="mcq-form mt-4">
                            <h3>Question {questions.length + 1}</h3>
                            <textarea
                                placeholder="Enter question text"
                                value={currentQuestion.question_text}
                                onChange={(e) =>
                                    setCurrentQuestion((prev) => ({
                                        ...prev,
                                        question_text: e.target.value,
                                    }))
                                }
                                rows={2}
                                className="form-control mt-2"
                            />
                            <div className="options mt-3">
                                <input
                                    type="text"
                                    placeholder="Enter option text"
                                    value={currentOption}
                                    onChange={(e) => setCurrentOption(e.target.value)}
                                    className="form-control"
                                />
                                <div className="d-flex align-items-center mt-2">
                                    <input
                                        type="checkbox"
                                        checked={isCorrect}
                                        onChange={(e) => setIsCorrect(e.target.checked)}
                                    />
                                    <label className="ms-2">Is this correct?</label>
                                </div>
                                <div className="text-end">
                                    <button
                                        className="btn btn-primary mt-2"
                                        onClick={handleAddOption}
                                    >
                                        Add Option
                                    </button>
                                </div>
                            </div>

                            <ul className="option-list mt-3">
                                {currentQuestion.options.map((opt, idx) => (
                                    <li key={idx}>
                                        {opt.text} {opt.is_correct && "(Correct)"}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="btn btn-success mt-3"
                                onClick={handleAddQuestion}
                            >
                                Add Question
                            </button>
                        </div>
                    ) : (
                        <p>You have reached the maximum number of questions.</p>
                    )}

                    {/* Question List */}
                    <div className="questions-list mt-4">
                        <h3>Added Questions:</h3>
                        <ul>
                            {questions.map((q, idx) => (
                                <li key={q.question_id} className={`${styles.added_question} mt-3`}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>Q{idx + 1}:</strong> {q.question_text}
                                        </div>
                                        <div>
                                            {/* Delete Question Icon */}
                                            <i className="fa-regular fa-trash" onClick={() => handleRemoveQuestion(idx)} style={{ color: 'red', cursor: 'pointer', fontSize: '22px' }}></i>
                                        </div>
                                    </div>
                                    <ul className="mt-2">
                                        {q.options.map((opt) => (
                                            <li key={opt.option_id} className={`${styles.added_option}`}>
                                                {opt.text} {opt.is_correct && "(Correct)"}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="btn btn-primary mt-4 w-100" onClick={handleUploadQuiz}>
                        {uplodLoading ? <PulseLoader color="#ffffff" size={5} /> : "Upload Quiz"}
                    </button>
                </section>
            )}
        </>
    );
};

export default AddQuiz;
