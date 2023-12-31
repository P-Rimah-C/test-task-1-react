import React, { useContext } from 'react';

import MyContainer from "../components/UI/MyContainer";
import HistoryTests from "../components/UI/HistoryTests";
import MyNavTabs from '../components/UI/MyNavTabs';
import ButtonGoToStart from '../components/UI/ButtonGoToStart';
import {AppContext} from "../context";
import { HISTORY_ROUTE } from '../utils/consts';

import MyTestJson from '../myTests/test_1.json';

// Страница отображения истории прохождения теста:
// 1) Название теста
// 2) Таблица с данными ФИО, оценок и времени выполнения тестов
// 3) Кнопка пройти ещё раз
// 4) Кнопка отчистить историю
// 5) NavTabs для перехода на результаты только что выполненого теста
const History = () => {
    const {history} = useContext(AppContext);
    return (
        <MyContainer border="primary" space={100} additional="my-5" className="d-flex justify-content-between">
            <div>
                <MyNavTabs defaultActiveKey={HISTORY_ROUTE} />
                <HistoryTests test={MyTestJson} history={history} className='px-5 pt-3'/>
            </div>
            <ButtonGoToStart />
        </MyContainer>
    );
}

export default History;