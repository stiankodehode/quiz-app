import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import StartQuiz from "../components/StartQuiz";
import QuizPage from "./landingPage/QuizPage";
import ResultsPage from "./landingPage/quizPage/ResultsPage";
import { loadingIcon } from "../img/loading";

const LandingPage = () => {
    const [quizData, setQuizData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [answers, setAnswers] = useState([]);
    const [triviaForm, setTriviaForm] = useState({
        questions: 5,
        category: undefined,
    });
    const [restart, setRestart] = useState(true);

    // API call for categories
    useEffect(() => {
        axios.get("https://opentdb.com/api_category.php").then((res) => {
            setCategoryData(res.data.trivia_categories);
            setIsLoading(false);
        });
    }, []);

    // API call

    const questionsApiCall = () => {
        console.log("api call");
        const category = "&category=" + triviaForm.category;
        console.log(category);
        axios
            .get(
                `https://opentdb.com/api.php?amount=${triviaForm.questions}${
                    triviaForm.category === undefined ? "" : category
                }&encode=url3986`
            )
            .then((res) => {
                setQuizData(res.data.results);
                setIsLoading(false);
            });
    };

    // useEffect(() => {
    //     const category = "&category=" + triviaForm.category;
    //     console.log(category);
    //     axios
    //         .get(
    //             `https://opentdb.com/api.php?amount=${triviaForm.questions}${
    //                 triviaForm.category === undefined ? "" : category
    //             }&encode=url3986`
    //         )
    //         .then((res) => {
    //             setQuizData(res.data.results);
    //             setIsLoading(false);
    //         });
    // }, [triviaForm, restart]);

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

    const updateTriviaForm = (event) => {
        const { name, value } = event.target;
        setTriviaForm((oldState) => ({
            ...oldState,
            [name]: value,
        }));
    };

    // This function is used to flip a boolean to trigger a new API call
    const flipBoolean = () => {
        setRestart((oldValue) => !oldValue);
    };
    // This function sets the answers state back to an empty array
    const resetAnswers = () => {
        setAnswers([]);
    };
    // This function handles the amount of questions to be fetched from the API

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
                                updateTriviaForm={updateTriviaForm}
                                categoryData={categoryData}
                                questionsApiCall={questionsApiCall}
                            />
                        )
                    }
                />
                <Route
                    path="/pages/QuizPage"
                    element={
                        !quizData ? (
                            <svg>{loadingIcon}</svg>
                        ) : (
                            <QuizPage
                                quizData={quizData}
                                updateAnswers={updateAnswers}
                            />
                        )
                    }
                />
                <Route
                    path="/pages/ResultsPage"
                    element={
                        <ResultsPage
                            flipBoolean={flipBoolean}
                            resetAnswers={resetAnswers}
                            questionAmount={triviaForm.questions}
                            answers={answers}
                        />
                    }
                />
            </Routes>
        </>
    );
};

export default LandingPage;
