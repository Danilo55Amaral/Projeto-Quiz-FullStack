import QuestionModel from "../model/question";
import styles from "../styles/Questionnaire.module.css";
import Question from "./Question";
import Button from "./Button";

interface QuestionnaireProps {
    question: QuestionModel
    last: boolean
    questionResponded: (question: QuestionModel) => void
    goNextStep: () => void
};

export default function Questionnaire(props: QuestionnaireProps) {

    function onResponse(indice: number) {
        if (props.question.notResponded) {
            props.questionResponded(props.question.toRespond(indice))
        }
    };

    return (
        <div className={styles.questionnaire}>
            {props.question ?
                <Question
                    value={props.question}
                    timeToResponse={20}
                    onResponse={onResponse}
                    endTime={props.goNextStep} />
                : false
            }
            <Button onClick={props.goNextStep}
                text={props.last ? 'Finalizar' : 'Próxima'} />
        </div>
    )
};