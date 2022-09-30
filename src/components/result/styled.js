import styled from "styled-components";

export const ResultsBox = styled.div`
    width: 80%;
`;

export const ResultQuestion = styled.h2`
    font-size: 20px;
`;

export const AnswersBox = styled.div`
    display: flex;
    align-items: flex-start;
    padding-bottom: 1em;
    border-bottom: 2px solid darkblue;
`;

export const ResultParagraph = styled.p`
    background-color: ${(props) => (props.correct ? "green" : "white")};
    background-color: ${(props) => (props.wrong ? "yellow" : "none")};
    background-color: ${(props) => (props.correctAnswer ? "red" : "none")};
    margin: 10px 1em 0 0;
    padding: 0.5em;
    text-align: center;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 16px;
    min-width: 125px;
`;
