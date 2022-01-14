import styles from "../styles/Enunciation.module.css";

interface EnunciationProps {
    text: string
};

export default function Enunciation(props: EnunciationProps) {
    return (
        <div className={styles.enunciation}>
            <span className={styles.text}>{props.text}</span>
        </div>
    )
};