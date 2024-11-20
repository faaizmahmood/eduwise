/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import confetti from 'canvas-confetti';
import { toast } from "react-toastify";

const useQuiz = () => {

    const navigate = useNavigate()

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState([]);

    const [selectedOption, setSelectedOption] = useState(null);

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const [quizData1, setQuizData] = useState(null);

    const [loading, setLoading] = useState(true);

    const { courseID } = useParams();

    const [searchParams] = useSearchParams();

    const source = searchParams.get('source');

    const course_title = searchParams.get('course_title');

    const location = useLocation()

    const { course_source } = location.state || {}

    // alert(course_source)


    useEffect(() => {

        if (source === null && course_title === null && (course_source != 'course')) {
            navigate('/my-courses')
        }

        if (courseID === null) {
            navigate('/my-courses')
        }

    }, [courseID])

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/quiz/getquiz/${courseID}`);

                if (response.status === 404) {
                    toast.error("Quiz Not Found")
                    navigate('/my-courses')
                    setLoading(false)
                    return
                }

                const data = await response.json();
                setQuizData(data.quizdata); 
                setLoading(false);
            } catch (err) {
                setLoading(false);
                toast.error("Internal Server.js")
                console.error(err);
            }
        })();
    }, [courseID]);

    const handleOptionClick = (optionText, index) => {
        setSelectedOption(index);
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = optionText;
        setAnswers(updatedAnswers);
    };

    const handleNext = () => {
        setSelectedOption(null);
        if (currentQuestion < quizData1.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };


    const handleConfetti = () => {



        const duration = 2 * 1000; // 2 seconds
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 2, // Fewer particles for continuous effect
                startVelocity: 10, // Slow down the particles
                spread: 30, // Wider spread
                angle: 90, // Particles fall straight down
                origin: { x: Math.random(), y: 0 }, // Random horizontal position, start at the top
                gravity: 2 // Simulate gravity
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }

    const handleShowResults = () => {
        setIsQuizFinished(true);
    };



    return {
        quizData1,
        handleNext,
        handleOptionClick,
        handleShowResults,
        currentQuestion,
        isQuizFinished,
        answers,
        selectedOption,
        handleConfetti
    };
};

export default useQuiz;
