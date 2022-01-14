import styles from "../styles/Estatistic.module.css";

interface EstatisticProps {
    value: any
    text: string
    backColor?: string
    fontColor?: string
};

export default function Estatistic(props: EstatisticProps) {
    return (
        <div className={styles.estatistic}>
            <div className={styles.value} style={{
                backgroundColor: props.backColor ?? '#34465D',
                color: props.fontColor ?? '#333'
            }}>
                {props.value}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
};