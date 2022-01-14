import { useRouter } from "next/router";
import Button from "../components/Button";
import Estatistic from "../components/Estatistic";
import styles from "../styles/Result.module.css";

export default function Result() {
    const router = useRouter();

    const total = +router.query.total;
    const correct = +router.query.correct;
    const percentage = Math.round((correct / total) * 100);

    return (
        <div className={styles.result}>
            <h1>Parabéns você concluiu!</h1>
            <div style={{ display: "flex" }}>
                <Estatistic text="Perguntas" value={total} />
                <Estatistic text="Certas" value={correct}
                    backColor="#00C300" />
                <Estatistic text="Percentual" value={`${percentage}%`}
                    backColor="#AA00FF" />
            </div>
            <Button href="/" text="Tentar Novamente" />
        </div>
    )
};