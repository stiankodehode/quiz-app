import { StyledH1, FlexColumn, StyledSelect } from "./startQuiz/styled";
import { StyledLink } from "./styled";

const StartQuiz = (props) => {
    // const handleTriviaForm = (event) => {
    //     const { name, value } = event.target;
    //     setTriviaForm((oldInfo) => ({
    //         ...oldInfo,
    //         [name]: value,
    //     }));
    //     console.log(triviaForm);
    // };

    const mappedCategories = props.categoryData.map((category, idx) => {
        return (
            <option key={idx} value={category.id}>
                {category.name}
            </option>
        );
    });

    return (
        <>
            <StyledH1>Quiz App v0.2(name TBD)</StyledH1>
            <form id="quizForm">
                <FlexColumn>
                    <label htmlFor="questionAmount">How many questions?</label>
                    <StyledSelect
                        name="questions"
                        id="questionAmount"
                        onChange={(event) => {
                            props.updateTriviaForm(event);
                        }}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </StyledSelect>
                </FlexColumn>
                <FlexColumn>
                    <label htmlFor="category">
                        What category would you like?
                    </label>
                    <StyledSelect
                        name="category"
                        id="category"
                        onChange={(event) => {
                            props.updateTriviaForm(event);
                        }}
                    >
                        <option value="undefined">Anything</option>
                        {mappedCategories}
                    </StyledSelect>
                </FlexColumn>
            </form>
            <StyledLink
                onClick={() => {
                    props.questionsApiCall();
                }}
                to="/pages/QuizPage"
            >
                Start Quiz!
            </StyledLink>
        </>
    );
};

export default StartQuiz;
