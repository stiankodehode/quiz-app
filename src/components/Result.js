import {
    ResultQuestion,
    ResultsBox,
    AnswersBox,
    ResultParagraph,
} from "./result/styled";

const Result = (props) => {
    const answerData = props.answer;
    const mappedResultAnswers = answerData.shuffledAnswers.map(
        (answer, idx) => {
            if (answer.correct && answerData.answer.correct) {
                return (
                    <ResultParagraph key={idx} correct={true}>
                        {decodeURIComponent(answer.answer)}
                    </ResultParagraph>
                );
            } else if (answer.correct && !answerData.answer.correct) {
                return (
                    <ResultParagraph key={idx} wrong={true}>
                        {decodeURIComponent(answer.answer)}
                    </ResultParagraph>
                );
            } else if (answerData.answer.answer === answer.answer) {
                return (
                    <ResultParagraph key={idx} correctAnswer={true}>
                        {decodeURIComponent(answer.answer)}
                    </ResultParagraph>
                );
            } else {
                return (
                    <ResultParagraph key={idx}>
                        {decodeURIComponent(answer.answer)}
                    </ResultParagraph>
                );
            }
        }
    );
    return (
        <ResultsBox>
            <ResultQuestion>
                {decodeURIComponent(answerData.question)}
                <AnswersBox>{mappedResultAnswers}</AnswersBox>
            </ResultQuestion>
        </ResultsBox>
    );
};

export default Result;
