import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useAddQuiz = (maxQuestions = 50) => {

    const [loading, setLoading] = useState(true);

    const [uplodLoading, setUploadLoading] = useState(false)

    const [questions, setQuestions] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState({
        question_text: "",
        options: [],
    });

    const { courseID } = useParams()

    const navigate = useNavigate()

    const [currentOption, setCurrentOption] = useState("");

    const [isCorrect, setIsCorrect] = useState(false);

    const location = useLocation();

    const { title } = location.state || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    const handleAddOption = () => {
        if (currentOption.trim() === "") return;

        setCurrentQuestion((prev) => ({
            ...prev,
            options: [
                ...prev.options,
                { option_id: `opt-${prev.options.length + 1}`, text: currentOption, is_correct: isCorrect },
            ],
        }));
        setCurrentOption("");
        setIsCorrect(false);
    };

    const handleAddQuestion = () => {
        if (currentQuestion.question_text.trim() === "" || currentQuestion.options.length < 2) {
            toast.warning("Each question must have a title and at least 2 options.");
            return;
        }

        const hasCorrectOption = currentQuestion.options.some((option) => option.is_correct);
        if (!hasCorrectOption) {
            toast.error("At least one option must be marked as correct.");
            return;
        }

        setQuestions((prev) => [
            ...prev,
            { question_id: `q-${prev.length + 1}`, ...currentQuestion },
        ]);
        setCurrentQuestion({ question_text: "", options: [] });
    };


    const handleUploadQuiz = async () => {

        if (questions.length < 10) {
            toast.error("At least 10 MCQs are required!");
            return;
        }

        const payload = {
            course_id: courseID,
            quiz_title: title || "Default Quiz Title",
            questions,
        };

        try {

            setUploadLoading(true)

            const response = await fetch('https://eduwise-708c009023f3.herokuapp.com/api/quiz/addquiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.status === 401) {
                toast.success("Quiz Already Exists for this Course!");
                setUploadLoading(false)
                return
            }

            if (response.status === 201) {
                toast.success("Quiz created successfully!");
                setUploadLoading(false)

                navigate("/drafts");

                console.log("Quiz Response:", response.data);
            } else {
                setUploadLoading(false)
                toast.warning("Unexpected response from the server. Please try again.");
            }

        } catch (error) {
            setUploadLoading(false)
            console.error("Error creating quiz:", error);
            if (error.response && error.response.data) {
                toast.error(`Error: ${error.response.data.error}`);
            } else {
                setUploadLoading(false)
                toast.error("An unexpected error occurred. Please try again.");
            }
        }
    };


    const handleRemoveQuestion = (index) => {
        setQuestions((prev) => prev.filter((_, idx) => idx !== index));
    };

    return {
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
    };
};

export default useAddQuiz;
