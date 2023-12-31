import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HISTORY_ROUTE } from '../../utils/consts';
import HistoryTable from './HistoryTable';

// Компонент отображения названия теста, таблицу и кнопки отчистить историю
const HistoryTests = ({test, history, ...props}) => {
    const router = useNavigate();
    // Функция отчистки истории из localStorage и Context и обновления страницы
    const clearHistory = () => {
        if (localStorage.getItem("iteration")) {
            const lastIter = parseInt(localStorage.getItem("iteration"));
            for (let iter = 0; iter <= lastIter; iter++)
                localStorage.removeItem("history_" + iter)
        }
        localStorage.removeItem("iteration");
        history.clear();
        router(HISTORY_ROUTE);
    }
    return (
        <div {...props}>
            <h3>Название теста: "{test.testName}"</h3>
            <HistoryTable allHistoryData={history.allHistoryData} test={test} />
            <div className='d-flex justify-content-end' >
                <Button 
                    type="button" 
                    onClick={clearHistory} 
                    className='' 
                    variant='danger'
                >
                    Очистить историю
                </Button>
            </div>
        </div>
    );
}

export default HistoryTests;