import MyTestJson from '../myTests/test_1.json';

// Путался реализовать проверку существования переданного id
// Функция верефиакции iD реализована (но нигде не вызывается)
// Однако правильно реализовать роутинг в случае ошибки переданного id не получилось
export const VerificationId = (responseId) => {
    let verification = false;
    try {
        const respId = parseInt(responseId);
        for (let i = 0; i < MyTestJson.countQuestions; i++) {
            const question = MyTestJson.questions[i];
            if (parseInt(question.id) === respId) {
                verification = true;
                break;
            }
        }        
        if (/[a-zа-яё]+/i.test(responseId)) verification = false;
    }
    catch (err) {
        console.log(err)
        verification = false;
    }
    return verification;
}
