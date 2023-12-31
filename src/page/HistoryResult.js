import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import MyContainer from "../components/UI/MyContainer";
import ResultTest from "../components/UI/ResultTest";
import ButtonGoToHistory from '../components/UI/ButtonGoToHistory';
import {AppContext} from "../context";
import Error404 from './Error404';

// Страница отображения подробной информации выбранного теста из истории:
// 1) Название теста
// 2) ФИО
// 3) Оценка
// 4) Время выполнения
// 5) Вопрос с ответами 
// 6) Кнопка назад на историю выполнения теста
const HistoryResult = () => {
    const {history} = useContext(AppContext);
    const params = useParams();
    try {
        const resultTest = history.allHistoryData[params.id]
        return (
            <MyContainer border="primary" space={100} additional="my-5" className="d-flex justify-content-between">
                <ResultTest user={resultTest.user} resulteAnswers={resultTest.answers} className='px-5 pt-3'/>
                <ButtonGoToHistory />
            </MyContainer>
        );
    }
    catch {
        return (
            <Error404 />
        );
    }
}

export default HistoryResult;