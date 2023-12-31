import { makeAutoObservable } from "mobx";
import MyTestJson from '../myTests/test_1.json';

// State manager для результата выполенния теста
export default class ResultTestStore {
    constructor() {
        let answers = {};
        for (let i = 0; i < MyTestJson.countQuestions; i++) { // Проверяю наличие данных выбранных ответов в localStorage по каждому вопросу
            const currentQuestionId = MyTestJson.questions[i].id;
            if (localStorage.getItem("question_" + currentQuestionId)) {
                const questionData = localStorage.getItem("question_" + currentQuestionId);
                answers[currentQuestionId] = questionData.split('_');
            }
        }
        // "TestName*/*UserName*/*Time*/*IdQuestion*|*IdAnswer*/*IdQuestion*|*IdAnswer IdAnswer IdAnswer*/*IdQuestion*|*IdAnswer"
        this._answers = answers;
        makeAutoObservable(this);
    }

    setAnswer(answers) {
        this._answers = answers;
    }

    get answers() {
        return this._answers;
    }
    
    clear() {
        this._answers = {};
    }
}