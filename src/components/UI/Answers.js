import React, { useEffect, useState } from 'react';
import MyCheckBox from "./MyCheckBox";
import {ShuffleByIndex} from "../ShuffleByIndex";

// Компонент отображения массива ответов у вопроса
const Answers = ({ shuffleQuestions, question, nextQuestion, selectedAnswer, setSelectedAnswer, ...props}) => {
    // Функция изначальной инициализация Bool массива для отмеченных/неотмеченных вопросов
    const defaultCheckedFild = () => {
        const newCheckedFild = new Array(question.answers.length).fill(false);
        for (let i = 0; i < selectedAnswer.length; i++) {
            newCheckedFild[selectedAnswer[i]-1] = !newCheckedFild[selectedAnswer[i]-1];
        }
        return newCheckedFild;
    }

    const [checkedFild, setCheckedFild] = useState(defaultCheckedFild()); // Состояние для сохранения отмеченых ответов

    useEffect(() => { // Отслеживание изменения перехода на другую страницу вопроса для изначальной инициализации отмеченных ответов
        setCheckedFild(defaultCheckedFild());
    }, [nextQuestion])

    // Функция сохранения данных введеных ответов в Context
    const updateCheck = (e) => {
        const idCheck = e.target.value; // ID ответа
        // В зависимости от типа вопроса создание определнного массива ответов
        if (question.type === "checkbox") { 
            const newCheckedFild = [...checkedFild];
            newCheckedFild[idCheck-1] = !newCheckedFild[idCheck-1]; // Toggle флажка для checkBox
            setCheckedFild(newCheckedFild);
            if (!newCheckedFild[idCheck-1]) // Удаление убранного ответа
                setSelectedAnswer(selectedAnswer.filter((el) => {
                    return el !== idCheck
                }));
            else // Добавление выбранного ответа
                setSelectedAnswer([...selectedAnswer, ...[idCheck]]);
        }
        else {
            const newCheckedFild = new Array(question.answers.length).fill(false);
            newCheckedFild[idCheck-1] = !newCheckedFild[idCheck-1];            
            setCheckedFild(newCheckedFild);
            setSelectedAnswer([idCheck]);
        }
    }
    let answers = question.answers; // Переменная для перемешанного массива ответов
    if (Object.keys(shuffleQuestions).length !== 0) { // Проверка наличия перемешенных индексов ответов
        answers = ShuffleByIndex(question.answers, shuffleQuestions[question.id]); // Перемешивание ответов по полученным индексам
    }
    return (
        <div>
            {answers.map(answer => {
                return (
                    <MyCheckBox 
                        key={answer.id}
                        answer={answer} 
                        type={question.type} 
                        name={"group" + question.id} 
                        checked={checkedFild[answer.id-1]} 
                        onChange={(e) => updateCheck(e)} 
                        value={answer.id}
                    />
                );
            })}
        </div>
    );
}

export default Answers;