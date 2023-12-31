import { CalculationCorrectAnswer } from "./CalculationCorrectAnswer";
import { CreateTestInfoObj } from "./CreateTestInfoObj";
import { CreateTestInfoStr } from "./CreateTestInfoStr";
import { SaveData } from "./SaveData";

// Функция сохранения результатов пройденного теста в localStorage
export const SaveResultTest = (name, resultTime, answers, test, history) => {
    let iter = 0; // Переменная для отслеживания текущей записи в истории пройденных тестов
    if (localStorage.getItem("iteration")) 
        iter = parseInt(localStorage.getItem("iteration")) + 1;
    const rating = CalculationCorrectAnswer(test, answers); // Вычисление оценки
    const historyDataStr = CreateTestInfoStr(iter, name, rating, resultTime, test, answers); // Создание строки из всех данных пройденного теста
    const historyDataObj = CreateTestInfoObj(historyDataStr); // Создание объекта из строки для добавления их в Context
    history.addTestData(historyDataObj.id, historyDataObj.testData);
    SaveData("iteration", iter);
    SaveData("history_" + iter, historyDataStr)
}