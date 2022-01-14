import QuestionModel from "../../model/question";
import ResponseModel from "../../model/response";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual físico criou a teoria da relatividade Geral?', [
        ResponseModel.incorrect('Pitágoras'),
        ResponseModel.incorrect('Niels Borh'),
        ResponseModel.incorrect('Ernest Rutherford'),
        ResponseModel.correct('Einstein'),
    ]),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        ResponseModel.incorrect('Caju'),
        ResponseModel.incorrect('Côco'),
        ResponseModel.incorrect('Chuchu'),
        ResponseModel.correct('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        ResponseModel.incorrect('Manada'),
        ResponseModel.incorrect('Alcateia'),
        ResponseModel.incorrect('Rebanho'),
        ResponseModel.correct('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        ResponseModel.incorrect('Equilátero'),
        ResponseModel.incorrect('Isóceles'),
        ResponseModel.incorrect('Trapézio'),
        ResponseModel.correct('Escaleno'),
    ]),
    new QuestionModel(205, 'Qual foi o nome dado ao livro de Darwin?', [
        ResponseModel.incorrect('Selecão Natural'),
        ResponseModel.incorrect('DNA o segredo da Vida'),
        ResponseModel.incorrect('Princípios Matématicos da Filosifia Natural'),
        ResponseModel.correct('A origem das espécies'),
    ]),
    new QuestionModel(206, 'Qual estrutura condensa o DNA com proteina?', [
        ResponseModel.incorrect('Átomo'),
        ResponseModel.incorrect('Mitocondria'),
        ResponseModel.incorrect('Robossomos'),
        ResponseModel.correct('Cromossomos'),
    ]),
    new QuestionModel(207, 'Qual a teoria mais aceita sobre a origem das espécies?', [
        ResponseModel.incorrect('Criassionista'),
        ResponseModel.incorrect('nenhuma alternativa'),
        ResponseModel.incorrect('Panspermia'),
        ResponseModel.correct('Evolucionismo'),
    ]),
    new QuestionModel(208, 'Qual lei ficou conhecida como segunda lei de Newton?', [
        ResponseModel.incorrect('Lei do retorno'),
        ResponseModel.incorrect('Ação e Reação'),
        ResponseModel.incorrect('Panspermia'),
        ResponseModel.correct('F=ma'),
    ]),
    new QuestionModel(209, 'A maior parte do universo é constituida por?', [
        ResponseModel.incorrect('Estrelas'),
        ResponseModel.incorrect('Átomos'),
        ResponseModel.incorrect('Matéria escura'),
        ResponseModel.correct('Energia escura'),
    ]),
    new QuestionModel(210, 'Qual Cientista criou a lei da gravitação universal?', [
        ResponseModel.incorrect('Einstein'),
        ResponseModel.incorrect('Darwin'),
        ResponseModel.incorrect('Max Plank'),
        ResponseModel.correct('Newton'),
    ]),
];

export default questions;