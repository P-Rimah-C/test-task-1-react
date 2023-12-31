import React from 'react';
import { Table } from 'react-bootstrap';

import ResultQuestionCards from "./ResultQuestionCards";

import MyTestJson from '../../myTests/test_1.json';
import { CalculationCorrectAnswer } from '../CalculationCorrectAnswer';

// Компонент отображения результов пройденного теста
const ResultTest = ({user, resulteAnswers, ...props}) => {
    const test = MyTestJson
    const questions = test.questions;
    const correctAnswer = CalculationCorrectAnswer(test, resulteAnswers); // Подсчёт оценки
    let colorInfo = correctAnswer === test.countQuestions ? "text-success" : "text-danger" // Цветовая гамма для оценки
    return (
        <div {...props}>
            <h3>Название теста: "{test.testName}"</h3>
            <Table className='mt-3' responsive>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td className={`fw-bold text-end ${colorInfo}`}> {correctAnswer}/{test.countQuestions}</td>
                        <td className='text-end'>{user.resultTime}c</td>
                    </tr>
                </tbody>
            </Table>
            {questions.map(question => {
                return (
                    <ResultQuestionCards shuffleQuestions={user.shuffleQuestions} question={question} resulteAnswers={resulteAnswers} key={question.id} />
                );
            })}
        </div>
    );
}

export default ResultTest;