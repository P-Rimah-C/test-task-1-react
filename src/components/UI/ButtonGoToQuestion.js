import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import MyTestJson from '../../myTests/test_1.json';

// Компонент отображения кнопки для перехода на следующий/предыдущий вопрос
const ButtonGoToQuestion = ({id, questionPage, anyPage, type, updateCheckBox, children, ...props}) => {
    const router = useNavigate();
    const sideId = type === 'danger' ? MyTestJson.questions[0].id === id + 1: MyTestJson.countQuestions === id - 1;
    //Функция сохранения данных посредством callback функции updateCheckBox и перехода на другие страницы
    const saveDataAndNext = () => { 
        updateCheckBox(type);
        if (sideId) router(anyPage);
        else router(questionPage);
    }
    return (
        <Button 
            type='button'  
            onClick={saveDataAndNext} 
            variant={type}
            {...props}
        >
            {children}
        </Button>
    );
}

export default ButtonGoToQuestion;