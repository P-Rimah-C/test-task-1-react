import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProgressBar, Form } from 'react-bootstrap';

import {AppContext} from "../context";
import MyContainer from "../components/UI/MyContainer";
import ButtonGoToQuestion from '../components/UI/ButtonGoToQuestion';
import Answers from '../components/UI/Answers';
import {ChooseColor} from "../components/ChooseColor";
import { START_ROUTE, QUESTION_ROUTE, RESULT_ROUTE } from '../utils/consts';
import {SaveData} from "../components/SaveData";

import MyTestJson from '../myTests/test_1.json';
import { SaveResultTest } from '../components/SaveResultTest';
import Error404 from './Error404';

// Страница отображения вопроса для тестирования:
// 1) Название вопроса
// 2) Варианты ответов
// 3) Кнопка начать дальше
// 4) Кнопка начать назад

const Question = () => {
    const {user, userResult, history} = useContext(AppContext);
    const params = useParams();
    const [selectedAnswer, setSelectedAnswer] = useState(userResult.answers[params.id] || []); // Состояние для отображения введеных ответов в случае перезгрузки страницы или перехода
    const [nextQuestion, setNextQuestion] = useState(false); // Состояние для отслеживания перехеда на следуюущую страницу (для отчистки слеюущих checkBox)
    try {
        const progress = 100 * params.id / MyTestJson.countQuestions; // Процент выполения теста
        const question = MyTestJson.questions[params.id-1]; // Получение текущего вопроса
        const color = ChooseColor(progress); // Процент выполнения теста в цветовой гамме
        const backId = question.id - 1; // id предыдущего вопроса
        const nextId = question.id + 1; // id следующего вопроса

        // Функция сохранения данных в localStorage и в Context:
        // 1) введеных ответов, 
        // 2) времени окончания теста.
        // Перенаправление на страницу следующего/предыдущего вопроса
        const updateCheckBox = (type) => {
            setNextQuestion(!nextQuestion);
            if (type === 'success') { // Кнопка следующего вопроса
                SaveData("question_" + question.id, selectedAnswer.join('_'));
                userResult.setAnswer({...userResult.answers, [question.id]: selectedAnswer});
                if (MyTestJson.countQuestions === question.id) { // Кнопка завершения теста
                    const resultTime = (new Date() - user.time)/1000
                    user.setResultTime(resultTime);
                    SaveData("userResultTestTime", resultTime);
                    SaveResultTest(user.name, resultTime, userResult.answers, MyTestJson, history); // Сохранения данных вопределнном формате для истории пройденных тестов
                } 
                setSelectedAnswer(userResult.answers[nextId] || []);
            }
            else { // Кнопка предыдущего вопроса
                setSelectedAnswer(userResult.answers[backId] || []); // Загрузка в состояние отмеченных ответов
            }
            console.log([...selectedAnswer])
        }

        return (
            <div>
                <ProgressBar animated variant={color} now={progress} label={`${progress}%`}/>
                <MyContainer border={color} space={50} additional={"align-items-center"} className='p-5' style={{width: 600}}>
                    <h3 className='m-auto mb-3'> {question.questionName} </h3>
                    <Form className='d-flex flex-column'>
                        <Answers 
                            shuffleQuestions={user.shuffleQuestions}
                            question={question} 
                            nextQuestion={nextQuestion}
                            selectedAnswer={selectedAnswer} 
                            setSelectedAnswer={setSelectedAnswer} 
                        />
                        <div className="d-flex justify-content-between mt-3">
                            <ButtonGoToQuestion 
                                id={backId} 
                                questionPage={QUESTION_ROUTE + '/' + backId} 
                                anyPage={START_ROUTE} 
                                type={'danger'}
                                updateCheckBox={updateCheckBox}
                            >
                                Назад
                            </ButtonGoToQuestion>
                            <ButtonGoToQuestion 
                                id={nextId} 
                                questionPage={QUESTION_ROUTE + '/' + nextId} 
                                anyPage={RESULT_ROUTE} 
                                type={'success'}
                                updateCheckBox={updateCheckBox}
                                disabled={selectedAnswer.length === 0}
                            >
                                {
                                    MyTestJson.countQuestions === question.id 
                                    ? "Завершить"
                                    : "Дальше"
                                }
                            </ButtonGoToQuestion>
                        </div>
                    </Form>
                    
                </MyContainer>
            </div>
        );
    }
    catch {
        return (
            <Error404 />
        );
    }
}

export default Question;