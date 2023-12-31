import MyTestJson from '../myTests/test_1.json';

// Отчистка всех данных в localStorage, кроме истрии прохождений теста
export const ClearResultTestLocalStorage = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userStartTestTime");
    localStorage.removeItem("userResultTestTime");
    for (let i = 0; i < MyTestJson.countQuestions; i++) {
        localStorage.removeItem("question_" + MyTestJson.questions[i].id);
        localStorage.removeItem("shuffleArrayIndex_" + MyTestJson.questions[i].id);
    }
}
