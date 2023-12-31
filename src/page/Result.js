import React, { useContext } from 'react';

import MyContainer from "../components/UI/MyContainer";
import ResultTest from "../components/UI/ResultTest";
import MyNavTabs from '../components/UI/MyNavTabs';
import ButtonGoToStart from '../components/UI/ButtonGoToStart';
import {AppContext} from "../context";
import { RESULT_ROUTE } from '../utils/consts';
import Error404 from './Error404';

// Страница отображения результаттов теста:
// 1) Название теста
// 2) ФИО
// 3) Оценка
// 4) Время выполнения
// 5) Вопрос с ответами 
// 6) Кнопка пройти ещё раз
// 7) NavTabs для перехода на историю пройденных тестов
const Result = () => {
    const {user, userResult} = useContext(AppContext);
    try {
        return (
            <MyContainer border="primary" space={100} additional="my-5" className="d-flex justify-content-between">
                <div>
                    <MyNavTabs defaultActiveKey={RESULT_ROUTE} />
                    <ResultTest user={user} resulteAnswers={userResult.answers} className='px-5 pt-3'/>
                </div>
                <ButtonGoToStart />
            </MyContainer>
        );
    }
    catch {
        return (
            <Error404 />
        );
    }
}

export default Result;