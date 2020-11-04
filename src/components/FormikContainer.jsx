import * as React from 'react';
import {Formik, Form} from "formik";
import * as Yup from 'yup'
import {FormikControl} from "./FormikControl";


export const FormikContainer = (props) => {

    const initialValues = {
        email: '',
        description: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('This field is required'),
        description: Yup.string().required('This field is required')
    });

    const onSubmit = values => {
        console.log('Form data', values)
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
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    );
};
