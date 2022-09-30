import styled from "styled-components";

export const AnswerBox = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
`;

export const AnswerButton = styled.button`
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.5em;
    font-size: 20px;
    width: 100%;
    min-width: 125px;
`;

export const QuestionText = styled.h1`
    margin: 0 0 2em;
    padding: 1em;
    width: 100%;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`;
