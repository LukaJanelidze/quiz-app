import "./Question.css"

type TQuestionProps = {
    question: string
    options: string[]
    onSelectOption: (selectedOption: string) => void
}

const Question: React.FC<TQuestionProps> = ({ question, options, onSelectOption }) => {

    return(
        <div className="question-box">
            <h2 className="question-question">{question}</h2>
            <ul className="question-options-box">
                {options.map((option) => (
                    <li className="question-options-li" key={option}>
                        <button className="question-buttons" onClick={() => onSelectOption(option)}>{option}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Question