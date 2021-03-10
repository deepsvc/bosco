import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function RadioButtons(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className='form-control'>
            <Field name={name}>
                {({ field }) => {
                    return options.map((option) => {
                        return (
                            <div key={option.key}>
                                <div>
                                    <input
                                        type='radio'
                                        id={option.value}
                                        {...field}
                                        {...rest}
                                        value={option.value}
                                        checked={field.value === option.value}
                                    />
                                    <label htmlFor={option.value}>
                                        {option.key}
                                    </label>
                                </div>
                            </div>
                        );
                    });
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default RadioButtons;
