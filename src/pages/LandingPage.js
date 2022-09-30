import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import StartQuiz from "../components/StartQuiz";
import QuizPage from "./landingPage/QuizPage";
import ResultsPage from "./landingPage/quizPage/ResultsPage";
import { loadingIcon } from "../img/loading";

const LandingPage = () => {
    const [quizData, setQuizData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [answers, setAnswers] = useState([]);
    const [questionAmount, setQuestionAmount] = useState(5);

    // This function adds the most recent answer and question data to the end of the array.
    const updateAnswers = (question, answer, answersArray) => {
        setAnswers((oldAnswers) => [
            ...oldAnswers,
            {
                question: question.question,
                answer: answer,
                shuffledAnswers: answersArray,
            },
        ]);
    };

    const handleQuestionAmount = (amount) => {
        setQuestionAmount(amount);
    };

    // API call
    useEffect(() => {
        axios
            .get(
                `https://opentdb.com/api.php?amount=${questionAmount}&encode=url3986`
            )
            .then((res) => {
                setQuizData(res.data.results);
                setIsLoading(false);
            });
    }, [questionAmount]);

    return (
        <>
            <Routes>
                <Route
                    path="*"
                    element={
                        isLoading ? (
                            <svg>{loadingIcon}</svg>
                        ) : (
                            <StartQuiz
                                handleQuestionAmount={handleQuestionAmount}
                            />
                        )
                    }
                />
                <Route
                    path="/pages/QuizPage"
                    element={
                        <QuizPage
                            quizData={quizData}
                            updateAnswers={updateAnswers}
                        />
                    }
                />
                <Route
                    path="/pages/ResultsPage"
                    element={
                        <ResultsPage
                            questionAmount={questionAmount}
                            answers={answers}
                        />
                    }
                />
            </Routes>
        </>
    );
};

export default LandingPage;
