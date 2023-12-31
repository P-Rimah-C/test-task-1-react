import React, { Navigate } from "react-router-dom";

import Start from "../page/Start.js";
import Question from "../page/Question.js";
import Result from "../page/Result.js";
import History from "../page/History.js";
import HistoryResult from "../page/HistoryResult.js";
import Error404 from "../page/Error404.js";
import {ERROR_ROUTE, QUESTION_ROUTE, RESULT_ROUTE, START_ROUTE, HISTORY_ROUTE} from "./consts.js";

// Связывание url и страниц
export const routes = [
    {
        path: START_ROUTE,
        Component: <Start />,
        exact: false
    },
    {
        path: QUESTION_ROUTE + '/:id',
        Component: <Question />,
        exact: false
    },
    {
        path: RESULT_ROUTE,
        Component: <Result />,
        exact: false
    },
    {
        path: HISTORY_ROUTE,
        Component: <History />,
        exact: true
    },
    {
        path: HISTORY_ROUTE + '/:id',
        Component: <HistoryResult />,
        exact: true
    },
    {
        path: ERROR_ROUTE,
        Component: <Error404 />,
        exact: false
    },
    {
        path: '/',
        Component: <Navigate replace to={START_ROUTE} />,
        exact: false
    },
    {
        path: '*',
        Component: <Navigate replace to={ERROR_ROUTE} />,
        exact: false
    }
];