// Функция преобразования всех текущих данных прохождения теста в строку в определенном формате для истории прохождения теста
export const CreateTestInfoStr = (id, name, rating, resultTime, test, answers) => {
    const historyDataUser = [id, name, rating, resultTime].join('*$*');
    let historyDataAnswer = [];
    for (let i = 0; i < test.countQuestions; i++) {
        const qId = test.questions[i].id;
        historyDataAnswer.push([qId, answers[qId].join('_')].join('*|*'));
    }
    historyDataAnswer = historyDataAnswer.join('*_*');
    return [historyDataUser, historyDataAnswer].join('*$*');
}