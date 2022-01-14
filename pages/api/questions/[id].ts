import questions from "../questionsDatabase";

export default function questionProId (req, res) {
    const idSelected = +req.query.id
    const onlyQuestionOrNot = questions.filter(question => question.id === idSelected)

    if (onlyQuestionOrNot.length === 1) {
        const questionSelected = onlyQuestionOrNot[0].randomResponses()
        res.status(200).json(questionSelected.convertToObject())
    } else {
        res.status(204).send()
    }
};