import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import {AppContext} from "../context";
import MyContainer from "../components/UI/MyContainer";
import {SaveData} from "../components/SaveData";
import {CreateShuffleArrayIndexes} from "../components/CreateShuffleArrayIndexes";
import { QUESTION_ROUTE } from '../utils/consts';

import MyTestJson from '../myTests/test_1.json';

// Страница начальной загрузки сайта:
// 1) Название теста
// 2) Ввод ФИО пользователя
// 3) Кнопка начать тест

const Start = () => {
    const router = useNavigate();
    const {user} = useContext(AppContext);
    const [userName, setUserName] = useState(user.name); // Состояние для сохранения данных имя пользователя
    const [isDisable, setIsDisable] = useState(user.name === ""); // Состояние для включения/выклчения кнопки начать тест
    
    // Функция изменения состояний userName и isDisable при вводе текста
    const accessButton = (e) => {
        setUserName(e.target.value);
        setIsDisable(e.target.value === "");
    } 
    
    // Функция сохранения данных в localStorage и в Context:
    // 1) введеных данных, 
    // 2) времени начала теста, 
    // 3) перестановок индексов массива ответов у вопросов.
    // Перенаправление на страницу 1 вопроса
    const startTest = () => {
        const userStartTestTime = new Date();
        user.setName(userName);
        user.setTime(userStartTestTime);
        SaveData("userName", userName);
        SaveData("userStartTestTime", userStartTestTime);
        const shuffleQuestions = {}; // Объект для перестановок индексов массивов ответов
        for (let i = 0; i < MyTestJson.countQuestions; i++) {
            const shuffleArrayIndex = CreateShuffleArrayIndexes(MyTestJson.questions[i].answers.length); // Получение перемешенного массива индексов ответов для вопоса
            shuffleQuestions[MyTestJson.questions[i].id] = shuffleArrayIndex;
            SaveData("shuffleArrayIndex_" + MyTestJson.questions[i].id, shuffleArrayIndex.join('_'));
        }
        user.setShuffleQuestions(shuffleQuestions);
        router(QUESTION_ROUTE + '/' + MyTestJson.questions[0].id);
    }

    return (
        <MyContainer border="primary" space={50} additional={"align-items-center"} className='p-5' style={{width: 600}}>
            <h1 className='m-auto'>{MyTestJson.testName}</h1>
            <Form className='d-flex flex-column'>
                <Form.Control 
                    defaultValue={user.name}
                    onChange={(e) => accessButton(e)} 
                    className='mt-3' 
                    placeholder='Введите ваше ФИО'
                />
                <Button 
                    type="button" 
                    onClick={startTest} 
                    className='mt-3' 
                    variant='outline-primary' 
                    size='lg' 
                    disabled={isDisable}
                >
                    Начать тест
                </Button>
            </Form>
        </MyContainer>
    );
}

export default Start;