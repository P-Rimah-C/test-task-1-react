import { makeAutoObservable } from "mobx";
import { CreateTestInfoObj } from "../components/CreateTestInfoObj";

// State manager для истории выполенния теста
export default class HistoryTestsStore {
    constructor() {
        let allHistoryData = {};
        if (localStorage.getItem("iteration")) {  // Проверяю наличие данных истории прохождения теста в localStorage
            const lastIter = parseInt(localStorage.getItem("iteration"));
            for (let iter = 0; iter <= lastIter; iter++) {
                if (localStorage.getItem("history_" + iter)) {
                    const historyData = CreateTestInfoObj(localStorage.getItem("history_" + iter));
                    allHistoryData[historyData.id] = historyData.testData;
                }
            }
        }
        this._allHistoryData = allHistoryData;
        makeAutoObservable(this);
    }

    // Добавление новой строки данных прохождения теста в истории
    addTestData(id, testData) {
        this._allHistoryData[id] = testData;
    }

    get allHistoryData() {
        return this._allHistoryData;
    }
    
    clear() {
        this._allHistoryData = {};
    }
}