import ResponseModel from "../model/response";
import styles from "../styles/Response.module.css";

interface ResponseProps {
    value: ResponseModel
    indice: number
    letter: string
    colorBackLetter: string
    onResponse: (indice: number) => void
};

export default function Response(props: ResponseProps) {
    const response = props.value;
    const responseReveled = response.reveled ? styles.responseReveled : '';

    return (
        <div className={styles.response}
            onClick={() => props.onResponse(props.indice)}>
            <div className={`${responseReveled} ${styles.contentResponse}`}>
                <div className={styles.front}>
                    <div className={styles.letter}
                        style={{ backgroundColor: props.colorBackLetter }}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {response.value}
                    </div>
                </div>
                <div className={styles.verse}>
                    {response.correct ? (
                        <div className={styles.correct}>
                            <div>A resposta certa é...</div>
                            <div className={styles.value}>{response.value}</div>
                        </div>
                    ) : (
                        <div className={styles.incorrect}>
                            <div>A resposta informada está errada...</div>
                            <div className={styles.value}>{response.value}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};