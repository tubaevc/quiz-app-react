import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import QuestionCard from "../../components/questionCard";

export default function Quiz() {
  const { difficulty, amount } = useParams();
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [questionsData, setQuestionsData] = useState([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
  }, []);
  console.log(questionsData);
  return (
    <div>
      <QuestionCard
        questionsData={questionsData}
        score={score}
        setScore={setScore}
        count={count}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
}
