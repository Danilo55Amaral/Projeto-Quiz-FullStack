import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Time.module.css";

interface TimeProps {
    key: any
    duration: number
    endTime: () => void
};

export default function Time(props: TimeProps) {
    return (
        <div className={styles.time}>
            <CountdownCircleTimer
                duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.endTime}
                colors={[
                    ['#25D366', 0.33],
                    ['#F7B801', 0.33],
                    ['#AF0606', 0.33],
                ]}>
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
};