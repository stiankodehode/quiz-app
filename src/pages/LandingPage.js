import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import StartQuiz from "../components/StartQuiz";
import QuizPage from "./QuizPage";

const LandingPage = () => {
    const [quizData, setQuizData] = useState();

    useEffect(() => {
        axios
            .get("https://opentdb.com/api.php?amount=25")
            .then((res) => setQuizData(res.data.results));
    }, []);
    return (
        <>
            <Routes>
                <Route path="*" element={<StartQuiz />} />
                <Route path="/pages/QuizPage" element={<QuizPage />} />
            </Routes>
        </>
    );
};

export default LandingPage;
