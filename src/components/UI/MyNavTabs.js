import React from 'react';
import { Link } from 'react-router-dom';
import { Nav  } from 'react-bootstrap';
import { HISTORY_ROUTE, RESULT_ROUTE } from '../../utils/consts';

const MyNavTabs = ({defaultActiveKey}) => {
    return (
        <Nav variant="tabs" defaultActiveKey={defaultActiveKey}>
            <Nav.Item>
                <Nav.Link eventKey={RESULT_ROUTE} as={Link} to={RESULT_ROUTE}>Ваши баллы</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={HISTORY_ROUTE} as={Link} to={HISTORY_ROUTE}>Результаты тестов</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default MyNavTabs;