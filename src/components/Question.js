import { AnswerBox, AnswerButton, QuestionText } from "./question/styled";

const Question = (props) => {
    const question = props.questionData;

    // Array with all the answers both correct and false
    const answers = [
        question.correct_answer,
        ...question.incorrect_answers,
    ].map((answer) => {
        return {
            answer: answer,
            correct:
                decodeURIComponent(answer) ===
                decodeURIComponent(question.correct_answer)
                    ? true
                    : false,
        };
    });

    // sorting the answers to not have every correct answer be the first one
    const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());

    // Checks if the answer clicked is correct and adds a boolean
    const checkAnswer = (answer) => {
        if (answer === question.correct_answer) {
            props.updateAnswers(question, answer, shuffledAnswers);
        } else {
            props.updateAnswers(question, answer, shuffledAnswers);
        }
    };

    // Mapping the shuffled answers to clickable buttons
    const mappedAnswers = shuffledAnswers.map((answer, idx) => {
        return (
            <AnswerButton
                key={idx}
                onClick={() => {
                    checkAnswer(answer);
                    props.nextQuestion();
                }}
            >
                {decodeURIComponent(answer.answer)}
            </AnswerButton>
        );
    });

    return (
        <>
            <QuestionText>{decodeURIComponent(question.question)}</QuestionText>
            <AnswerBox>{mappedAnswers}</AnswerBox>
        </>
    );
};

export default Question;
