import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button} from 'react-bootstrap';

import { HISTORY_ROUTE } from '../../utils/consts';

// Компонент отображения кнопки для перехода на страницу истории выполнения теста
const ButtonGoToStart = () => {
    const router = useNavigate();
    const goToHistory = () => {        
        router(HISTORY_ROUTE);
    }
    return (
        <Button 
            type="button" 
            className='m-3' 
            variant='outline-danger' 
            size='lg'
            onClick={goToHistory} 
        >
            Назад
        </Button>
    );
}

export default ButtonGoToStart;