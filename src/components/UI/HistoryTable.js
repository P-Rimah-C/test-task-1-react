import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { HISTORY_ROUTE } from '../../utils/consts';

// Компонент отображения таблицу с данными ФИО, оценок и времени выполнения тестов
const HistoryTable = ({allHistoryData, test}) => {
    const router = useNavigate();
    // Функция перехода на подробную информацию выбранного теста
    const GoToResultTest = (id) => {
        router(HISTORY_ROUTE + '/' + id);
    }
    return (
        <Table className='mt-3 ' responsive striped bordered hover>
            <thead>
                <tr>
                    <th className='text-center'>#</th>
                    <th>User Name</th>
                    <th className='text-center'>Test Rating</th>
                    <th className='text-center'>Run Time</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {Object.entries(allHistoryData).map(([key, value]) => {
                    let colorInfo = value.user.rating === test.countQuestions ? "text-success" : "text-danger"
                    return (
                        <tr key={key} onClick={() => GoToResultTest(key)} role="button">
                            <td className='text-center'>{key}</td>
                            <td>{value.user.name}</td>
                            <td className={`text-center ${colorInfo}`}>{value.user.rating}/{test.countQuestions}</td>
                            <td className='text-end'>{value.user.resultTime}c</td>
                        </tr>
                    )
                })}
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default HistoryTable;