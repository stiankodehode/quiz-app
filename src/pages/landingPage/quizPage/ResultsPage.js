import Result from "../../../components/Result";

const ResultsPage = (props) => {
    const answersData = props.answers;

    const totalScore = () => {
        let totalScore = 0;
        answersData.forEach((element) => {
            if (element.answer.correct) {
                totalScore++;
            }
        });
        return totalScore;
    };

    // mapped result elements, one element for each answer
    const mappedResults = answersData.map((answer, idx) => {
        return <Result key={idx} answer={answer} />;
    });
    return (
        <>
            <h1>There do be results</h1>
            {mappedResults}
            <h2>{`${totalScore()}/${props.questionAmount}`}</h2>
        </>
    );
};

export default ResultsPage;
