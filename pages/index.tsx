
import Questionnaire from "../components/Questionnaire";
import QuestionModel from "../model/question";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BASE_URL = 'projeto-quiz-full-stack.vercel.app/api';

export default function Home() {
  const router = useRouter();
  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [correctResponses, setCorrectResponses] = useState<number>(0);

  async function loadQuestionIds() {
    const resp = await fetch(`${BASE_URL}/questionnaire`)
    const questionIds = await resp.json()
    setQuestionIds(questionIds)
  };

  async function loadQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
  };

  useEffect(() => {
    loadQuestionIds()
  }, []);

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0])
  }, [questionIds]);

  function questionResponded(questionResponded: QuestionModel) {
    setQuestion(questionResponded)
    const correct = questionResponded.correct
    setCorrectResponses(correctResponses + (correct ? 1 : 0))
  };

  function idNextQuestion() {
    const nextIndice = questionIds.indexOf(question.id) + 1
    return questionIds[nextIndice]
  };

  function goNextStep() {
    const nextId = idNextQuestion()
    nextId ? goNextQuestion(nextId) : finish()
  };

  function goNextQuestion(nextId: number) {
    loadQuestion(nextId)
  };

  function finish() {
    router.push({
      pathname: "/result",
      query: {
        total: questionIds.length,
        correct: correctResponses
      }
    })
  };

  return question ? (
    <Questionnaire
      question={question}
      last={idNextQuestion() === undefined}
      questionResponded={questionResponded}
      goNextStep={goNextStep} />
  )
    : false
};
