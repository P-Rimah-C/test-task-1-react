import React from 'react';
import { Form } from 'react-bootstrap';

const MyCheckBox = ({answer, color, ...props}) => {
    return (
        <div className={`mt-1 p-1 ${color} bg-opacity-25 rounded-3`}>
            <Form.Check
                label={answer.text}
                id={answer.id}
                {...props}
            />
        </div>
    );
}

export default MyCheckBox;