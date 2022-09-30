import { useEffect, useState } from "react";
import Result from "../../../components/Result";
import { StyledLink } from "../../../components/styled";

const ResultsPage = (props) => {
    const answersData = props.answers;
    const [score, setScore] = useState(0);

    // This function calculates the total score
    const totalScore = () => {
        let totalScore = 0;
        answersData.forEach((element) => {
            if (element.answer.correct) {
                totalScore++;
            }
        });
        setScore(totalScore);
    };

    // useEffect runs to set the score
    useEffect(() => {
        totalScore();
    }, []);

    // sets states back to original value and flips a boolean to do a new API call for questions
    const restartGame = () => {
        setScore(0);
        props.flipBoolean();
        props.resetAnswers();
    };

    // mapped result elements, one element for each answer
    const mappedResults = answersData.map((answer, idx) => {
        return <Result key={idx} answer={answer} />;
    });
    return (
        <>
            <h1>There do be results</h1>
            {mappedResults}
            <h2>{`${score}/${props.questionAmount}`}</h2>
            <StyledLink
                onClick={() => {
                    restartGame();
                }}
                to="*"
            >
                New Quiz
            </StyledLink>
        </>
    );
};

export default ResultsPage;
