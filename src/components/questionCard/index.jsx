import { useEffect, useState } from "react";

const QuestionCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  const [timer, setTimer] = useState(30);
  const approvedChoice = (e) => {
    console.log(e.currentTarget.value);
    const checkAnswer =
      e.currentTarget.value == questionsData[count]?.correct_answer;
    console.log(checkAnswer);
    if (checkAnswer) {
      setScore(score + 100);
    }
    setCount(count + 1);
    if (count == 9) {
      setModal(true);
    }
    setTimer(30);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if ((timer == 0) & (count < 10)) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  return (
    <div className="card w-full max-w-3xl">
      <div className="w-[50px] h-[50px] font-bold text-lg text-[#163020] bg-[#B6C4B6] rounded-full flex items-center justify-center mb-4">
        {timer}
      </div>
      <div className="text-lg font-bold text-[#B6C4B6] mb-2">
        {count + 1}/10-{questionsData[count]?.question}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <button
          className="w-2/5 h-[40px] m-1 mx-8 bg-white border rounded-lg hover:bg-[#163020] hover:text-white transition duration-500"
          onClick={approvedChoice}
          key={i}
          value={answer}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};
export default QuestionCard;
