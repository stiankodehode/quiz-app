import styled from "styled-components";

export const StyledH1 = styled.h1`
    /* From https://css.glass */
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

export const FlexColumn = styled.div`
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
`;

export const StyledSelect = styled.select`
    padding: 5px;
    font-size: 16px;
`;
