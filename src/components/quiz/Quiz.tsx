import { useState } from "react"
import quizData from "./../../data.json"
import Question from "./../question/Question"
import "./Quiz.css"

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [showScore, setShowScore] = useState<boolean>(false)

    console.log(score)
    
    function onSelectOption(selectedOption: string) {
        if(selectedOption === quizData[currentQuestionIndex].correctAnswer) {
            setScore(score + 1)
        }

        const nextQuestionIndex = currentQuestionIndex + 1
        if(nextQuestionIndex < quizData.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            setShowScore(true)
        }
    }

    return(
        <div>
            {showScore ? (
                <div className="quiz-score">
                    <h1>Your Score: {score} / {quizData.length}</h1>
                </div>
            ) : (<Question 
                    question={quizData[currentQuestionIndex].question}
                    options={quizData[currentQuestionIndex].options}
                    onSelectOption={onSelectOption}
                />
            )}
            
        </div>
    )
}