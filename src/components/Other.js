import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Other(props) {
    const { label, name, ...rest } = props;
    return (
        <React.Fragment>
            <Field id={name} name={name} {...rest} />
        </React.Fragment>
    );
}

export default Other;
