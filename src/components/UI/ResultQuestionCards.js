import React from 'react';
import { Card } from 'react-bootstrap';

import MyCheckBox from "./MyCheckBox";
import {ShuffleByIndex} from "../ShuffleByIndex";

// Функция инициализации массива выбранных ответов (без возможности изменения ответа)
function defaultCheckedFild(countAn, selAn) {
    const newCheckedFild = new Array(countAn).fill(false);
    if (typeof selAn !== "undefined") { // Проверка наличия выбранных ответов у вопроса
        for (let i = 0; i < selAn.length; i++) {
            newCheckedFild[selAn[i]-1] = !newCheckedFild[selAn[i]-1];
        }
        return newCheckedFild;
    }
    else {
        return newCheckedFild;
    }
}

// Компонент отображения результов выбранных ответов по вопросу
const QuestionCard = ({shuffleQuestions, question, resulteAnswers, ...props}) => {
    const checkedFild = defaultCheckedFild(question.answers.length, resulteAnswers[question.id]);
    // Функция валидации выбранных ответов
    const validation = (checkedAnswer, answerId) => {
        let isValid = false; // Для окрашивания в зеленый, если правильно
        let isInalid = false; // Для окрашивания в красный, если не правильно
        const valid = question.correctAnswerId.find((el) => el === answerId);
        let color = valid ? "bg-success" : ""; // Для окрашивания заднего фона ответа
        if (checkedAnswer) {
            isValid = valid
            isInalid = !valid
        }
        else if (valid) {
            color = "bg-warning"
        }
        return [isValid, isInalid, color]
    }
    let answers = question.answers; // Переменная для перемешанного массива ответов
    if (Object.keys(shuffleQuestions).length !== 0) { // Проверка наличия перемешенных индексов ответов
        answers = ShuffleByIndex(question.answers, shuffleQuestions[question.id]); // Перемешивание ответов по полученным индексам
    }
    return (
        <Card {...props} className='mt-2' style={{ minWidth: '18rem' }}>
            <Card.Header>{question.questionName}</Card.Header>
            <div className='p-2 pt-0'>
                {answers.map(answer => {
                    const [isValid, isInalid, color] = validation(checkedFild[answer.id-1], answer.id)
                    return (
                        <MyCheckBox 
                            key={answer.id}
                            answer={answer} 
                            type={question.type} 
                            name={"group" + question.id}
                            checked={checkedFild[answer.id-1]}
                            readOnly
                            isValid={isValid}
                            isInvalid={isInalid}
                            color={color}
                        />
                    );
                })}
            </div>
        </Card>
    );
}

export default QuestionCard;