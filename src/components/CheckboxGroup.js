import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import FormikControl from './FormikControl';

function CheckboxGroup(props) {
    const { label, name, options, ...rest } = props;
    const [toggle, setToggle] = useState(false);
    const isOtherSelected = (x) => {
        if (x === 'other') setToggle(true);
        else setToggle(false);
    };
    return (
        <div className='m-3'>
            <Field name={name}>
                {({ field, values }) => {
                    return options.map((option) => {
                        return (
                            <div key={option.key} className='m-3'>
                                <input
                                    type='radio'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                    onClick={() =>
                                        isOtherSelected(option.value)
                                    }
                                />

                                <label
                                    htmlFor={option.value}
                                    className='px-2 d-inline'
                                    style={{ fontWeight: '500' }}>
                                    {option.key}
                                </label>
                                {toggle && option.value == 'other' ? (
                                    <FormikControl
                                        className='form-control w-50 mx-5 d-inline'
                                        control='other'
                                        type='text'
                                        name='other'
                                    />
                                ) : null}
                            </div>
                        );
                    });
                }}
            </Field>

            <ErrorMessage
                component={TextError}
                name={name}
                className='errorMessage'
            />
        </div>
    );
}

export default CheckboxGroup;
