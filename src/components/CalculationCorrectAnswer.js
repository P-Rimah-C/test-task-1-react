// Функция вычисления количеста правильных ответов относительно количества вопросов
export const CalculationCorrectAnswer = (test, resulteAnswers) => {
    try {
        const questions = test.questions
        let correctAnswer = 0;
        for (let i = 0; i < test.countQuestions; i++) {
            let increment = true;
            if (questions[i].correctAnswerId.length === resulteAnswers[questions[i].id].length) {
                for (let j = 0; j < questions[i].correctAnswerId.length; j++) {
                    if (!resulteAnswers[questions[i].id].includes(questions[i].correctAnswerId[j] + '')) {
                        increment = false;
                        break;
                    }
                }
            }
            else
                increment = false;
            if (increment)
                correctAnswer++;
        }
        return correctAnswer;
    }
    catch {
        return 0;
    }
}