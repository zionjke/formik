
import * as React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";


export const Textarea = ({label,name,...rest}) => {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} as='textarea' {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};
