import { useEffect, useState } from "react";
import Question from "../../components/Question";
import { useNavigate } from "react-router-dom";

const QuizPage = (props) => {
    const quizData = props.quizData;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // Navigation
    let navigate = useNavigate();

    // navigates to the results page if currentQuestionIndex if there is no more questions
    useEffect(() => {
        if (currentQuestionIndex === quizData.length) {
            navigate("../pages/ResultsPage");
        }
    }, [currentQuestionIndex, navigate, quizData.length]);

    // updates the question index to display the next question
    const nextQuestion = () => {
        setCurrentQuestionIndex((oldIndex) => {
            return oldIndex + 1;
        });
    };

    // Mapping the questions for the Question component
    const mappedQuestions = quizData.map((question, idx) => {
        return (
            <Question
                key={idx}
                nextQuestion={nextQuestion}
                questionData={question}
                updateAnswers={props.updateAnswers}
            />
        );
    });
    // Renders the current index question
    return <>{mappedQuestions[currentQuestionIndex]}</>;
};

export default QuizPage;
