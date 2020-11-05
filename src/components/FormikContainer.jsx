import * as React from 'react';
import {Formik, Form} from "formik";
import * as Yup from 'yup'
import {FormikControl} from "./FormikControl";

export const FormikContainer = (props) => {

    const selectOptions = [
        {key: 'Select an Option', value: ''},
        {key: 'Option 1', value: 'option1'},
        {key: 'Option2', value: 'option2'},
        {key: 'Option3', value: 'option3'}
    ];

    const radioOptions = [
        {key: 'Option 1', value: 'rOption1'},
        {key: 'Option 2', value: 'rOption2'},
        {key: 'Option 3', value: 'rOption3'},
    ];

    const checkboxOptions = [
        {key: 'Option 1', value: 'cOption1'},
        {key: 'Option 2', value: 'cOption2'},
        {key: 'Option 3', value: 'cOption3'},
    ];


    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption:'',
        checkboxOption: [],
        birthDate: null
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('This field is required'),
        description: Yup.string().required('This field is required'),
        selectOption: Yup.string().required('This field is required'),
        radioOption: Yup.string().required('This field is required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
    });

    const onSubmit = values => {
        console.log('Form data', values);
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='email'
                            name='email'/>
                        <FormikControl
                            control='textarea'
                            label='description'
                            name='description'/>
                        <FormikControl
                            control='select'
                            label='Select a topic'
                            name='selectOption'
                            options={selectOptions}/>
                        <FormikControl
                            control='radio'
                            label='Radio topic'
                            name='radioOption'
                            options={radioOptions}/>
                        <FormikControl
                            control='checkbox'
                            label='Checkbox topic'
                            name='checkboxOption'
                            options={checkboxOptions}/>
                        <FormikControl
                            control='date'
                            label='Pick a date'
                            name='birthDate'
                            />
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    );
};
