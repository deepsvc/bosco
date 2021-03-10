import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Textarea(props) {
    const { label, name, ...rest } = props;
    return (
        <div className='ms-5 my-3'>
            <Field
                rows='4'
                className='form-control'
                as='textarea'
                id={name}
                name={name}
                {...rest}
            />
        </div>
    );
}

export default Textarea;
