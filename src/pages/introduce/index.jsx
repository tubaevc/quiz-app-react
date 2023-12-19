import React, { useState } from "react";
import Dropdown from "../../components/dropdown";
import { useNavigate } from "react-router-dom";

export default function Introduce() {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;
  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };
  return (
    <div className="introduce w-full h-screen bg-[#163020] flex items-center justify-center">
      <div className="container  rounded-xl p-4 bg-[#B6C4B6] flex flex-col justify-center items-center w-full max-w-3xl">
        <div className="mb-10 text-5xl font-bold ">Trivia</div>
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div
          onClick={startQuiz}
          className="w-96 h-12 font-semibold text-white flex items-center justify-center mt-4 cursor-pointer rounded-lg bg-[#163020]"
        >
          Quiz'e başla
        </div>
      </div>
    </div>
  );
}
