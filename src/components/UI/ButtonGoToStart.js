import React, { useContext }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Button} from 'react-bootstrap';

import {ClearResultTestLocalStorage} from "../ClearResultTestLocalStorage";
import {AppContext} from "../../context";
import { START_ROUTE } from '../../utils/consts';

// Компонент отображения кнопки для перехода на стартовую страницу
const ButtonGoToStart = () => {
    const {user, userResult} = useContext(AppContext);
    const router = useNavigate();
    //Функция отчистки определнных данных в localStorage и перехода на стартовую страницу
    const goToStart = () => {        
        console.log('Cleared localStorage');
        ClearResultTestLocalStorage(); // отчистка данных в localStorage
        user.clear();
        userResult.clear();
        router(START_ROUTE);
    }
    return (
        <Button 
            type="button" 
            className='m-3' 
            variant='outline-primary' 
            size='lg'
            onClick={goToStart} 
        >
            Пройти ещё раз
        </Button>
    );
}

export default ButtonGoToStart;