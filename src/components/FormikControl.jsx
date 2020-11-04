import * as React from 'react';
import {Input} from "./Input";
import {Textarea} from "./Textarea";


export const FormikControl = ({control, ...rest}) => {
    switch (control) {
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <Textarea {...rest}/>
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default:
            return null
    }
};
