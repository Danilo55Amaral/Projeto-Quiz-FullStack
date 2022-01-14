import ResponseModel from "./response";
import { confuseOrder } from "../functions/arrays";

export default class QuestionModel {
    #id: number
    #enunciation: string
    #responses: ResponseModel[]
    #correct: boolean

    constructor(id: number, enunciation: string, responses: ResponseModel[], correct = false) {
        this.#id = id
        this.#enunciation = enunciation
        this.#responses = responses
        this.#correct = correct
    };

    get id() {
        return this.#id
    };
    get enunciation() {
        return this.#enunciation
    };
    get responses() {
        return this.#responses
    };
    get correct() {
        return this.#correct
    };
    get notResponded() {
        return !this.responded
    };
    get responded() {
        for (let response of this.#responses) {
            if (response.reveled) return true
        }
        return false
    };

    toRespond(indice: number): QuestionModel {
        const correct = this.#responses[indice]?.correct
        const responses = this.#responses.map((response, i) => {
            const responseSelected = indice === i
            const mustReveal = responseSelected || response.correct
            return mustReveal ? response.reveal() : response

        })
        return new QuestionModel(this.id, this.enunciation, responses, correct)
    };

    randomResponses(): QuestionModel {
        let responsesRandom = confuseOrder(this.#responses)
        return new QuestionModel(this.#id, this.#enunciation, responsesRandom, this.#correct)
    };

    static createUsingObject(obj: QuestionModel): QuestionModel {
        const responses = obj.responses.map(resp => ResponseModel.createUsingObject(resp))
        return new QuestionModel(obj.id, obj.enunciation, responses, obj.correct)
    };

    convertToObject() {
        return {
            id: this.#id,
            enunciation: this.#enunciation,
            responded: this.responded,
            correct: this.#correct,
            responses: this.responses.map(resp => resp.convertToObject()),
        }
    };
};