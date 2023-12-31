import { makeAutoObservable } from "mobx";
import MyTestJson from '../myTests/test_1.json';

// State manager для пользовательских данных прохождения теста
export default class UserStore {
    constructor() {
        let userName = "";
        let userStartTestTime = 0;
        let userResultTestTime = 0;
        let userShuffleArrayIndexAnswers = {};
        if (localStorage.getItem("userName"))    // Проверяю наличие данных имени пользователя в localStorage
            userName = localStorage.getItem("userName"); 
        if (localStorage.getItem("userStartTestTime"))   // Проверяю наличие данных времени начала прохождения теста в localStorage
            userStartTestTime = new Date(localStorage.getItem("userStartTestTime"));
        if (localStorage.getItem("userResultTestTime"))
            userResultTestTime = parseFloat(localStorage.getItem("userResultTestTime"));
        for (let i = 0; i < MyTestJson.countQuestions; i++) {   // Проверяю наличие данных позиций перемешанных ответов в localStorage по каждому вопросу
            if (localStorage.getItem("shuffleArrayIndex_" + MyTestJson.questions[i].id))
                userShuffleArrayIndexAnswers[MyTestJson.questions[i].id] = localStorage.getItem("shuffleArrayIndex_" + MyTestJson.questions[i].id).split('_');
        }
        this._name = userName;
        this._time = userStartTestTime;
        this._resultTime = userResultTestTime
        this._shuffleQuestions = userShuffleArrayIndexAnswers
        makeAutoObservable(this);
    }

    setName(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    setShuffleQuestions(shuffleQuestions) {
        this._shuffleQuestions = shuffleQuestions;
    }

    get shuffleQuestions() {
        return this._shuffleQuestions;
    }

    setResultTime(resultTime) {
        this._resultTime = resultTime;
    }

    get resultTime() {
        return this._resultTime;
    }

    setTime(time) {
        this._time = time;
    }

    get time() {
        return this._time;
    }

    clear() {
        this._name = "";
        this._time = 0;
        this._resultTime = 0;        
        this._shuffleQuestions = {};
    }
}