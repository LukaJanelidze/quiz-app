import { useState } from "react";
import quizData from "./../../data.json";
import Question from "./../question/Question";
import "./Quiz.css";

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false);

    function onSelectOption(selectedOption: string) {
        if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < quizData.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setShowScore(true);
        }
    }

    const { question, options } = quizData[currentQuestionIndex];

    return (
        <div>
            {!showScore && (
                <h1 className="current-question">Question {currentQuestionIndex + 1}</h1>
            )}

            {showScore ? (
                <div className="quiz-score">
                    <h3>Your Score: {score} / {quizData.length}</h3>
                </div>
            ) : (
                <Question
                    question={question}
                    options={options}
                    onSelectOption={onSelectOption}
                />
            )}
        </div>
    );
}
