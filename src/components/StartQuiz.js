import { StyledH1 } from "./startQuiz/styled";
import { StyledLink } from "./styled";

const StartQuiz = () => {
    return (
        <>
            <StyledH1>Quiz App v0.2(name TBD)</StyledH1>
            <StyledLink to="/pages/QuizPage">Start Quiz!</StyledLink>
        </>
    );
};

export default StartQuiz;
