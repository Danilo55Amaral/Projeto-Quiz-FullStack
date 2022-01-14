import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css";
import Enunciation from "./Enunciation";
import Time from "./Time";
import Response from "./Response";

const letters = [
    { value: 'A', color: '#F2C866' },
    { value: 'B', color: '#F266BA' },
    { value: 'C', color: '#85D4F2' },
    { value: 'D', color: '#BCE596' },
];

interface QuestionProps {
    value: QuestionModel
    timeToResponse?: number
    onResponse: (indice: number) => void
    endTime: () => void
};

export default function Question(props: QuestionProps) {
    const question = props.value;

    function renderResponses() {
        return question.responses.map((response, i) => {
            return (
                <Response
                    key={`${question.id}-${i}`}
                    value={response}
                    indice={i}
                    letter={letters[i].value}
                    colorBackLetter={letters[i].color}
                    onResponse={props.onResponse}
                />
            )
        })
    };

    return (
        <div className={styles.question}>
            <Enunciation text={question.enunciation} />
            <Time key={question.id}
                duration={props.timeToResponse ?? 10}
                endTime={props.endTime} />
            {renderResponses()}
        </div>
    )
};