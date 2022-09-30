import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    background-color: transparent;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    padding: 0.5em;
    color: white;
    background: blue;
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.6px);
    -webkit-backdrop-filter: blur(8.6px);
    border: 1px solid rgba(72, 190, 233, 0.3);
`;
