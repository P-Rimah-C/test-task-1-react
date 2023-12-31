// Функция простроения объекта из данных прохождения теста для истории
export const CreateTestInfoObj = (historyDataString) => {
    const historyData = historyDataString.split('*$*');
    const answerStr = historyData[4].split('*_*');
    let answers = {};
    for (let i = 0; i < answerStr.length; i++) {
        const questionAnswer = answerStr[i].split('*|*');
        answers[parseInt(questionAnswer[0])] = questionAnswer[1].split('_');
    }
    return ({
        id:  parseInt(historyData[0]),
        testData: {
            user: {
                name: historyData[1], 
                rating: parseInt(historyData[2]),
                resultTime: parseFloat(historyData[3]),
                shuffleQuestions: {}
            }, 
            answers: answers
        }
    });
}