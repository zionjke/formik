import * as React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";


export const CheckboxGroup = ({label, name, options, ...rest}) => {
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <div className='form-control-item' key={option.key}>
                                    <input type="checkbox"
                                           id={option.value}
                                           {...field}
                                           value={option.value}
                                           checked={field.value.includes(option.value)}/>
                                    <label htmlFor={option.value}>{option.key}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};
