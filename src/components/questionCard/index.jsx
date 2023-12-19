export default function QuestionCard({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) {
  const approvedChoice = (e) => {
    console.log(e.currentTarget.value);
    const checkAnswer =
      e.currentTarget.value == questionsData[count]?.correct_answer;
    console.log(checkAnswer);
  };
  return (
    <div className="card">
      <div className="">
        {count + 1}/10-{questionsData[count]?.question}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <button onClick={approvedChoice} key={i} value={answer}>
          {answer}
        </button>
      ))}
    </div>
  );
}
