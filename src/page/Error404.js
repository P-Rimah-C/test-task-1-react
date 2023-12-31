import React from 'react';
import { useNavigate } from 'react-router-dom';

import MyContainer from "../components/UI/MyContainer";
import { START_ROUTE } from '../utils/consts';

// Страница ошибки 404, для неправильных url и переход на статовую страницу
const Error404 = () => {
    const router = useNavigate();
    return (
        <MyContainer role="button" onClick={() => router(START_ROUTE)} space={50} additional={"align-items-center"} className='p-5' style={{width: 600}}>
            <div className="fw-bold text-danger" >
                <h1> Page not founded! </h1>
                <h2> Error 404... </h2>
            </div>
        </MyContainer>
    );
}

export default Error404;